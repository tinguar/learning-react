import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/views/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
      {/* 
        aquitectura de carpetas
        configuracion de redux toolkit / reduxquery / redux (manejo del estado)
        componentes: form, tasks, login, logup
        custom hooks
        firebase
        navegacion: "login", "reguistro", "dashboard"
      */}
    </>
  )
}

export default App
