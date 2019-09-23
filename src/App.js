import React from 'react';
import logo from './logo-new.svg';
import search_icon from './img/icon-search.png';
import person_icon from './img/icon-person.png';
//import PostList from './PostList.js'
import './App.css';
import PostData from './data.json'

function sayHello() {
  var hola = document.getElementById("search").value;  
  var append='';
  var phones='';
  var relatives='';
  var myNode= document.getElementById("card");
  for(var x=0;x<PostData.data.length;x++){
    if (PostData.data[x].email===hola){
      for(var y=0;y<PostData.data[x].phoneNumbers.length;y++){
        var phones2='<p>'+PostData.data[x].phoneNumbers[y].phone+'</p>'
        phones=phones + phones2;
      }
      for(var z=0;z<PostData.data[x].relatives.length;z++){
        var relatives2='<p>'+PostData.data[x].relatives[z].name+'</p>'
        relatives=relatives + relatives2;
      }
      append ='<img src='+person_icon+' class="person_icon" alt="person_icon" width="80%" />'
      +'<h1 class="name">'+PostData.data[x].name+' , '+PostData.data[x].age+'</h1>'
      +'<p class="title">'+PostData.data[x].notes+' </p><div class="div1">'
      +'<p class="pTittle">Address</p><p>'+PostData.data[x].address+'</p>'
      +'</div><div class="div2"><p class="pTittle">Phone Numbers</p>'+phones+'</div>'      
      +'<div class="div1"><p class="pTittle">Email </p><p>'+PostData.data[x].email+'</p></div>'
      +'<div class="div2"><p class="pTittle">Relatives</p>'+relatives+'</div>'
      myNode.innerHTML = '';
      document.getElementById("card").insertAdjacentHTML('beforeend',append);  
      break;
    }
    else{
      myNode= document.getElementById("card");
      myNode.innerHTML = '';
      document.getElementById("card").insertAdjacentHTML('beforeend','<h1>Not found</h1>');
    }
    
  }  
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="80%" />
        <div class="search-container">
          <input type="text" placeholder="Search e-mail.." name="search" id="search"></input>
          <button className="MyImaageButton" onClick={sayHello}> 
          
          <img 
            src={search_icon} 
            alt="search_icon">
          </img>
          
          
          </button>
        </div>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="filtered" className="filtered"><div className="Ap"><h1>Person Data</h1><div id="card" className="card"></div></div></div>
        
      </header>
    </div>
  );
}

export default App;
