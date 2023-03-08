
import '../../src/index.css';
// import { ContactList } from "./ContactList/ContactList";
// import ContactForm from "./ContactForm/ContactForm";
// import Filter from "./Filter/Filter";

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import {store, persistor} from "../redux/store";

import { PersistGate } from 'redux-persist/integration/react';
import AppBar from './AppBar/AppBar';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import { Contact } from './ContactList/Contact/Contact';
import Contacts from '../pages/Contacts/Contacts';
import Home from '../pages/Home/Home';


const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));


const App = () => {

  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div className="container">
        <div className="in_container">

          
        </div>
        <div className="circle"></div>
      </div>
    </PersistGate>
  </Provider>
}

export default App;

