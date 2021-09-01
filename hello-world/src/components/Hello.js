import React from 'react'

const Hello =() => {
  //jsx version
  // return (
  //   <div className='dummyClass" id='Hello'>
  //     <h1>Hello CJ</h1>
  //   </div>
  // )

  return React.createElement(
    'div', 
    {id:'hello',className:'dummyClass'}, 
    React.createElement('h1', null, 'Hello CJ') )
}


export default Hello