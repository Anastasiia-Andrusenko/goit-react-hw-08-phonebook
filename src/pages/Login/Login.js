
import { Helmet } from 'react-helmet';
import LoginForm from '../../components/LoginForm/LoginForm';

// import css from './Login.module.css';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}