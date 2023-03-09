
import '../../src/index.css';


import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';



const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));


const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return isRefreshing ? (<b>Refreshing user...</b>): (
    <div className="container">
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
  )
}

export default App;

