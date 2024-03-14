import React from 'react'
import "./style.css"

enum ESizeButton{
    sm="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;",
    md="sm",
    lg="lg"
}

enum EColorButton{
    "danger",
    "primary",
    "warning",
    "info",
    "success",
    'secondary'
}

interface IButton{
    label:string;
    color:EColorButton;
    size:ESizeButton;
    pulse:()=>void;
    id?:string;
    disable?:boolean
}

function Button({label,color,size,pulse,disable=false}:IButton) {
  return (
    <button 
        type="button" 
        className={`btn btn-${color} btn-${size} btn-${disable?"disable":""}`}
        onClick={()=>pulse()}
     >{label}</button>
  )
}

export default Button