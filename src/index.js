import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/home';
import About from './component/about';
import Contact from './component/contact';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <About />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
