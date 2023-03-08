import css from './UserMenu.module.css';
import { IoLogOut } from 'react-icons/io5';

const UserMenu = () => {
  return (
    <div className={css.container}>
      <p className={css.user_mail}>nastya@gmail.com</p>
      <button type='button' className={css.btn}>
        Logout
        <IoLogOut className={css.icon} />
      </button>
    </div>
  )
}

export default UserMenu;