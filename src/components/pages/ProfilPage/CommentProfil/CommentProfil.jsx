import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  getCommentsByUser,
} from "../../../../redux-toolkit/features/commentsSlice";
import styles from "./Comment.module.css";

const CommentProfil = () => {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comments.userComments);

  useEffect(() => {
    dispatch(getCommentsByUser());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteComment(id));
  };

  return (
    <div className={styles.comment_wrapper}>
      <div className={styles.cont}>
        {comments.map((item) => {
          return (
            <div key={item._id} className={styles.com}>
              <div className={styles.comment}>
                <div>
                  Отзыв к: {item.doc?.name} {item.doc?.lastName}
                </div>
                <div className={styles.text}>{item.text}</div>
              </div>
              <div className={styles.buttonDel}>
                <button
                  className={styles.button}
                  onClick={() => handleDelete(item._id)}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentProfil;
