import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addComment,
  deleteComment,
} from "../../../../redux-toolkit/features/comments";
import { getUser } from "../../../../redux-toolkit/features/usersSlice";
import style from "./CommentsByUser.module.css";

function CommentsByUser({ comments }) {
  const dispatch = useDispatch();
  let { docId } = useParams();
  const users = useSelector((state) => state.user.users);

  // const user = `${users.name} ${users.lastName}`;
  // const userCom = `${comments.userName?.name} ${comments.userName?.lastName}`;
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const addCommentByUser = (e) => {
    setText("");
    dispatch(addComment({ text, docId }));
  };

  const handleAddComment = (e) => {
    setText(e.target.value);
  };

  const handleDeleteComment = (id) => {
    dispatch(deleteComment(id));
  };

  return (
    <>
      <div className={style.comments}>
        <h1> Отзывы </h1>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            className={style.input}
            type="text"
            placeholder="Введите текст......."
            value={text}
            onChange={handleAddComment}
          />
          <input
            className={style.button}
            type="submit"
            value={"Добавить"}
            onClick={addCommentByUser}
            disabled={!text}
          />
        </form>
        {comments.map((item) => {
          return (
            <div key={item._id} className={style.comm}>
              <div className={style.nameComm}>
                <div className={style.bio}>
                  <div>{`${item.userName?.name} ${item.userName?.lastName}`}</div>
                </div>
                <div>{item.text}</div>
              </div>
              <button
                onClick={() => handleDeleteComment(item._id)}
                className={`${style.btn} ${
                  users._id !== item.userName?._id ? `${style.fal}` : ""
                } `}
                disabled={users._id !== item.userName?._id}
              >
                ❌
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
// console.log(comments.userName?._id);

export default CommentsByUser;
