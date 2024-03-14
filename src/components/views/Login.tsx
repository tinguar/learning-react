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

    // const [tasks, setTasks]=useState([
    //     {id:1,name:"some task"},
    //     {id:2,name:"other task"},
    //     {id:3,name:"some task"},
    //     {id:4,name:"other task"},
    // ])

    // const deleteTask=(id:number)=>{
    //     const newState=tasks.filter((item)=>{
    //         return item.id!==id
    //     })

    //     setTasks(newState)
    // }

    useEffect(()=>{
        console.log(state)
    },[state])

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
            disable={true}
            pulse={()=>LoginIn()}
        />
        <Button
            label='Login in'
            color='primary'
            size='md'
            disable={true}
            pulse={()=>LoginIn()}
        />

        {/* {
            tasks.map((item)=>{
                return (<p key={item.id}>
                    id:{item.id}
                    <br />
                    name:{item.name}  
                    <Button
                        label='Delete'
                        color='red'
                        size='sm'
                        id={item.id}
                        pulse={()=>{
                            deleteTask(item.id)
                        }}
                    />  
                </p>)
            })
        } */}

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