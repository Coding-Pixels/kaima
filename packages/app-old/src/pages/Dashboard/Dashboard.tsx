import React from 'react'
import { auth } from '../../config/firebase'

function Dashboard() {
  return (
    <div>
      <div>Dashboard Page</div>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

export default Dashboard
