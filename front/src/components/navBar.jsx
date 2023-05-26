import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';
import style from './navbar.module.css';

const Nav = ({ onSearch }) => {
  return (
    <div className={style.barraGral}>
      <Link to='/about'>
        <button className={style.about}>ABOUT</button>
      </Link>
      <Link to='/home'>
        <button className={style.home}>HOME</button>
      </Link>
      <Link to='/fav'>
        <button className={style.favorites}>FAVORITES</button>
      </Link>
      <Link to='/'>
        <button className={style.logout}>LOG OUT</button>
      </Link>

      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
