import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import FetchData from './FetchData';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Posts List</h1>
    <FetchData />
  </React.StrictMode>
);


// Turn off StrictMode for efficency or debugging.
// Not a good idea during dev however as StrictMode has a purpose.
/* 
ReactDOM.createRoot(document.getElementById('root')).render(
  <FetchData />  // 🚫 No StrictMode
);
*/
