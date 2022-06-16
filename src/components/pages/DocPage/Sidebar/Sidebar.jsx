import React from "react";

function Sidebar({ category, handleCategory }) {
  return (
    <div>
      <div onClick={() => handleCategory(category._id)}>{category.name}</div>
    </div>
  );
}

export default Sidebar;
