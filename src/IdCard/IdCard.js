import React from "react";

export const IdCard = props => {
  return (
    <div>
      <div>
        <img src={props.picture} alt="" />
      </div>
      <div>
        <h2>First Name: </h2>
        {props.firstName}
        <h2>Last Name: </h2>
        {props.lastName}
        <h2>Gender: </h2>
        {props.gender}
        <h2>Height: </h2>
        {props.height}
        <h2>Birth: </h2>
        {props.birth.toLocaleDateString()}
      </div>
    </div>
  );
};
