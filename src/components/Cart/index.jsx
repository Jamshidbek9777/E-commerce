import React from "react";
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
} from "./style";
import Image1 from "../../assets/imgs/Image4.png";
export const Cart = () => {
     return (
          <Container>
               <h1>My cart</h1>
               <Mainpage>
                    <Wrapper>
                         <Card>
                              <CartCard>
                                   <LeftSide>
                                        <Image>
                                             <img src={Image1} alt="" />
                                        </Image>
                                        <Description>
                                             <Name>Samsung Galaxy A54 5g </Name>
                                             <Details>
                                                  <p>Memory: 256GB </p>
                                                  <p>Ram: 8GB</p>
                                                  <p>Color: blue</p>
                                                  <p>Ram: 8GB</p>
                                             </Details>
                                             <Seller>
                                                  Seller: Jamshidbek LLC
                                             </Seller>
                                        </Description>
                                        <Buttons>
                                             <RemoveButton>Remove</RemoveButton>
                                             <SaveButton>
                                                  Save for later
                                             </SaveButton>
                                        </Buttons>
                                   </LeftSide>
                                   <RightSide>
                                        <Price>$ 250</Price>
                                   </RightSide>
                              </CartCard>
                         </Card>
                    </Wrapper>
                    <Checkout>go</Checkout>
               </Mainpage>
          </Container>
     );
};
export default Cart;
