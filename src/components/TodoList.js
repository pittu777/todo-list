import React from "react";


function DeleteNames({ names, deleteName }) {
  const filteredNames = names.filter((name) => name.trim() !== "");

  return (
    <div className="name-list">
      {filteredNames.map((name, index) => (
        <div className="name-item" key={index}>
          <span className="name-text">{name}</span>
          <button
            className="delete-button"
            onClick={() => deleteName(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default DeleteNames;
