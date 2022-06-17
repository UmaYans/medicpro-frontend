import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEntryDocId } from "../../../../redux-toolkit/features/entrySlice"

const EntryProfil = () => {

    const entry = useSelector((state) => state.entry.entry);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEntryDocId());
      }, [dispatch]);

    return (
        <div>
            {entry.time}
            <div>
            {entry.time}
        </div>
        </div>
    );
};

export default EntryProfil;