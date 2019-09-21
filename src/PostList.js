import React from 'react';
import PostData from './data.json'
import './App.css';



function PostList() {
  return (
    <div className="App">
      <h1>Hello There</h1>
      {PostData.data.map((postDetail, index)=>{
          return <h1>{postDetail.name}</h1>
      })}
    </div>
  );
}

export default PostList;
