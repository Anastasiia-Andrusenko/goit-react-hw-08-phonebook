import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { IoLogIn } from 'react-icons/io5';
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      // logIn({s
      //   email: form.elements.email.value,
      //   password: form.elements.password.value,
      // })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <FiMail className={`${css.icon} ${css.mail}`}/>
        <input type="email" name="email" className={css.input}/>
      </label>
      <label className={css.label}>
        Password
        <RiLockPasswordLine className={css.icon}/>
        <input type="password" name="password" className={css.input}/>
      </label>
      <button type="submit" className={css.btn}>
        Log In
        <IoLogIn className={css.icon} />
      </button>
    </form>
  );
};


export default LoginForm;