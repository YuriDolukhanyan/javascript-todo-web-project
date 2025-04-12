import { useState } from "react";
import './todo.css';

const Todo = ({ id, value, isDone, deleteTodo, markDone, updateValue, editTodoId, setEditTodoId }) => {
    const [newValue, setNewValue] = useState(value);
    const isEditMode = id === editTodoId;

    const handleComplete = () => {
        markDone(id);
    };

    const handleSave = () => {
        updateValue(id, newValue);
        setEditTodoId(null);
    };

    const handleCancel = () => {
        setNewValue(value);
        setEditTodoId(null);
    };

    return (
        <div key={id}>
            {!isEditMode ? (
                <div className={isDone ? "completed-task" : ""}>
                    <input type="checkbox" checked={isDone} onChange={handleComplete} />
                    <span>{value}</span>
                    {editTodoId === null && (
                        <>
                            &nbsp;<button onClick={() => setEditTodoId(id)}>Edit</button>
                        </>
                    )}
                    {isDone && (
                        <>
                            &nbsp;<button onClick={() => deleteTodo(id)}>Delete</button>
                        </>
                    )}
                </div>
            ) : (
                <>
                    <input 
                        type="text"
                        value={newValue}
                        onChange={(e) => setNewValue(e.target.value)}
                        placeholder='Edit TODO...' 
                    />
                    &nbsp;<button onClick={handleSave}>Save</button>
                    &nbsp;<button onClick={handleCancel}>Cancel</button>
                </>
            )}
        </div>
    );
};

export default Todo;
