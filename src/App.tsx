import React, { useCallback, useReducer, useRef, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Lists from './Component/Lists';


interface Todo{
id: number,
text: string,
}

type ActionType =   | { type: "ADD"; text: string }
| { type: "REMOVE"; id: number };


function App() {
  function reducer(state: Todo[], action: ActionType) {
switch (action.type) {
 
}
  }

  const [state, dispatch] = useReducer(reducer, []);

  return (
   
    <div className="App">
     {/* <Lists/> */}


    </div>
  );
}

export default App;
