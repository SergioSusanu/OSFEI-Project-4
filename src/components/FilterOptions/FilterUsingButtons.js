import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Button } from "@mui/material";

function FilterUsingButtons() {
  const { filter, setFilter } = useContext(AppContext);

  return (
    <>
      <div className="filters">
        <Button
          variant={filter === "all" ? "contained" : "outlined"}
          onClick={() => setFilter("all")}
          disableElevation
        >
          All
        </Button>
        <Button
          variant={filter === "done" ? "contained" : "outlined"}
          onClick={() => setFilter("done")}
          disableElevation
        >
          Done
        </Button>
        <Button
          variant={filter === "todo" ? "contained" : "outlined"}
          onClick={() => setFilter("todo")}
          disableElevation
        >
          Todo
        </Button>
      </div>
    </>
  );
}

export default FilterUsingButtons;
