import React, {useEffect, useState} from 'react';
import Loading from './components/Loading';
import './App.css';
import Form from "./components/Form";


const App = () => {
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState([]);

    const addTodo = text => {
        const tmp = [...todos];
        tmp.push(text);
        saveTodos(tmp);
        loadTodos();
    };

    const removeTodo = index => {
        const tmp = [...todos];
        tmp.splice(index, 1);
        saveTodos(tmp);
        loadTodos();
    };

    const saveTodos = todos => {
        localStorage.setItem('todos', JSON.stringify(todos))
    };

    const loadTodos = () => {
        setTodos(JSON.parse(localStorage.getItem('todos')) || []);
    };

    useEffect(() => {
        loadTodos();
        setLoading(false);
    }, []);

    return (
        <>
            <Loading loading={loading}/>
            <Form
                addTodo={addTodo}
            />

        </>
    );
};

export default App;