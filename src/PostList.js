import React from 'react';
import PostData from './data.json'
import './App.css';

function PostList() {
    
  
  for(var x=0;x<PostData.data.length;x++){
    if (PostData.data[x].email==='jackpost@gmail.com'){
      console.log('Se encontró a jackpost@gmail.com');
      return(
        <div className="App">
          <h1>Hello There</h1>
          <div className="card"> 
            <h1>{PostData.data[x].name} , {PostData.data[x].age}</h1>
            <p>{PostData.data[x].notes}</p>
            <p class="title">Address </p>
            <p>{PostData.data[x].address}</p>
          </div>
        </div>
      );
    }
  }
}
  
  // return (
  //   <div className="App">
  //     <h1>Hello There</h1>
  //     {PostData.data.map((postDetail, index)=>{
  //         return (
  //                 <div className="card"> 
  //                   <h1>{postDetail.name} , {postDetail.age}</h1>
  //                   <p>{postDetail.notes}</p>
  //                   <p class="title">Address </p>
  //                   <p>{postDetail.address}</p>
  //                 </div>
  //               )
  //     })}
  //     <div className="card">  
  //                   <h1>John Doe</h1>
  //                   <p class="title">CEO & Founder, Example</p>
                    
  //                 </div>
  //   </div>
  // );


export default PostList;
