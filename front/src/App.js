import './App.css';
import Cards from './components/Cards.jsx';
import fax2 from './components/assets/img/fax2.png';
import Nav from './components/navBar';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Forms from './components/form.jsx';
import MyFavorite from './components/myFavorite';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const email = 'matias.gigena7@outlook.es';
  const password = 'contra1';

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
    } catch (error) {
      console.log(error.message);
    }
  }
  // const { email, password } = userData;
  // const URL = 'http://localhost:3001/rickandmorty/login/';
  // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //   const { access } = data;
  //   setAccess(access);
  //   access && navigate('/home');
  // });

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   fetch(`http://localhost:3001/rickandmorty/character/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.name) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         window.alert('¡No hay personajes con este ID!');
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className='App'>
      {location.pathname === '/' ? (
        <Forms login={login} />
      ) : (
        <Nav onSearch={onSearch} />
      )}

      <Routes>
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/fav' element={<MyFavorite />} />
      </Routes>
      <img className='Fondo' src={fax2} />
    </div>
  );
}
export default App;
