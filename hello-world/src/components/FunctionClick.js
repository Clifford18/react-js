import React from 'react'

function FunctionClick() {
    function clickHandler() {
      console.log('Button Click')
    }
  return (
    <div>
      <button onClick = {clickHandler} >Function CLick</button>
    </div>
  )
}

export default FunctionClick
