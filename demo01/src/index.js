import React from 'react'
import ReactDOM from 'react-dom'

import Xiaojiejie from './Xiaojiejie'

// jsx javascript 和 xml 的结合， react 发明了jsx， 用jsx 来创建虚拟dom， 可以快速反映动作 
// < 当成hxml 来解析 遇到{ } 当成js来解析
// 自定义组件开头必须大写
ReactDOM.render(<Xiaojiejie/>, document.getElementById('root'))