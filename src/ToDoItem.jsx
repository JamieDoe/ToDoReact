export function ToDoItem({ completed, id, title, toggleToDo, deleteToDo }) {
    return (
        <li className="list-item">
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleToDo(id, e.target.checked)}
                    className="checkbox"
                />
            </label>
            <p className="list-text">{title}</p>
            <button
                className="btn-danger"
                onClick={() => deleteToDo(id)}
            >
                Delete
            </button>
        </li>
    )
}