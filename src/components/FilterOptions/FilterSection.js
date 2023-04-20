import React, {useContext} from 'react'
import { Typography } from "@mui/material";
import FilterUsingButtons from './FilterUsingButtons';
import FilterUsingSelect from './FilterUsingSelect';
import { useSelector } from 'react-redux';

function FilterSection() {
    

    const toDoList = useSelector((state) => state.tasks.items)
    const settingsFilter = useSelector((state) => state.filters.settingFilterUI)

    if (toDoList.length === 0) return (<></>);

  return (
    <>
      {settingsFilter === "buttons" && (
        <Typography variant="h5" component="h4">
          Filter by status
        </Typography>
      )}
      {/* Filter buttons */}
      {settingsFilter === "buttons" ? (
        <FilterUsingButtons />
      ) : (
        <FilterUsingSelect />
      )}
    </>
  );
}

export default FilterSection