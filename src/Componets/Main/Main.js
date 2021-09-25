import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Men from "../Men/Men";

const Main = () => {
  const [mens, setMens] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setMens(data));
  }, []);
  const handleSelect = (men) => {
    const newCart = [...cart, men];
    setCart(newCart);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-9 col-lg-10">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {mens.map((men) => (
              <Men key={men.id} handleSelect={handleSelect} data={men}></Men>
            ))}
          </div>
        </div>
        <div className=" col-sm-12 col-md-3 col-lg-2">
          <Cart data={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Main;
