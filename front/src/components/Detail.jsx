import style from './Detail.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch((error) => console.log(error));
    setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      <img
        className={style.imagen}
        src={character.image && character.image}
        alt=''
      />
      <h3 classNameName={style.texto}>
        Name: {character.name && character.name}{' '}
      </h3>
      <h3 className={style.texto}>
        Status: {character.status && character.status}{' '}
      </h3>
      <h3 className={style.texto}>
        Species: {character.species && character.species}{' '}
      </h3>
      <h3 className={style.texto}>
        Gender: {character.gender && character.gender}{' '}
      </h3>
      <h3 className={style.texto}>
        Origin: {character.origin?.name && character.origin?.name}{' '}
      </h3>
      <Link className={style.boton} to='/home'>
        {' '}
        <button>HOME</button>
      </Link>
    </div>
  );
};

export default Detail;
