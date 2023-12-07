import React from "react";

import {
  Container,
  Login,
  Title,
  InputUsername,
  InputPassword,
  Label,
  Label1,
  Button,
  Help,
} from "./style";

class Main extends React.Component {
  render() {
    return (
      <Container>
        <Login>
          <Title>Login</Title>

          <Label1 htmlFor="usernameInput">Username:</Label1>
          <InputUsername id="usernameInput" />
          <Label htmlFor="passwordInput">Password:</Label>
          <InputPassword id="passwordInput" />
          <Button type="submit">Login</Button>
          <Help>
            Don't have an account?
            <a onClick={() => this.props.getres(false)} className="a">
              {" "}
              Register
            </a>
          </Help>
        </Login>
      </Container>
    );
  }
}
export default Main;
