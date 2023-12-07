import React from "react";

import {
  Container,
  Login,
  Title,
  InputEmail,
  InputPassword,
  InputUsername,
  Label,
  Label1,
  Label2,
  Button,

  Help,
} from "./style";



class Main extends React.Component {
  render() {
    return (
      <Container>
   
        <Login>
          <Title>Register</Title>
          <Label1 htmlFor="usernameInput">Your email:</Label1>
          <InputEmail id="usernameInput" />
          <Label htmlFor="passwordInput">Choose username</Label>
          <InputUsername id="passwordInput" />
          <Label2 htmlFor="passwordInput">Create a password</Label2>
          <InputPassword id="passwordInput" />
          <Button type="submit">Sign Up</Button>
          <Help>
            Have an account? 
            <a onClick={()=>this.props.getRes(true)} className="a" href=""> Login</a>
          </Help>
        </Login>
      </Container>
    );
  }
}
export default Main;
