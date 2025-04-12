import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>Test TODO_LIST</h1>
            <TodoList />
            {/* <Todo /> */}
        </div>
    );
}

export default App;
