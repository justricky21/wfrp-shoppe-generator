import React from 'react';
import meleeWeapons from './item_lists/core/meleeWeapons'
import './App.css';

function App() {

  return (
    <>
      {meleeWeapons.map(w => 
        <p>{w.name}</p>
      )}
    </>
  );
}

export default App;
