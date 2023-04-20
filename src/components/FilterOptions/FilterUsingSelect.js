import React, {useContext} from 'react'
import { AppContext } from "../../App";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";
import { setActiveFilter } from "../../features/filters/filtersSlice";


function FilterUsingSelect() {
    // const { filter, setFilter } = useContext(AppContext);
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters.activeFilter);

     const handleChange = (event) => {
      //  setFilter(event.target.value);
      dispatch(setActiveFilter(event.target.value))
     };

  return (
    <Box sx={{ minWidth: 80 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter by:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Filter by"
          onChange={handleChange}
        >
          <MenuItem value='all'>All</MenuItem>
          <MenuItem value='done'>Done</MenuItem>
          <MenuItem value='todo'>To Do</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default FilterUsingSelect