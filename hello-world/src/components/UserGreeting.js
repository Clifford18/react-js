import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }
    
  render() {

    //short circuit operator
    return this.state.isLoggedIn && <div>Welcome CJ</div>
    
    // //ternary conditional rendering approach
    //return(
    //   this.state.isLoggedIn ?
    //   <div>Welcome CJ</div>:
    //   <div>Welcome Guest</div>
    // )

    // //element variable conditional rendering
    // let message
    // if(this.state.isLoggedIn){
    //   message = <div>Welcome CJ</div>
    // }else{
    //   message= <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

      //  //ifeslse conditional rendering
      // if(this.state.isLoggedIn){
      //   return(
      //     <div>
      //       Welcome CJ
      //     </div>
      //   )
      // }else{
      //   return(
      //     <div>Welcome Guest</div>
      //   )
      // }
    // return (
    //   <div>
    //     <div>Welcome CJ</div>
    //     <div>Welcome Guest</div>

    //   </div>
      
    // )
  }
}

export default UserGreeting
