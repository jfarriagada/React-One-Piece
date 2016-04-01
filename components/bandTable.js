import React from 'react';
import BandRow from './bandRow';

export default class BandTable extends React.Component {
  render(){
    return <ul className='bandtable'>
      {
        this.props.mugiwaras.map((mugiwara) => {
            return <BandRow
               key={mugiwara.name}
               name={mugiwara.name}
               phase={this.props.onPhase} />
        })
      }
    </ul>
  }
}
