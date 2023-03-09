import * as React from 'react';
import './assets/css/fonts.css';
import './style.scss';
import Control from './components/Controls'

export default function App() {
  return (
    <React.Fragment>
      <h1 className="app-title"><span class="first-letter">C</span><span>S<em className="last-letter">S</em></span> Text Properties Playground</h1>
      <Control />
    </React.Fragment>
  );
}
