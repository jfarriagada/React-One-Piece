import React from 'react';

export default class HelloComponent extends React.Component {
  render(){
    return <h1> React + ES6 {this.props.name} !! </h1>
  }
}
