import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { TiHome } from 'react-icons/ti';

const Navigation = () => {
  return (
    <nav className={css.container}>
      <NavLink className={css.link} to="/">
        Home
        <TiHome className={css.icon} />
      </NavLink>
      <NavLink className={`${css.link}`} to="/contacts">
        Contacts
        <RiContactsBook2Fill className={css.icon} />
      </NavLink>
    </nav>
  )
}


export default Navigation;