
import { Helmet } from 'react-helmet';
import LoginForm from '../../components/LoginForm/LoginForm';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/selectors';
// import { Navigate } from 'react-router-dom';
// import css from './Login.module.css';

export default function Login() {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  // if (isLoggedIn) {
  //   return <Navigate to='/contacts'/>
  // }

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}