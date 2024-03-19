import React, { useEffect, useState } from 'react'
import Input from '../atoms/input'
import Button from "../atoms/button"

interface ILoginFrom{
    email:string,
    password:string
}
    
function Login() {

    const [state, setState]=useState({
        email:"",
        password:""
    }as ILoginFrom)

    const LoginIn=()=>{
        console.log(state)
        console.log("Logged")
    }

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

        <Button
            label='Login in'
            color='primary'
            size='sm'
            pulse={()=>LoginIn()}
        />
    </form>
  )
}

export default Login