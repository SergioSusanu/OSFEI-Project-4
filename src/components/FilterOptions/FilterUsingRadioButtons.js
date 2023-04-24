import React from 'react'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector } from "react-redux";
import { setActiveFilter } from "../../features/filters/filtersSlice";

const FilterUsingRadioButtons = () => {

  const dispatch = useDispatch()
  const filter = useSelector((state)=>state.filters.activeFilter)

  const setFilter = (f) => {
    dispatch(setActiveFilter(f))
  }

  return (
    <FormControl>
      {/* <FormLabel id="demo-radio-buttons-group-label">Filter By:</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={filter}
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="all"
          control={<Radio onClick={() => setFilter("all")} />}
          label="All"
        />
        <FormControlLabel
          value="done"
          control={<Radio onClick={() => setFilter("done")} />}
          label="Done"
        />
        <FormControlLabel
          value="todo"
          control={<Radio onClick={() => setFilter("todo")} />}
          label="To Do"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default FilterUsingRadioButtons
