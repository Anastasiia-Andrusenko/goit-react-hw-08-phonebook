import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

import { useAuth } from 'hooks/useAuth';

import css from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </header>
  )
}

export default AppBar;