import React from 'react';

export  default class BandMessage extends React.Component {
  render() {
    return <li className='bandmessage'>
      {this.props.message.text}
    </li>
  }
}
