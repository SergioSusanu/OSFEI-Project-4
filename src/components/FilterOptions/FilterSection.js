import React, {useContext} from 'react'
import { Typography } from "@mui/material";
import { AppContext } from '../../App';
import FilterUsingButtons from './FilterUsingButtons';
import FilterUsingSelect from './FilterUsingSelect';
import { useSelector } from 'react-redux';

function FilterSection() {
    const { settingsFilter} = useContext(AppContext);

    const toDoList = useSelector((state) => state.tasks.items)

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