import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

const Register = React.lazy(() => import('./Register'))

const Login = () => <div>Login Component</div>

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/" element={<Navigate to="/sign-in" />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default AppRoutes
