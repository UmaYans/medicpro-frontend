import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEntry, getEntryByUser } from "../../../../redux-toolkit/features/entrySlice";

const EntryProfil = () => {
  const entries = useSelector((state) => state.entry.entries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntryByUser());
  }, [dispatch]);


const functionDel = (del) => {
    dispatch(deleteEntry(del))
}
  
  return (
    <div>
      {entries.map((item) => {
        return (
          <div  key={item._id}>
            <div>{item.time}</div>
            <div>{item.doc}</div>
            <button onClick={() => functionDel(item._id)}>x</button>
          </div>
        );
      })}
    </div>
  );
};

export default EntryProfil;
