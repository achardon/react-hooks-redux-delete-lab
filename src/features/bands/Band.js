import React from 'react';
import { bandRemoved } from "./bandsSlice";
import { useDispatch } from "react-redux";

function Band( {band} ) {

    const dispatch = useDispatch()

    function handleDelete() {
        dispatch(bandRemoved(band.id))
    }

  return (
    <li>
      {band.name}
      <button onClick={handleDelete}>Delete Band</button>
    </li>
  );
}

export default Band