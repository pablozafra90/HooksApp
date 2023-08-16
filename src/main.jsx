import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { SimpleForm } from './02-useEffect/SimpleForm';
//import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
)
