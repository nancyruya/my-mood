import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      {/*<header className="App-header"> </header>
        <img src={logo} className="App-logo" alt="logo" /> */}
      <h2>Welcome to My Mood</h2>

      <p className="Subheader">
        Show me how you feel, I will show you the weather.
        </p>

      <form className="Form" id="Moodentry">
      <textarea 
      id="log" 
      cols="40" 
      rows="5" 
      placeholder="How am I feeling right now...">
      </textarea>
          
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Save
        </a>
      </form>

      <div id="clouds">
	<div class="cloud x1"></div>
	<div class="cloud x2"></div>
	<div class="cloud x3"></div>
	<div class="cloud x4"></div>
	<div class="cloud x5"></div>
</div>


    </div>
  );
}

export default App;
