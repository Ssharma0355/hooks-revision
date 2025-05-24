import React, { Component } from 'react'
import CounterUpdate from './CounterUpdate'

export default class EnterClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      // const [count,setCount] = useState(0)
    };
  }

  componentDidMount() {
    console.log("Component did mount 1st time");
  }
  Increment(){
    this.setState({count:this.state.count+1})
  }
  componentWillUnmount(){
    console.log("Component unmounted")
  }

  render() {
    return (
      <div>
        <CounterUpdate number={this.state.count} />
        <button
          onClick={() => {
            this.Increment();
          }}
        >
          Click me to Increse the value
        </button>
      </div>
    );
  }
}
