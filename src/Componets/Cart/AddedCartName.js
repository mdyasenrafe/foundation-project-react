import React from "react";

const AddedCartName = (props) => {
  const { name, photo } = props.men;
  return (
    <div className="shadow-lg my-3 d-flex align-items-center justify-content-around">
      <img height="50" className="w-25 rounded-circle" src={photo} alt="" />
      <p> {name}</p>
    </div>
  );
};

export default AddedCartName;
