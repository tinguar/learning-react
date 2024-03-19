import React, {useState} from 'react'
import Input from '../atoms/input'
import Button from "../atoms/button"

interface IRegiterForm{
  emailForm:string,
  passwordForm:string,
  confirmPasswrodForm:string,
  userNameForm:string,
}

function Register() {

  const [state, setState]=useState({
    emailForm:"",
    passwordForm:"",
    confirmPasswrodForm:"",
    userNameForm:"",
  } as IRegiterForm)

  const singUp=()=>{
    const validEmail=verifyEmail(state.emailForm)    
    const matchPasswords=passwordMatch(state.passwordForm,state.confirmPasswrodForm)
    const validPassword=validatePassword(state.passwordForm)
    const verifyForm=verifyFromData(state)

    if(verifyEmail.length>0){
      alert(`Error is missing: ${verifyForm}`)
      console.log(verifyForm)
      return null
    }
    if(!validEmail){
      alert("Email invalid")
      return null
    }
    if(!matchPasswords){
      alert("Password not matching")
      return null
    }
    if(!validPassword){
      alert("Very short passwords")
      return null
    }

    alert("User created")
    cleanForm()
  }

  const verifyEmail=(email:string):boolean=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
  }

  const passwordMatch=(password:string,confirmPasswrod:string):boolean=>{
    return password===confirmPasswrod
  }

  const validatePassword=(password:stirng):boolean=>{
    return password.length>=8?(true):(false)
  }

  const cleanForm=()=>{
    setState({
    emailForm:"",
    passwordForm:"",
    confirmPasswrodForm:"",
    userNameForm:"",
  })
  }

  const verifyFromData=(state:IRegiterForm):Array<string>=>{
    const errorProps=[]

    for (const prop in state){
      const sentence=state[prop]===null||state[prop]===undefined||state[prop]===""

      if(sentence){
        errorProps.push(prop)
        console.log(`${prop}: ${state[prop]}`)
      }
    }
    return errorProps
  }

  return (
    <form>
      <Input
          type='text'
          label='User name'
          inputName='userNameForm'
          onChangeState={setState} 
          state={state}
          inputDescription='Type your user name'
      />
      <Input
          type='email'
          label='Email' 
          inputName='emailForm'
          onChangeState={setState} 
          state={state}
          inputDescription='Type your email'
      />
      <Input
            type='password'
            label='Password'
            inputName='passwordForm'
            onChangeState={setState} 
            state={state}
            inputDescription='Type your password'
        />
        <Input
            type='password'
            label='Confirm password'
            inputName='confirmPasswrodForm'
            onChangeState={setState} 
            state={state}
            inputDescription='Type your password again'
        />

        <Button
            label='Sign up'
            color='primary'
            size='sm'
            pulse={()=>singUp()}
        />
    </form>
  )
}

export default Register