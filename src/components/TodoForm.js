
import React, { useState } from "react";

import DeleteNames from "./TodoList";

function TodoForm() {
  const [formData, setFormData] = useState({
    data: ""
  });
  const [names, setNames] = useState([]);

  function handleChange(event) {
    
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNames((prevNames) => [...prevNames, formData.data]);
    setFormData((prev) => ({ ...prev, data: "" }));
  }

//   const nameList = names.map((name, index) => (
//     <p key={index}>{name}</p>
//   ));
  
    function deleteName(index) {
      setNames((prevNames) => {
        const updatedNames = [...prevNames];
        updatedNames.splice(index, 1);
        return updatedNames;
      });
    }


  return (
    <div>
        <h1 className="created-by">createdByPittuPrasanth</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container">
        <input
          type="text"
          name="data"
          value={formData.data}
          onChange={handleChange}
          placeholder="type here"
        />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
    
      {/* {nameList} */}
      <DeleteNames names={names} deleteName={deleteName} />

      </div>
      
    </div>
  );
}


export default TodoForm;
