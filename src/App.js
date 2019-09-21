import React from 'react';
import logo from './logo-new.svg';
import search_icon from './img/icon-search.png';
import PostList from './PostList.js'
import './App.css';

function sayHello() {
  alert('Hello!');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="80%" />
        <div class="search-container">
          <input type="text" placeholder="Search e-mail.." name="search"></input>
          <button id="myimagebutton" onClick={sayHello}> 
          <a href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          <img 
            src={search_icon} 
            alt="search_icon">
          </img>
          
          </a>
          </button>
        </div>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PostList/>
      </header>
    </div>
  );
}

export default App;
