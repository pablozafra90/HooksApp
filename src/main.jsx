import ReactDOM from 'react-dom/client';
import './style.css';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
      <TodoApp />
  //</React.StrictMode>,
)