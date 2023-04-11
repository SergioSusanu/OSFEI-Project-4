import React, {useContext} from 'react'
import { Typography } from "@mui/material";
import { AppContext } from '../../App';
import FilterUsingButtons from './FilterUsingButtons';
import FilterUsingSelect from './FilterUsingSelect';

function FilterSection() {
    const { settingsFilter, toDoList } = useContext(AppContext);

    if (toDoList.length === 0) return (<></>);

  return (
    <>
      {settingsFilter === "buttons" && (
        <Typography variant="h4" component="h2">
          Filter tasks:
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