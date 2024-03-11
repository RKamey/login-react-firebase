/* eslint-disable no-unused-vars */
import { useState } from 'react'

// Import firebase modules
import appFirebase from '../src/credentials';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth(appFirebase);

// Import components
import Login from '../src/components/Login'
import Home from '../src/components/Home'

import './App.css'

function App() {

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser)
    } else {
      setUser(null)
    }
  })

  return (
    <div>
      {user ? <Home userEmail = {user.email} /> : <Login />}
    </div>
  )
}

export default App
