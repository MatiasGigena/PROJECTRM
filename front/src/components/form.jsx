import { useState } from 'react';
import style from './form.module.css';
import validate from './validation';

const Forms = ({ login }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrores(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };
  const [errores, setErrores] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <div className={style.container}>
      <form className={style.formulario} onSubmit={handleSubmit}>
        <label className={style.texto} htmlFor='email'>
          Email:
        </label>
        <input
          className={style.espacio}
          value={userData.email}
          type='email'
          name='email'
          onChange={handleChange}
        />
        {errores.email && <p className={style.error}>{errores.email}</p>}
        <hr />
        <label className={style.texto} htmlFor='password'>
          Password:
        </label>
        <input
          className={style.espacio}
          value={userData.password}
          type='password'
          name='password'
          onChange={handleChange}
        />
        {errores.password && <p className={style.error}>{errores.password}</p>}
        <hr />
        <button className={style.boton}>Submit</button>
      </form>
    </div>
  );
};

export default Forms;
