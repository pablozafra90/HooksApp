import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <FormWithCustomHook />
  //</React.StrictMode>,
)
