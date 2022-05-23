import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";

function App() {
  return (
    <div className='wrapper'>
      <h1>Hello world</h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />)