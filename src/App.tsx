import React, { useCallback, useReducer, useRef, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Lists from './Component/Lists';


interface Todo{

}
function App() {
  function reducer(state: Todo[], action:ActionType) {

  }

  const [state, dispatch] = useReducer(reducer, []);

  return (
   
    <div className="App">
     {/* <Lists/> */}


    </div>
  );
}

export default App;
