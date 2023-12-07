import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./style.css";
class Render extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }
  render() {
    const getres = (value) => {
      console.log(value);
      this.setState({
        active: value,
      });
    };
    return (
      <div className="profile">
        {this.state.active ? (
          <Login getres={getres} />
        ) : (
          <Signup getres={getres} />
        )}
      </div>
    );
  }
}
export default Render;
