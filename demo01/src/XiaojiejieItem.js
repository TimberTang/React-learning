import React, { Component } from "react";

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.deleItem = this.deleItem.bind(this)
  }
  render() {
    return <li onClick={this.deleItem}>{this.props.content}</li>;
  }
  deleItem(item) {
    // alert(this.props.index);  
    // 调用父组件的方法
    this.props.deleteItem(this.props.index)
  }
}

export default XiaojiejieItem;
