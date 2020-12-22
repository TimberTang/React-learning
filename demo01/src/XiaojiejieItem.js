import React, { Component } from "react";
import PropTypes from "prop-types";

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.deleItem = this.deleItem.bind(this);
    }
    render() {
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
