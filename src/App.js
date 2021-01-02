import React, { useEffect, useState } from "react";
import './App.css';


const App = () => {
  const APP_ID = 'c7e77fe5';
  const APP_KEY = '275dbeadaa5f29f80e32e61261c24bd5';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('effect has been run')
  }, []) // request runs once once app gets mounted

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>

  )
}

export default App;
