import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  getCommentsByUser,
} from "../../../redux-toolkit/features/comments";
import { getUser } from "../../../redux-toolkit/features/usersSlice";

const ProfilPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getCommentsByUser());
  }, [dispatch]);

  const deleteTodo = (id) => {
    dispatch(deleteComment(id));
  };

  const users = useSelector((state) => state.user.users);
  const comments = useSelector((state) => state.comments.comments);
  const loading = useSelector((state) => state.comments.loading);

  if (loading) {
    return <div>loading.........</div>;
  }

  return (
    <div>
      <div>
        <div>{users.name}</div>
        <div>{users.lastName}</div>
        <div>{users.telephone}</div>
      </div>
      <div>
        {comments.map((item) => {
          return (
            <div key={item._id}>
              <div>{item.text}</div>
              <button onClick={() => deleteTodo(item._id)}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfilPage;
