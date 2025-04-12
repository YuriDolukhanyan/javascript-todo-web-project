import { useState } from "react";
import Todo from "./Todo";

const generateId = () => Math.random() * Date.now();

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editTodoId, setEditTodoId] = useState(null);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const addTodo = () => {
        if (inputValue) {
            let todo = {
                id: generateId(),
                value: inputValue
            };
            setTodos([...todos, todo]);
            setInputValue('');
        }
    };

    const markDone = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ));
    };

    const updateValue = (id, newValue) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, value: newValue } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // console.log(todos);
    
    return (
        <div>
            <input value = {inputValue} onChange={handleChange} type='text' placeholder='Enter TODO...'/> 
            &nbsp;<button onClick={addTodo}>Add</button>
            {todos.map(item => (
                <Todo 
                    {...item}
                    deleteTodo={deleteTodo}
                    markDone={markDone} 
                    updateValue={updateValue}
                    editTodoId={editTodoId}
                    setEditTodoId={setEditTodoId}
                />
            ))}
        </div>
    );
};

export default TodoList;
