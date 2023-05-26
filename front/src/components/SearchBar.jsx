import style from "./searchbar.module.css";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [character, setCharacter] = useState("");

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };
  function handleOnClick(event) {
    event.target.placeholder = "";
  }

  return (
    <div className={style.General}>
      <input
        className={style.Busqueda}
        placeholder='search by ID 🔍'
        type='search'
        value={character}
        onChange={handleChange}
        onClick={handleOnClick}
      />
      <div className={style.Barrageneral}>
        <button className={style.Barra} onClick={() => onSearch(character)}>
          Busqueda!
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
