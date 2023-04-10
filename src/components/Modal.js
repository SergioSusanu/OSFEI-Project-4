import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";


export default function Modal({ title, updateTitleUsingModal }) {
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
        <EditIcon htmlColor="orange" />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Task:</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            style={{ width: "300px" }}
            value={newTitle}
            type="text"
            variant="outlined"
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              if (newTitle) {
                updateTitleUsingModal(newTitle);
                handleClose();
              }
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
