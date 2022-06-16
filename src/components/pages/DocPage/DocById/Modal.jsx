import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { postEntry } from "../../../../redux-toolkit/features/entry";
import style from "./Modal.module.css";
function Modal({active,setActive}) {
  const dispatch = useDispatch();
  const { docId } = useParams();
  const [opened, setOpened] = useState(false);

  const handleCartOpen = () => setOpened(true);
  const handleCartClose = () => setOpened(false);

  const [time, setTime] = useState([
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "Обед",
    "15:00",
    "16:00",
    "17:00",
  ]);

  // const handleEntry = () => {
  //   dispatch(postEntry({ docId, time }));
  // };

  return (
    <>
      <div className={style.modal} onClick={()=>setActive(false)}>
        <div className={style.modal_content} onClick={(e)=>e.stopPropagation()}></div>
      </div>
    </>
  );
}

export default Modal;

{
  /* <div>
<div onClick={handleCartClose}>x</div>
<div>
  <select name="choice">
    <option selected disabled>
      Время:
    </option>
    {time.map((time) => {
      return <option value={time}>{time}</option>;
    })}
  </select>
  <div>
    <button onClick={handleEntry}>Записаться</button>
  </div>
</div>
</div> */
}
