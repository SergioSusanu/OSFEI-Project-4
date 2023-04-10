import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";


export default function Modal({title, updater}) {
  const [open, setOpen] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState(title);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>
        <EditIcon htmlColor="orange"/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>Update Task</DialogTitle> */}
        <DialogContent>
          <DialogContentText>Update task:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            // label="New task"
            value={newTitle}
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              updater(newTitle);
              handleClose();
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
