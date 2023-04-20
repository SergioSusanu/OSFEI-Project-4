import React, { useState } from 'react'
import { Button, Checkbox, TextField } from '@mui/material';
import Modal from './Modal';
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from 'react-redux';
import {
  deleteTask,
  updateTaskTitle,
  updateTaskCategory,
} from "../features/tasks/tasksSlice";


function ListItem({ item }) {
  const { id, title, category } = item;
 
  const dispatch = useDispatch()

  const updateTitleUsingModal = (modalProvidedTitle) =>{
   // updatedTitleForId(id, modalProvidedTitle);
   dispatch(updateTaskTitle({id, title:modalProvidedTitle}))
  }

  return (
    <article className="to-do-item">
      <div className={category === "done" ? "left done" : "left"}>
        <p>{title}</p>
      </div>
      <div className="right">
        <Checkbox
          checked={category === "done"}
          onClick={() => dispatch(updateTaskCategory(id))}
        />
        <Modal title={title} updateTitleUsingModal={updateTitleUsingModal} />
        <Button onClick={() => dispatch(deleteTask(id))}>
          <DeleteIcon htmlColor="red" />
        </Button>
      </div>
    </article>
  );
}

export default ListItem