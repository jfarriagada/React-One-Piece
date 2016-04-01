import React from 'react';

export default class BandAvatar extends React.Component{
  render(){
    var url = `http://www.pirateking.es/personajes/${this.props.name}.jpg`;
    return <img src={url} className="avatar" />
  }
}

//export default bandAvatar;
// className='' < para css
