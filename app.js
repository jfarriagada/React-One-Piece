import React from 'react';
import BandTable from './components/bandTable';
import HelloComponent from './components/hello';
import ReactDOM from 'react-dom';

//  { name: 'Roronoa_Zoro', time: 'pasado'},
var mugiwaras = [
  { name: 'Roronoa_Zoro' },
  { name: 'Sanji' },
  { name: 'Monkey_D._Luffy' },
  { name: 'Brook' },
  { name: 'Franky' }
];

ReactDOM.render(
  <BandTable mugiwaras={mugiwaras} />,
  document.getElementById('container-mugiwara')
);

ReactDOM.render(<HelloComponent name="farriagada" />, document.getElementById("container"));

setTimeout(() => {
  ReactDOM.render(<HelloComponent name="pancho" />, document.getElementById("container"));
},3000)
