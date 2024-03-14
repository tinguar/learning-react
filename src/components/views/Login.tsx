import React, { useEffect, useState } from 'react'
import Input from '../atoms/input'

interface ILoginFrom{
    email:string,
    password:string
}
    
function Login() {

    const [state, setState]=useState({
        email:"",
        password:""
    }as ILoginFrom)

    useEffect(()=>{
        console.log(state)
    },[state])

  return (
    <form>
        <Input
            type='email'
            label='Email'
            inputName='emailFrom'
            onChangeState={setState} 
            state={state}
            inputDescription='Type your email'
        />

        <Input
            type='password'
            label='Password'
            inputName='password'
            onChangeState={setState} 
            state={state}
            inputDescription='Type your password'
        />

        {/* <button type="submit" className="btn btn-primary">Submit</button> 

            Tarea 1:
            Roberto = Completar el formulario de login:
                - Agregar el input de password
                - Crear componente boton (login, reguister, editar tarea, agregar tarea, editar, eliminar)
                - Prop label, color, size
        */}
    </form>
  )
}

export default Login