import React from 'react'

// function Greet(){
//   return <h1>Hello CJ</h1>
// }

// const Greet = (props) =>{ 
//   return(
//     <div>
//       <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//       {props.children}
//     </div>
//   )  
// }
const Greet = ({name, heroName, children}) =>{ 
  return(
    <div>
      <h1>Hello {name} greet a.k.a {heroName}</h1>
      {children}
    </div> 
  )
}

export default Greet