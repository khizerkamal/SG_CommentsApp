import React from 'react';
import './App.css';
import {CommentDetail} from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

function App() {

  return (
<div className="ui container comments">
  <h3 className="ui dividing header">Comments</h3>

  <ApprovalCard>
    <div>
      <h4>Warning!</h4>
      Are you Sure!
    </div>
  </ApprovalCard>
  <ApprovalCard>
    <CommentDetail
        name="Sam"
        timeAgo="Today at 5:02 PM"
        comment="Nice"
        avatar={faker.image.avatar()}
      />
 </ApprovalCard>

<ApprovalCard>
 <CommentDetail
    name="Jane"
    comment="Good sense of Humour"
    timeAgo="Today at 8:45 PM"
    avatar={faker.image.avatar()}
  />
 </ApprovalCard>

 <ApprovalCard>
 <CommentDetail 
    name="Tom" 
    comment="Amazing!"
    timeAgo="Today at 6:18 PM"
    avatar={faker.image.avatar()}
 />
</ApprovalCard>

<ApprovalCard>
<CommentDetail 
    name="Smith" 
    comment="Very Nice!"
    timeAgo="Today at 5:18 PM"
    avatar={faker.image.avatar()}
 />
</ApprovalCard>

<ApprovalCard>
<CommentDetail 
    name="Harry" 
    comment="Thats just awesome!"
    timeAgo="Today at 2:56 PM"
    avatar={faker.image.avatar()}
 />
 </ApprovalCard>
</div>
  );
}

export default App;