## React 学习

1. 安装脚手架 cra
2. 新建项目 create-react-app demo
3. package.json 三方包管理工具盒配置文件  dependencies 依赖工具 scripts 命令 
4. package-lock.json 锁定安装时的版本号
5. gitignore git 管理文件 ， 忽略文件
6. node-moduals 三方包
7. public 共用文件， favicon.ico 用显示网站标签的图片 index.html 模板文件
8. manifest.json 移动端配置
9. src 平时在下面编写源代码


### 开始项目
1. 从index.js开始
2. 引入react相关组件 并render
3. app.js 继承components 实现renderr 函数并导出


### jsx中注意事项
{/* 1. 第一次写注释 大括号加上js的注释 */}
 {// 注释 单行需要换行
 } 

 {/* class 陷阱 需要使用className */}

 {/* 3. dangerouslySetInnerHTML 可以显示html 来解析 */}
 {/* 4. label辅助性标签 点击可以聚焦到input上 必须使用htmlfor 来区别jsx 的for */}


 ## 插件 simple react snippets
 imrc = import react
 cc  = class components'


 ## 组件拆分 
 根据业务功能进行拆分， 这样设计到父子组件传值

 父组件像子组件传值 运用props 属性传值方法。 子组件用this.props接受
 子组件像父组件传值 运用props 回调函数传递方法。 父组件去操作里面的方法


 ## 单向数据流和其他框架结合 && 函数式编程


 ## React Dev tools google 扩展程序， 可以在chrome 上进行调试
安装后可以看到Components and profiler


## props 参数校验

import PropTypes from "prop-types";

// 参数类型校验
XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    deleItem: PropTypes.func,
    avname: PropTypes.string.isRequired
};

// 默认参数
XiaojiejieItem.defaultProps = {
  avname: '波波'
}


## ref 绑定 html的元素 

因为setState 是异步的。 虚拟dom是有时间的。可以利用setState 回调函数来操作其他的


## 生命周期  在某一时刻, 可以自动执行的函数
四大块  initlization  mounting updation unmounte四大阶段
initlization: 初始化阶段, 比如构造函数中
mounting: compoentWillMount => render => componentDidMount
updation: 


states 发生变化
1. shouldComponentUpdate // 在组件更新之前执行 如果return false 则不会网下面执行. return true可以继续网下执行
2. componentWillUpdate // componentWillUpdate 在 shouldComponentUpdate 执行 
3. render // 前两部执行后执行render
4. componentDidUpdate // 组件已经更新完成后

props 属性发生变化
1. componentWillReceiveProps // 组件接受到props 发生变化时更新
  // 1. 组件第一次存在于dom中, 函数是不会被执行的
    // 2. 如果存在于dom中,函数才会被执行

剩下的和states 发生一样
![生命周期](https://github.com/TimberTang/React-learning/blob/main/demo01/lifecycle.png)


unmouning: 
componentWillUnmount // 组件将要背删除时执行


## 项目问题, 组件不停的在render 
可以通过 dev tools 开启hilight updates 选项查看

子组件可以合理的设置 shouldComponentUpdate 来控制显示性能

例如: 
shouldComponentUpdateshouldComponentUpdate (nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
        return true
    }
    return false
}


## 远程数据请求

#### 相关命令简介
npm install axios 安装node moduuals 但是在package.json 下没有依赖
npm install -g axios 安装到全局 prefix
npm install -save axios 安装到 node moduals 并在package.json dependencies 有依赖 依赖的作用就是npm install的时候会 
npm install-save-dev  axios  保存在devdependencies 中