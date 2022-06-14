import React from "react";
// import { useDispatch, useSelector } from 'react-redux'
// import { getCategory } from '../../../../redux-toolkit/features/categories';

function Sidebar({ category, handleCategory }) {
  return (
    <div>
      <div onClick={() => handleCategory(category._id)}>{category.name}</div>
    </div>
  );
}

export default Sidebar;
