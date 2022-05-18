import React, { Suspense, useContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import { AppContainer, AppContext } from '../components'

const Login = React.lazy(() => import('./Login'))
const Register = React.lazy(() => import('./Register'))
const Dashboard = React.lazy(() => import('./Dashboard'))

function AppRoutes() {
  const { currentUser } = useContext(AppContext)
  return (
    <Router>
      <Suspense fallback={<div>Loading ...</div>}>
        <AppContainer>
          <Routes>
            {!currentUser && (
              <>
                <Route path="/sign-up" element={<Register />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/" element={<Navigate to="/sign-in" />} />
              </>
            )}
            {currentUser && (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
              </>
            )}
            <Route
              path="*"
              element={
                <Navigate to={currentUser ? '/dashboard' : '/sign-in'} />
              }
            />
          </Routes>
        </AppContainer>
      </Suspense>
    </Router>
  )
}

export default AppRoutes
