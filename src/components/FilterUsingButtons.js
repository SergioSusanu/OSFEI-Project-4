import React, {useContext} from 'react'
import { AppContext } from '../App';
import { Button} from '@mui/material';

function FilterUsingButtons() {

    const { setFilter } = useContext(AppContext);

  return (
    <>
      <div className="filters">
        
        <Button
          variant="contained"
          onClick={() => setFilter("all")}
          disableElevation
        >
          All
        </Button>
        <Button
          variant="contained"
          onClick={() => setFilter("done")}
          disableElevation
        >
          Done
        </Button>
        <Button
          variant="contained"
          onClick={() => setFilter("todo")}
          disableElevation
        >
          Todo
        </Button>
      </div>
    </>
  );
}

export default FilterUsingButtons