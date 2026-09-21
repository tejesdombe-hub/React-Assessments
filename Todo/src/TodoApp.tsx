import { useState } from "react";
import { useLocation } from "react-router-dom";
import type { Todo } from "./types/Todo";
import TodoForm from "./components/TodoFrom";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";
import TodoFilter from "./components/TodoFilter";

function TodoApp() {
    const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
    const [text, setText] = useState("");

    const location = useLocation();

    function handleAddTodo() {
        const trimmedText = text.trim();

        if (!trimmedText) {
            return;
        }

        const newTodo: Todo = {
            id: Date.now(),
            text: trimmedText,
            completed: false
        };

        setTodos(prev => [...prev, newTodo]);
        setText("");
    }

    function handleToggleTodo(id: number) {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    }

    function handleDeleteTodo(id: number) {
        setTodos(prev =>
            prev.filter(todo => todo.id !== id)
        );
    }

    const filteredTodos = todos.filter(todo => {
        if (location.pathname === "/active") {
            return !todo.completed;
        }

        if (location.pathname === "/completed") {
            return todo.completed;
        }

        return true;
    });

    return (
        <div className="todo-container">
            <h1>Todo App</h1>

            <TodoForm
                text={text}
                onTextChange={setText}
                onAdd={handleAddTodo}
            />
              
              <TodoFilter/>

            <TodoList
                todos={filteredTodos}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
            />
        </div>
    );
}

export default TodoApp;