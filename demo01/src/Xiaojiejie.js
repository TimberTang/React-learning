import React, { Component, Fragment } from "react";
import "./style.css";
import XiaojiejieItem from "./XiaojiejieItem";
import axios from 'axios'
import Boss from './boss'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class Xiaojiejie extends Component {
    // 在某一时刻, 可以自动执行的函数
    // 可以当成初始阶段
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "TimberTang",
            list: ["基础按摩", "精油推背"],
        };
    }


    // 组件已经挂在 
    componentDidMount () {
        // axios.get('/')
    axios.post('http://tcg.t1.ndmicro.net/tmd/api/index/v1/credit-limit')
    .then((res) => {
        console.log('success' + JSON.stringify(res));
        // this.setState({
        //     list: res.data
        // })
    })
    .catch(error => {
    })
    }

    // componentWillMount () {
    //     console.log('componentWillMount');
    // }

    // componentDidMount() {
    //     console.log('componentDidMount');
    // }


    // shouldComponentUpdate() { // 在组件更新之前执行
    //     console.log('shouldComponentUpdate');
    //     return true
    // }

    // componentWillUpdate () { // componentWillUpdate 在 shouldComponentUpdate 执行
    //     console.log('componentWillUpdate');
    // }

    // componentDidUpdate () {
    //     console.log('componentDidUpdate');
    // }

    // compoentWillMount => render => componentDidMount
    render() {
        // console.log('render');
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
                        ref = {(input) => {this.input = input}}
                    ></input>
                    <button onClick={this.addList.bind(this)}>添加服务</button>
                    <ul ref={(ul)=> this.ul = ul}>
                        <TransitionGroup>
                            {this.state.list.map((item, index) => {
                                return (
                                    // <li
                                    //     onClick={this.deleteItem.bind(this, index)}
                                    //     dangerouslySetInnerHTML={{__html: item}}
                                    //     key={index}>
                                    //     {/* {item} */}
                                    // </li>
                                    <CSSTransition
                                        timeout={2000}
                                        classNames='boss-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index+item}
                                    >
                                        <div key={index}>
                                            <XiaojiejieItem
                                                content={item}
                                                index={index}
                                                deleteItem={this.deleteItem.bind(this)}
                                            />
                                        </div>
                                    </CSSTransition>
                                );
                            })}
                        </TransitionGroup>
                    </ul>
                </div>
                <Boss></Boss>
            </Fragment>
        );
    }
    inputChange(el) {
        // const value = el.target.value;
        const value = this.input.value
        // console.log(value);
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
        }, () => {
            console.log(this.ul.querySelectorAll('li').length); // 利用回调函数
        });
        // 绑定ul 后查询找li 然后获取长度 
        // 最后length 会少一项， 因为setState 是异步的。 虚拟dom是有时间的。 所有这里获取length会不一样
        // console.log(this.ul.querySelectorAll('li').length);
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
