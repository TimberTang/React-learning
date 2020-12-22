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
