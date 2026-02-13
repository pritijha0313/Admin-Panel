import React from 'react';
import Login from './Pages/Sign/Login';
import Register from './Pages/Sign/Register';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './Components/LayOut/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Services from './Pages/Services/Services';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route element={<AppLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/services' element={<Services/>}/>
      </Route>
    </Routes>
  );
};

export default App;
