import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  addComment,
  deleteComment,
} from "../../../../redux-toolkit/features/commentsSlice";
import { getUser } from "../../../../redux-toolkit/features/usersSlice";
import style from "./CommentsByUser.module.css";
import img from "./2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CommentsByUser({ comments, token }) {
  const dispatch = useDispatch();
  let { docId } = useParams();
  const users = useSelector((state) => state.user.users);

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
        <div className={style.review}>
          <p>Отзывы наших клиентов</p>
        </div>{" "}
        {token ? (
          <>
            <form
              action=""
              onSubmit={(e) => e.preventDefault()}
              className={style.form}
            >
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
                value={"Оставить отзыв"}
                onClick={addCommentByUser}
                disabled={!text}
              />
            </form>
          </>
        ) : (
          <div className={style.warning}>
            Пройдите авторизацию для добавления комментарий.{" "}
            <Link to="/sign-in">Войти в аккаунт</Link>
          </div>
        )}
        {comments.map((item) => {
          return (
            <div key={item._id} className={style.comm}>
              <div className={style.nameComm}>
                <div className={style.bio}>
                  <div className={style.img}>
                    <img src={img} alt="" />
                  </div>
                  <div
                    className={style.infoUser}
                  >{`${item.userName?.name} ${item.userName?.lastName}`}</div>
                </div>
                <div className={style.commentText}>{item.text}</div>
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

export default CommentsByUser;
