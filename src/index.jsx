import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/extensions
import App from './components/App/App.jsx';
import './components/style';

// eslint-disable-next-line no-undef
const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
