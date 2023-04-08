import React, { useState } from 'react'
import { useContext } from "react";
import { AppContext } from "../App";
import { Button, Checkbox, TextField } from '@mui/material';
import Modal from './Modal';
import DeleteIcon from "@mui/icons-material/Delete";


function ListItem({ item }) {
  const { id, title, category } = item;
  const { deleteOneTask, toggleTaskStatus, updatedTitleForId } =
    useContext(AppContext);
  const [inEditMode, setInEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleInputChange = (e)=> {
    setNewTitle(e.target.value)
  }

  const updateTitle = () => {
    updatedTitleForId(id, newTitle);
    setInEditMode(false)
  }

  const updateTitleUsingModal = (modalProvidedTitle) =>{
    updatedTitleForId(id, modalProvidedTitle);
    setInEditMode(false);
  }

  const startEditMode =()=>{
    setInEditMode(!inEditMode);
    
  }

  return (
    <article className="to-do-item">
      <Checkbox
        checked={category === "done"}
        onClick={() => toggleTaskStatus(id)}
      />

      <p>{title}</p>

      <div className="control-Buttons">
       
        <Modal title={title} updater={updateTitleUsingModal} />
        <Button onClick={() => deleteOneTask(id)}>
          <DeleteIcon htmlColor='red'/>
        </Button>
      </div>
    </article>
  );
}

export default ListItem