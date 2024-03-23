import React from "react";
import "../styles/body.css";
import axios from "axios";
import { useState } from "react";
function Body() {
  const [ categ, setCateg ]= useState("movies");
  const [ response, setResponse ] = useState("no quote");

  const handleGenerate = () =>{fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
     
  
  })
  .then(function(data) {
    const randomNum = Math.floor(Math.random() * (data.length - 1)) + 1;
    
    const firstText = data[randomNum].text;
    setResponse(firstText);
  });}
  return (
    <div className="container">
      <h1>Quote Generator:</h1>
      <p>{response}</p>
      <button onClick={handleGenerate}>Generate quote</button>
    </div>
  );
}

export default Body;
