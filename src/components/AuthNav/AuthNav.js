import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { IoLogIn } from 'react-icons/io5';
import { MdOutlineManageAccounts } from 'react-icons/md';

const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink className={css.btn} to="/register">
        Register
        <MdOutlineManageAccounts className={css.icon} />
      </NavLink>
      <NavLink className={css.btn} to="/login">
        Log In
        <IoLogIn className={css.icon} />
      </NavLink>
    </div>
  )
}

export default AuthNav;