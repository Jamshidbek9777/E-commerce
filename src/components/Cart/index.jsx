import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
     Container,
     Wrapper,
     Card,
     CartCard,
     Description,
     Name,
     Image,
     Details,
     Seller,
     Buttons,
     Price,
     LeftSide,
     RightSide,
     Checkout,
     Mainpage,
     RemoveButton,
     SaveButton,
     Amount,
     NoItem,
     Text,
     Button,
     Coupon,
     TotalPrice,
     HaveACoupon,
     InputContainer,
     Input,
     Apply,
} from "./style";
export const Cart = ({ cartItem, setCartItem }) => {
     const [amount, setAmount] = useState(1);

     const handleAmountChange = (value, index) => {
          if (cartItem[index] && cartItem[index].quantity + value > 0) {
               cartItem[index].quantity += value;
               setCartItem([...cartItem]);
               setAmount(cartItem[index].quantity);
          }
     };

     const removeProduct = (index) => {
          const updatedCart = [...cartItem];
          updatedCart.splice(index, 1);
          setCartItem(updatedCart);
     };
     const navigate = useNavigate();
     return (
          <Container>
               <h1>My cart</h1>
               <Mainpage>
                    <Wrapper>
                         {cartItem.length === 0 ? (
                              <NoItem>
                                   <Text>
                                        <h1>Cart is empty</h1>
                                   </Text>
                                   <Button>
                                        <button
                                             onClick={() => navigate("/home")}>
                                             Back into shopping
                                        </button>
                                   </Button>
                              </NoItem>
                         ) : (
                              cartItem.map((item, index) => (
                                   <Card key={index}>
                                        <CartCard>
                                             <LeftSide>
                                                  <div>
                                                       {" "}
                                                       <Image>
                                                            <img
                                                                 src={
                                                                      item.image
                                                                 }
                                                                 alt=""
                                                            />
                                                       </Image>
                                                       <Description>
                                                            <Name>
                                                                 {item.name}
                                                            </Name>
                                                            <Details>
                                                                 <p>
                                                                      Memory:{" "}
                                                                      {
                                                                           item.memory
                                                                      }
                                                                 </p>
                                                                 <p>
                                                                      Ram:{" "}
                                                                      {item.ram}
                                                                 </p>
                                                                 <p>
                                                                      Color:{" "}
                                                                      {
                                                                           item.color
                                                                      }
                                                                 </p>
                                                            </Details>
                                                            <Seller>
                                                                 Seller:{" "}
                                                                 {item.seller}
                                                            </Seller>
                                                       </Description>
                                                  </div>
                                                  <Buttons>
                                                       <RemoveButton
                                                            onClick={() =>
                                                                 removeProduct(
                                                                      index
                                                                 )
                                                            }>
                                                            Remove
                                                       </RemoveButton>
                                                       <SaveButton>
                                                            Save for later
                                                       </SaveButton>
                                                  </Buttons>
                                             </LeftSide>
                                             <RightSide>
                                                  <Amount>
                                                       <button
                                                            onClick={() =>
                                                                 handleAmountChange(
                                                                      -1,
                                                                      index
                                                                 )
                                                            }>
                                                            -
                                                       </button>
                                                       {item.quantity}
                                                       <button
                                                            onClick={() =>
                                                                 handleAmountChange(
                                                                      1,
                                                                      index
                                                                 )
                                                            }>
                                                            +
                                                       </button>
                                                  </Amount>
                                                  <Price>
                                                       $
                                                       {item.price *
                                                            item.quantity}
                                                  </Price>
                                             </RightSide>
                                        </CartCard>
                                   </Card>
                              ))
                         )}
                    </Wrapper>
                    {cartItem.length !== 0 && (
                         <Checkout>
                              <Coupon>
                                   <HaveACoupon>Have a coupon?</HaveACoupon>
                                   <InputContainer>
                                        <Input placeholder="Add a coupon"></Input>
                                        <Apply>Apply</Apply>
                                   </InputContainer>
                              </Coupon>
                              <TotalPrice>
                                   <div>
                                        <div>
                                             <div>
                                                  <h4>Subtotal:</h4>
                                                  <h4>Discount:</h4>
                                                  <h4>Tax:</h4>
                                             </div>
                                             <div>
                                                  <p>$1403.97</p>
                                                  <p>$1403.97</p>
                                                  <p>$1403.97</p>
                                             </div>
                                        </div>
                                        <h4>
                                             Total: <p>$1500</p>
                                        </h4>
                                        <button>Checkout</button>
                                   </div>
                              </TotalPrice>
                         </Checkout>
                    )}
               </Mainpage>
          </Container>
     );
};

export default Cart;
