import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

const Login = () => <div>Login Page</div>;
const Register = () => <div>Register Page</div>;

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/' element={<Navigate to='sign-in' />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
