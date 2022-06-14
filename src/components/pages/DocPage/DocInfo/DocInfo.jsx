import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDoctorsById } from "../../../../redux-toolkit/features/doctorSlice";
// import { getDoctors } from '../../../../redux-toolkit/features/doctorSlice'

function DocInfo() {
  let { docId } = useParams();

  const docs = useSelector((state) => state.doctor.doc);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorsById(docId));
  }, [dispatch, docId]);

  return (
    <>
      <div>DocInfo</div>
      <div>{docs.name}</div>
    </>
  );
}

export default DocInfo;
