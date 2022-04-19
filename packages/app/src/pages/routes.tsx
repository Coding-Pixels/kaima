import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import { Register } from '.'

const Login = () => <div>Login Component</div>

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/" element={<Navigate to="/sign-in" />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
