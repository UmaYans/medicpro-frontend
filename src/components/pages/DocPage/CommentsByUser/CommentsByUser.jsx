import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addComment } from "../../../../redux-toolkit/features/comments";
import style from "./CommentsByUser.module.css";

function CommentsByUser({ comments }) {
  const dispatch = useDispatch();
  let { docId } = useParams();

  console.log(comments);

  const [text, setText] = useState("");

  const addCommentByUser = (e) => {
    setText("");
    dispatch(addComment({ text, docId }));
  };

  const handleAddComment = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className={style.comments}>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Введите текст"
            value={text}
            onChange={handleAddComment}
          />
          <input
            type="submit"
            value={"Добавить"}
            onClick={addCommentByUser}
            disabled={!text}
          />
        </form>
        {comments.map((item) => {
          return (
            <div>
              <div>{item.userName}</div>
              <div>{item.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CommentsByUser;
