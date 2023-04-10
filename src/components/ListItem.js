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

  const updateTitleUsingModal = (modalProvidedTitle) =>{
    updatedTitleForId(id, modalProvidedTitle);
  }

  return (
    <article className="to-do-item">
      <div className={category === "done" ? "left done" : "left"}>
        <p>{title}</p>
      </div>
      <div className="right">
        <Checkbox
          checked={category === "done"}
          onClick={() => toggleTaskStatus(id)}
        />
        <Modal title={title} updateTitleUsingModal={updateTitleUsingModal} />
        <Button onClick={() => deleteOneTask(id)}>
          <DeleteIcon htmlColor="red" />
        </Button>
      </div>
    </article>
  );
}

export default ListItem