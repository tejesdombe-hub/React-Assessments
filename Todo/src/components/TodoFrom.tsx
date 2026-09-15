import type { ChangeEvent } from "react";

interface TodoFormProps {
    text: string;
    onTextChange: (value: string) => void;
    onAdd: () => void;
}

function TodoForm({ text, onTextChange, onAdd }: TodoFormProps) {
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onTextChange(event.target.value);
    }

    return (
        <div className="todo-input">
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Enter a todo"
            />

            <button onClick={onAdd}>
                Add
            </button>
        </div>
    );
}

export default TodoForm;