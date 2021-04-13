import Book from './Book/Book'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
function App() {

  return (
    <div className="App">
      <center>
        <h1> Bestsellers</h1>
        <Book />
      </center>
      

    </div>
  );
}

export default App;
