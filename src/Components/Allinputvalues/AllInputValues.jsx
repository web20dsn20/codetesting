import React, { useState } from "react";

const AllInputValues = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [newTextArea, setNewTextArea] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [checkedCheckbox, setCheckedCheckbox] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [autoCompleteValue, setAutoCompleteValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const addTodo = () => {
    if (newTodo) {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Todo List</h3>

      {/* Textbox */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      {/* Textarea */}
      <textarea
        value={newTextArea}
        onChange={(e) => setNewTextArea(e.target.value)}
        placeholder="Enter description"
      />

      {/* Select (Dropdown) */}
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      {/* Checkbox */}
      <label>
        <input
          type="checkbox"
          checked={checkedCheckbox}
          onChange={(e) => setCheckedCheckbox(e.target.checked)}
        />
        Mark as Important
      </label>

      {/* Radio Button */}
      <div>
        <label>
          <input
            type="radio"
            name="status"
            value="Completed"
            checked={selectedRadio === "Completed"}
            onChange={(e) => setSelectedRadio(e.target.value)}
          />
          Completed
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="Pending"
            checked={selectedRadio === "Pending"}
            onChange={(e) => setSelectedRadio(e.target.value)}
          />
          Pending
        </label>
      </div>

      {/* Autocomplete */}
      <input
        type="text"
        value={autoCompleteValue}
        onChange={(e) => setAutoCompleteValue(e.target.value)}
        placeholder="Start typing a task..."
        list="todo-suggestions"
      />
      <datalist id="todo-suggestions">
        <option value="Buy Milk" />
        <option value="Clean Room" />
        <option value="Walk the Dog" />
      </datalist>

      {/* Date Picker */}
      <input
        type="date"
        value={dateValue}
        onChange={(e) => setDateValue(e.target.value)}
      />

      {/* Display todos */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllInputValues;
