import React , { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCommentsByUser } from '../../../redux-toolkit/features/comments';
import { getUser } from "../../../redux-toolkit/features/usersSlice"; 

const ProfilPage = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  useEffect(() => {
    dispatch(getCommentsByUser())
  }, [dispatch])

  const users = useSelector((state) => state.user.users);
  const comments = useSelector((state) => state.comments);
  return (
    <div> 
    <ul>
        <li>{users.name}</li>
        <li>{users.lastName}</li>
        <li>{users.telephone}</li>
        <li>{comments.text}</li> 
    </ul>
    </div>
  );
};

export default ProfilPage;