import style from './card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from './Redux/actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

// function Card({
//   id,
//   onClose,
//   name,
//   status,
//   species,
//   gender,
//   origin,
//   image,
//   addFav,
//   removeFav,
//   myFavorites,
// }) {
//   const [isFav, setIsFav] = useState(false);

//   const handleFavorite = () => {
//     isFav
//       ? removeFav(id)
//       : addFav({ id, name, status, species, gender, origin, image, onClose });
//     setIsFav(!isFav);
//   };

//   useEffect(() => {
//     myFavorites.forEach((fav) => {
//       if (fav?.id === id) {
//         setIsFav(true);
//       }
//     });
//   }, [myFavorites]);

//   return (
//     <div className={style.Contenedor}>
//       {isFav ? (
//         <button onClick={handleFavorite}>❤️</button>
//       ) : (
//         <button onClick={handleFavorite}>🤍</button>
//       )}
//       <img className={style.Img} src={image} alt='' />
//       <div className={style.Lista}>
//         <Link className={style.links} to={`/detail/${id}`}>
//           <p> Name: {name}</p>
//           <p> status: {status}</p>
//           <p> species: {species}</p>
//           <p> gender: {gender}</p>
//           <p> origin: {origin}</p>
//         </Link>
//       </div>
//       <button className={style.Boton} onClick={() => onClose(id)}>
//         Cerrar
//       </button>
//     </div>
//   );
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFav: (character) => {
//       dispatch(addFav(character));
//     },
//     removeFav: (id) => {
//       dispatch(removeFav(id));
//     },
//   };
// };
// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Card);
const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav
      ? removeFav(id)
      : addFav({ id, name, status, species, gender, origin, image, onClose });
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav?.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.Contenedor}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <img className={style.Img} src={image} alt='' />
      <div className={style.Lista}>
        <Link className={style.links} to={`/detail/${id}`}>
          <p>Name: {name}</p>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin}</p>
        </Link>
      </div>
      <button className={style.Boton} onClick={() => onClose(id)}>
        Cerrar
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
