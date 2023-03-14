import * as React from 'react';
import './assets/css/fonts.css';
import './style.scss';
import Control from './components/Controls'

export default function App() {
  return (
    <React.Fragment>
      <header>
        <h1 className="app-title"><span className="first-letter">C</span><span>S<em className="last-letter">S</em></span> Text Properties Generator <span className="tail">(Beta)</span></h1>
      </header>
      <Control />
    </React.Fragment>
  );
}
