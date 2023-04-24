import React, { useContext, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import {setSettingFilterUI} from '../../features/filters/filtersSlice'

 

function Header() {
   const [open, setOpen] = React.useState(false);
   const dispatch = useDispatch()
   const settingsFilter = useSelector((state) => state.filters.settingFilterUI);
   const [localSelect, setLocalSelect] = useState(settingsFilter);

   const handleClickOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
   };

   const handleSelectChange = (e) =>{
    setLocalSelect(e.target.value);
   }

   const handleApplyChanges = ()=>{
    //setSettingsFilter(localSelect);
    dispatch(setSettingFilterUI(localSelect));
    handleClose();
   }

  return (
    <div className="header">
      <Typography variant="h4" component="h1">
        Add new tasks:
      </Typography>
      <Button variant="contained" onClick={handleClickOpen}>
        <SettingsIcon />
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>App Settings</DialogTitle>
        <DialogContent>
          {/* Drop Down */}
          <Box sx={{ minWidth: 200, marginTop: "10px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Filter using:
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={localSelect}
                label="Filter using: "
                onChange={handleSelectChange}
              >
                <MenuItem value="buttons">Buttons</MenuItem>
                <MenuItem value="dropdown">Drop Down</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        {/* Action buttons */}
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleApplyChanges}>Apply</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Header