import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import style from './myFavorite.module.css';
import { filterCards, orderCards } from './Redux/actions';
import { useState } from 'react';

const Favorites = () => {
  const [aux, setAux] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  return (
    <div>
      <div className={style.Filtros}>
        <div className={style.orden}>
          <select onChange={handleOrder}>
            <option value='A'>ASCENDENTE</option>
            <option value='D'>DESCENDENTE</option>
          </select>
        </div>
        <div className={style.tipo}>
          <select onChange={handleFilter}>
            <option value='Male'>MALE</option>
            <option value='Female'>FEMALE</option>
            <option value='Genderless'>GENDERLESS</option>
            <option value='Unknown'>unknown</option>
          </select>
        </div>
      </div>
      <div className={style.mostrar}>
        {myFavorites?.map(
          ({ id, name, onClose, status, species, gender, origin, image }) => {
            return (
              <Card
                id={id}
                name={name}
                onClose={onClose}
                status={status}
                species={species}
                gender={gender}
                origin={origin}
                image={image}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Favorites;
