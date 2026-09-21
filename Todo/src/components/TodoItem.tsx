import type { Todo } from "../types/Todo";

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />

            <span>{todo.text}</span>

            <button onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </div>
    );
}

export default TodoItem;