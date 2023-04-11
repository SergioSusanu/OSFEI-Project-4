import React, { useContext } from 'react'
import { Typography} from '@mui/material';
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AppContext } from '../../App';

const SettingsFilterSelect = () =>{
  const {settingsFilter, setSettingsFilter} = useContext(AppContext)
  

  const handleChange= (e)=>{
    setSettingsFilter(e.target.value)
  }

  return (
   <Box sx={{ minWidth: 200, marginTop: '10px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter using:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={settingsFilter}
          label="Filter using: "
          onChange={handleChange}
        >
          <MenuItem value='buttons'>Buttons</MenuItem>
          <MenuItem value='dropdown'>Drop Down</MenuItem>
         
        </Select>
      </FormControl>
    </Box>
    );
} 

function Header() {
   const [open, setOpen] = React.useState(false);
   const handleClickOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
   };

   

  return (
    <div className="header">
      <Typography variant="h4" component="h1">
        My To Do List
      </Typography>
      <Button variant="outlined" onClick={handleClickOpen}>
        <SettingsIcon />
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>App Settings</DialogTitle>
        <DialogContent>
          <SettingsFilterSelect />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Apply</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Header