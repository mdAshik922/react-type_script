import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Lists from './Component/Lists';

function App() {
  function reducer(state, action) {
    
  }

  const [todos, dispatch] = useReducer(reducer, initialState));

  return (
   
    <div className="App">
     <Lists/>
    </div>
  );
}

export default App;
