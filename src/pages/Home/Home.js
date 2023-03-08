
import css from './Home.module.css';
import { MdOutlineContactPhone } from 'react-icons/md';



const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome to <br/> the phone book!
      </h1>
      <MdOutlineContactPhone className={css.icon} />
      <p className={css.caption}>Made by Anastasia Andrusenko</p>
    </div>
  )
}

export default Home;