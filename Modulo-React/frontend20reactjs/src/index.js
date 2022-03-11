import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App  texto={{chamada: 'A danki é boa',chamada2:'danki code'}} />
    <App  texto={{chamada: 'A danki é boa',chamada2:'danki code'}} />
  </React.StrictMode>,
  document.getElementById('root')
);


