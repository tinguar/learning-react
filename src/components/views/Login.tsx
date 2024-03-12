import React, { useEffect, useState } from 'react'
import Input from '../atoms/input'

    // <div>Login</div>
    // inputs email, password
    // input(email, password, text, descripcion)

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
            onChangeState={setState} //useState => reducer
            state={state} //useSate =>glabalState
            inputDescription='Type your email'
        />

        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        {/* <button type="submit" className="btn btn-primary">Submit</button> */}

        {/* 
            Tarea 1:
            Roberto = Completar el formulario de login:
                - Agregar el input de password
                - Crear componente boton (login, reguister, editar tarea, agregar tarea, editar)
                - Prop label, color, size
        */}
    </form>
  )
}

export default Login