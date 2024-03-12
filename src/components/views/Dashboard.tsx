import React from 'react'

function Dashboard() {

   const data=[
    {
        id:1,
        title:"some task",
        description:"some description",
        status:{
            label:"done",
            value:"done"
        },
        difficulty:"easy"
    },
    {
        id:2,
        title:"some task",
        description:"some description",
        status:{
            label:"done",
            value:"done"
        },
        difficulty:"easy"
    },
    {
        id:3,
        title:"some task",
        description:"some description",
        status:{
            label:"done",
            value:"done"
        },
        difficulty:"easy"
    }
   ]

  return (
    <div>Dashboard

        {
        /*  Alejandro:
                - Crear una tabla "Crear un componente de fila de tabla" 
                - Prop de "data"
        */
        }
    </div>
  )
}

export default Dashboard