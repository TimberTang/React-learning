import React, { Component, Fragment } from "react";
import "./style.css";
import XiaojiejieItem from "./XiaojiejieItem";

class Xiaojiejie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "TimberTang",
            list: ["基础按摩", "精油推背"],
        };
    }
    render() {
        return (
            <Fragment>
                {/* 1. 第一次写注释 大括号加上js的注释 */}
                {
                    // 注释 单行需要换行
                }

                {/* class 陷阱 需要使用className */}

                {/* 3. dangerouslySetInnerHTML 可以显示html 来解析 */}
                {/* 4. label辅助性标签 点击可以聚焦到input上 必须使用htmlfor 来区别jsx 的for */}
                <div className="form">
                    <label htmlFor="timber">增加服务：</label>
                    <input
                        id="timber"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                    ></input>
                    <button onClick={this.addList.bind(this)}>添加服务</button>
                    <ul>
                        {this.state.list.map((item, index) => {
                            return (
                                // <li
                                //     onClick={this.deleteItem.bind(this, index)}
                                //     dangerouslySetInnerHTML={{__html: item}}
                                //     key={index}>
                                //     {/* {item} */}
                                // </li>
                                <div key={index}>
                                    <XiaojiejieItem
                                        content={item} 
                                        index={index}
                                        deleteItem={this.deleteItem.bind(this)}
                                    />
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </Fragment>
        );
    }
    inputChange(el) {
        const value = el.target.value;
        console.log(value);
        // this.state.input = value // 这是错误的。 1. this 指向undefied  2. 直接修改state是不可行的
        // console.log(this);
        this.setState({
            inputValue: value,
        });
    }
    addList(el) {
        if (!this.state.inputValue) {
            return;
        }
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: "",
        });
    }
    deleteItem(index) {
        console.log(index);
        const list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list,
        });

        // 错误写法
        // 不允许直接改变state 里面的数据， 会产生很大的性能障碍
        // this.state.list.splice(index, 1) //
        // this.setState({
        //     list: this.state.list
        // })
    }
}

export default Xiaojiejie;
