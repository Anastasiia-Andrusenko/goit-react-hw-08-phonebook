
import '../../src/index.css';


import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';



const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));


const App = () => {

  return <div className="container">
        <div className="in_container">
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<HomePage/>} />
              <Route
                path='/register'
                element={<RegisterPage/>}
              />
              <Route
                path='/login'
                element={<LoginPage/>}
              />
              <Route
                path='/contacts'
                element={<ContactsPage/>}
              />
            </Route>
          </Routes>
        </div>
        <div className="circle"></div>
      </div>
}

export default App;

