import React, {Component} from 'react';

class ResData extends Component{
  render() {
    return(
      <div className="resDataDiv">
      <p> {this.props.rest.name} </p>
      <p> {this.props.rest.rating} </p>
      <p> {this.props.rest.pricing} </p>
      <p> {this.props.rest.desc} </p>
      <p> {this.props.rest.review} </p>
      <p> {this.props.rest.address} </p>
      <p> {this.props.rest.phone} </p>
      </div>
    )
  }
}


export default ResData;