import React from 'react'

function index() {

    const authors=[
        {
            name:"Richard Aguilar",
            linkedin:"https://www.linkedin.com/in/richardaguillar/",
            github:"https://github.com/ridarlar"
        },
        {
            name:"Roberto Barros",
            linkedin:"https://www.linkedin.com/",
            github:"https://github.com/Yepe1723"
        },
        {
            name:"Jordy Alejandro",
            linkedin:"https://www.linkedin.com/",
            github:"https://github.com/baguvix23"
        }
    ]

  return (
    <footer class="py-3 my-4">
        <p class="text-center text-body-secondary">© 2024 Tinguar, Inc</p>
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            {
                authors.map((item)=>{
                    return (
                        <div className="row">
                            <h3 class="nav-item">{item.name}</h3>
                            <a href={item.github}>GitHub</a>
                            <a href={item.linkedin}>Linkedin</a>
                        </div>
                    )
                })
            }
        </ul>
    </footer>
  )
}

export default index