import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, getCommentsByUser, } from "../../../../redux-toolkit/features/comments";
import styles from "./Comment.module.css"

const CommentProfil = () => {
    const dispatch = useDispatch();

    const comments = useSelector((state) => state.comments.comments);

    useEffect(() => {
      dispatch(getCommentsByUser());
    }, [dispatch]);
  
    const deleteTodo = (id) => {
      dispatch(deleteComment(id));
    };
  
    
    return  (
        <div className={styles.comment_wrapper}>
          <div className={styles.cont}>
            {comments.map((item) => {
              return (
                <div key={item._id}>
                  <div className={styles.comment}>{item.text}
                  <button className={styles.buttonDel} onClick={() => deleteTodo(item._id)}>x</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };

export default CommentProfil;