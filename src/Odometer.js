import React from "react";

class Odometer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      miles: 0
    
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(increment) {
    let meter = this.state.miles + increment;
    if(meter < 0){
        meter = this.state.miles
    } else if(meter > 9999){
        meter = meter - 10000; 
    }
    this.setState({
      miles: meter

    });
  }
  pad(num, length) {
    length = 4
    return num.toString().padStart(length, 0);
  }
    
  render() {
    return (
      <React.Fragment>
        <h2>Odometer</h2>
        <p>miles: {this.pad(this.state.miles)}</p>
        <div>
        <button onClick={this.clickHandler.bind(this, 1)}> Add 1 </button>
        <button onClick={this.clickHandler.bind(this, - 1)}> Subtract 1 </button>
        <button onClick={this.clickHandler.bind(this, 10)}> Add 10 </button>
        <button onClick={this.clickHandler.bind(this, -10)}> Subtract 10 </button>         
        <button onClick={this.clickHandler.bind(this, 100)}> Add 100</button>
        <button onClick={this.clickHandler.bind(this, -100)}> Subtract 100</button>
        <button onClick={this.clickHandler.bind(this, 1000)}> Add 1000</button>
        <button onClick={this.clickHandler.bind(this, -1000)}> Subtract 1000</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Odometer;
