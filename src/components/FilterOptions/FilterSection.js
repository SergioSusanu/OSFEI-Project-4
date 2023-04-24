import React, {useContext} from 'react'
import { Typography } from "@mui/material";
import FilterUsingButtons from './FilterUsingButtons';
import FilterUsingSelect from './FilterUsingSelect';
import { useSelector } from 'react-redux';
import FilterUsingRadioButtons from './FilterUsingRadioButtons';

function FilterSection() {
    

    const toDoList = useSelector((state) => state.tasks.items)
    const settingsFilter = useSelector((state) => state.filters.settingFilterUI)
    
    const FiltersUITypes = {
      buttons: FilterUsingButtons,
      select: FilterUsingSelect,
      radiobuttons: FilterUsingRadioButtons
    }

    const ActiveFilterUIType = FiltersUITypes[settingsFilter]

    if (toDoList.length === 0) return (<></>);

  return (
    <>
      <Typography variant="h4" component="h2">
        Tasks:
      </Typography>
      <ActiveFilterUIType />
    </>
  );
}

export default FilterSection