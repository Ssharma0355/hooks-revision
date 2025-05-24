import React, { Component } from 'react'

export default class CounterUpdate extends Component {
    componentDidUpdate(prevvalue, prevnumber){
        console.log(prevvalue.number)
        console.log(this.props.number)
        if(prevvalue !== this.props.number){
            console.log("Component got updated")
        }
    }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
        
      </div>
    )
  }
}
