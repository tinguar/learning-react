import React, { ChangeEvent } from 'react'

interface IInput{
    label:string;
    type:"text"|"email"|"password"|"description";
    inputName:string;
    inputDescription?:string;
    state:string;
    onChangeState:()=>void;
}

function Index(
    {
        label,
        inputName, 
        type, 
        inputDescription, 
        state, 
        onChangeState
    }:IInput) {

    const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
        onChangeState({
            ...state,
            [type]:e.target.value
        })
    }

  return (
    <div className="mb-3">
        <label htmlFor={inputName} className="form-label">{label}</label>
        <input 
            type={type}
            className="form-control" 
            id={inputName} 
            aria-describedby={label+"Help"}
            onChange={(e)=>handleInputChange(e)}
            value={state[type]}
        />
        {
            inputDescription&&(
                <div id="emailHelp" className="form-text">{inputDescription}</div>
            )
        }
    </div>
  )
}

export default Index