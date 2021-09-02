import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello Event'
      }
      // this.clickHandler= this.clickHandler.bind(this)
    }
    // clickHandler(){
    //   this.setState({
    //     message:'Good Bye'
    //   })
    // }
    clickHandler=()=>{
      this.setState({
        message:'Good bye!'
      })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>EventBind Click</button> */}
        {/* <button onClick={()=> this.clickHandler()}>EventBind Click</button> */}
        <button onClick={this.clickHandler}>EventBind Click</button>

      </div>
    )
  }
}

export default EventBind
