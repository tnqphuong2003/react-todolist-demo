import React from "react";

function AddTaskForm({newTask, handleSubmit, handleInputChange}) {
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <label htmlFor="newItem">Add to the Todo List</label>
      <input
        type="text"
        id="newItem"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddTaskForm;
