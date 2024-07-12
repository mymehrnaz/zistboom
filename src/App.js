import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran"/>
        <footer>
          This project was coded by{""}<a href="https://github.com/mymehrnaz/" target="_blank" rel="noreferrer">Mehrnaz Sadeghian</a>{""}and is{""}<a href="https://github.com/mymehrnaz/zistboom" target="_blank" rel="noreferrer">open sourced on Github</a>{""}and{""}<a href="https://netlify.app/" target="_blank" rel="noreferrer">hosted on netlify</a>
        </footer>
      </div>
        
    </div>
  );
}

export default App;
