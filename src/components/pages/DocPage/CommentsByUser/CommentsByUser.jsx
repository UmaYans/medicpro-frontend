import React from 'react'

function CommentsByUser({comments}) {
  console.log(comments)
  return (

    <>
    <div>
    <div>{comments.text}</div>
    <div></div>
    </div>
    </>

    )
}

export default CommentsByUser