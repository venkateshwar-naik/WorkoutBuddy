import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WorkoutContext from './context/workoutContext.jsx'
import  AuthContext from './context/Autentication.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
<AuthContext>
<WorkoutContext>
    <App />

  </WorkoutContext>
</AuthContext>
 
  // </React.StrictMode>,
)
