import React, { useCallback, useReducer, useRef, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Lists from './Component/Lists';
import { idText } from "typescript";


interface Todo{
id: number,
text: string,
}

type ActionType =  
 | { type: "ADD"; text: string }
| { type: "REMOVE"; id: number };


function App() {
  function reducer(state: Todo[], action: ActionType) {
switch (action.type) {
 case"ADD":
 return{
   ...state,
   {
    id: state.length,
    text: action.text,
  },
  case "REMOVE":
    return state.filter(({ id }) => id !== action.id);
 }

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
