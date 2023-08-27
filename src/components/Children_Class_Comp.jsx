import React, { Component } from "react";

export default class Children_Class_Comp extends Component {
  // hàm hendleClick
    handleClick = () => {
        this.props.handleChangeName("LaLisa");
    };
  render() {
    return (
      <>
        <div>UserName ở dưới Class_Comp:{this.props.userName}</div>
        <button onClick={this.handleClick}>Change Props</button>
      </>
    );
  }
}
