import React, { Component } from "react";
import PropTypes from "prop-types";

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.deleItem = this.deleItem.bind(this);
    }

    // 组件接受到props 发生变化时更新
    // 1. 组件第一次存在于dom中, 函数是不会被执行的
    // 2. 如果存在于dom中,函数才会被执行
    // componentWillReceiveProps () {
    //     console.log('child ---- componentWillReceiveProps');
    // }

    // componentWillUnmount () {
    //     console.log('componentWillUnmount');
    // }

    shouldComponentUpdate (nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        }
        return false
    }

    render() {
        console.log('child ---render');
        return (
            <li onClick={this.deleItem}>
                {this.props.avname}-为你做{this.props.content}
            </li>
        );
    }
    deleItem(item) {
        // alert(this.props.index);
        // 调用父组件的方法
        this.props.deleteItem(this.props.index);
    }
}

XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    deleItem: PropTypes.func,
    avname: PropTypes.string.isRequired
};

XiaojiejieItem.defaultProps = {
  avname: '波波'
}

export default XiaojiejieItem;
