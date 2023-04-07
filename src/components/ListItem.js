import React from 'react'
import { useContext } from "react";
import { AppContext } from "../App";

function ListItem({ item }) {
  const { id, title, category } = item;
  const { deleteOneTask, toggleTaskStatus } = useContext(AppContext);

  return (
    <article className="to-do-item">
      <p>{title}</p>
      <p>{category}</p>
      <div className="control-buttons">
        <button onClick={() => toggleTaskStatus(id)}>toggle</button>
        <button>edit</button>
        <button onClick={() => deleteOneTask(id)}>delete</button>
      </div>
    </article>
  );
}

export default ListItem