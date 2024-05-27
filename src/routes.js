import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Pages/Home/Home';
import Rent from './components/Pages/Rent/Rent';
import Search from './components/Pages/Search/Search';
import Property from './components/Pages/Property/Property';
import ProfilePage from './components/Pages/profilePage/profilePage';
import Login from './components/Pages/login/login';
import Register from './components/Pages/register/register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'rent', element: <Rent /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'search', element: <Search /> },
      {
        path: 'profile',
        element: <ProfilePage />,
        loader: async () => {
          // Your data loading logic here
          return { username: 'John Doe', age: 30 };
        },
      },
      {
        path: 'property/:propertyId',
        element: <Property />,
      },
      {
        path: 'about',
        element: (
          <main>
            <h1 style={{ marginTop: '3rem', color: 'rgb(26, 55, 58)' }}>ABOUT</h1>
          </main>
        ),
      },
      {
        path: '*',
        element: (
          <main>
            <h1 style={{ marginTop: '3rem', color: 'rgb(26, 55, 58)' }}>404 NOT FOUND</h1>
          </main>
        ),
      },
    ],
  },
]);

export default router;
