import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoApp from "./TodoApp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoApp />} />
                <Route path="/active" element={<TodoApp />} />
                <Route path="/completed" element={<TodoApp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;