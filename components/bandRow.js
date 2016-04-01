import React from 'react';
import BandAvatar from './bandAvatar';

export default class BandRow extends React.Component {
  render(){
    return <li className='bandrow'>
      <BandAvatar name={this.props.name} />
      {this.props.name} 
    </li>
  }
}
