import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AddedCartName from "./AddedCartName";

const Cart = (props) => {
  const userIcon = <FontAwesomeIcon icon={faUser} />;
  let name = "";
  let totlaDonated = 0;
  for (const men of props.data) {
    totlaDonated = men.sallary + totlaDonated;
    name = men.name;
  }
  return (
    <div>
      <h4>
        <span className="text-danger">
          {userIcon}
          Total Men Added :
        </span>
        <span> {props.data.length}</span>
      </h4>
      <h5>
        <span className="text-danger">Total Donated : $</span>
        <span>{totlaDonated}</span>
      </h5>
      <div>
        {props.data.map((men) => (
          <AddedCartName key={men.id} men={men}></AddedCartName>
        ))}
      </div>
      <div className="my-4">
        <button className="btn btn-outline-dark">Create Foundation</button>
      </div>
    </div>
  );
};

export default Cart;
