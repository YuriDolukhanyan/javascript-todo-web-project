import { useState } from 'react'
import './App.css'
import Users from './components/Users';
import Products from './components/Products';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Users />
            <Products />
        </>
    );
}

export default App
