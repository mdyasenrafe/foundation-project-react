import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AddedCartName from "./AddedCartName";

const Cart = (props) => {
  const userIcon = <FontAwesomeIcon icon={faUser} />;
  let totlaDonated = 0;
  let users = [];
  for (const men of props.data) {
    if (users.indexOf(men) === -1) {
      users.push(men);
      totlaDonated = men.sallary + totlaDonated;
    }
  }
  return (
    <div>
      <h4>
        <span className="text-danger">
          {userIcon}
          Total Men Added :
        </span>
        <span> {users.length}</span>
      </h4>
      <h5>
        <span className="text-danger">Total Donated : $</span>
        <span>{totlaDonated}</span>
      </h5>
      <div>
        {users.map((men) => (
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
