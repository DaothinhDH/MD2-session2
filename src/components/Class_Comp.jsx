import React, { Component } from "react";
import Children_Class_Comp from "./Children_Class_Comp";

export default class Class_Comp extends Component {
  // khai báo constructor => Hàm khởi taọ hay là bản thiết kế của 1 đối tượng
  constructor(props) {
    super(props); // super dc suwr dụng để kế thừa các phương thức và thuộc tính của class cha
    //  khai báo state
    this.state = {
      //  Danh sách các state muôn khai báo
      company: "blackpink ",
      status: false,
      userName: "Việt Anh",
    };
  }
  handleClick = () => {
    // cập nhật lại state
    this.setState({
      company: "MTP entertaiment",
    });
  };

  handleStatus = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  //  hàm ccạp nhật lại state userName
    handleChangeName = (name) => {
        console.log("Đã Nhận", name);
        // cập nhật lại state
        this.setState({
            userName: name,
        })
  };

  render() {
    return (
      <>
        <div>Tên Công Ty: {this.state.company} </div>
        <button onClick={()=>this.handleClick()}>Change State</button>
        <button onClick={this.handleStatus}>
          {this.state.status ? "Hiện" : "ẩn"}
        </button>

        {/* gọi đến copmonent con  */}
        <h1>UserName bên trong Class_Comp:{this.state.userName}</h1>
        <Children_Class_Comp
          userName={this.state.userName}
          handleChangeName={this.handleChangeName}
        />
      </>
    );
  }
}

//  có 1 nút button có tittl là show, khi click vào thì hiển thị là ẩn , click lần nữa là hiện
// tạo ra 1 state tittle có giá trị làm hiện,
// viết 1 hàm để set lại state
