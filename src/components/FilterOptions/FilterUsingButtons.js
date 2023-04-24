import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setActiveFilter } from "../../features/filters/filtersSlice";

function FilterUsingButtons() {

  const dispatch = useDispatch()
  const filter = useSelector((state)=>state.filters.activeFilter)

  const setFilter = (f) => {
    dispatch(setActiveFilter(f))
  }

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
