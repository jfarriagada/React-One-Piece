import React from 'react';
import BandMessage from './bandMessage';

export default class BandChat extends React.Component {
  render() {
    return <ul className='bandchat' >
      {
        this.props.messages.map((message) => {
            return <BandMessage key={message.id} message={message} />
        })
      }
    </ul>
  }
}

BandChat.defaultProps = { message: [] };
