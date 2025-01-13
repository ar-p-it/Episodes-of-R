import { useState } from "react";
const User = (props) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h1>Count :{count}</h1>
      <h2>This is {props.name}</h2>
      <h3>Location : {props.location} </h3>
      <h4>Contact:9898877698</h4>
    </div>
  );
};
export default User;
