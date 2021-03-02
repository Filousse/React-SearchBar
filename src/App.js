
import './App.css';
import JSONDATA  from './MOCK_DATA.json';
import React, { useState } from 'react'

function App() {
  
  const [ searchText, setSearchText]= useState("");

  console.log("JSONDATA =>",JSONDATA);
  console.log("state searchText =>", searchText );
  return (
    <div className="App">
        <h1>Recherche par nom dans json :</h1><br></br>
        <input 
            type='text' 
            placeholder='Search...'
            onChange= {(e)=>{setSearchText(e.target.value)}}
        />
        {JSONDATA.filter((value)=>{
          if(searchText == "") {
            return value
          } else if (value.first_name.toLowerCase().includes(searchText.toLowerCase())) {
            return value
          }
        }).map((value, key)=> {
            return (
            <div className="nameList" key={key}>
              <h3>{value.first_name}</h3>
            </div>
            );
        })}
    </div>
  );
}

export default App;
