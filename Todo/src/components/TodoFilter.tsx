import { NavLink } from "react-router-dom";

function TodoFilter() {
    return (
        <nav className="todo-filter">
            <NavLink to="/">
                All
            </NavLink>

            <NavLink to="/active">
                Active
            </NavLink>

            <NavLink to="/completed">
                Completed
            </NavLink>
        </nav>
    );
}

export default TodoFilter;