import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { message } from "antd";
import App from "./App";
export const Rout = () => {
     const addToCart = (product) => {
          const exist = cartItem.find((x) => {
               return x.id === product.id;
          });
          if (exist) {
               message.warning("Item is added already");
          } else {
               setCartItem([...cartItem, { ...product, quantity: 1 }]);
               message.success("Item added to your cart succesfully");
          }
     };
     const [cartItem, setCartItem] = useState([]);

     return (
          <div>
               <Router>
                    <App
                         addToCart={addToCart}
                         cartItem={cartItem}
                         setCartItem={setCartItem}
                    />
               </Router>
          </div>
     );
};
export default Rout;
