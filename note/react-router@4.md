# React Router 4 - WEB API
React Router 4 API 分为 WEB/Native/Core 三部分，以下是 WEB API

### ``` <BrowserRouter> ``` (浏览器路由)

1. 首页还原度 90% 以上（对于具体细节，如不清楚，可以直接找我）
2. 良好的组件结构
3. 前端所需要的 JSON 数据需要自己进行 Mock
4. 必须使用 React 0.14 以后版本支持的 class 方式完成
5. 脚手架，可以使用 https://github.com/facebookincubator/create-react-app
    - 通过配置 proxy 与后端交互
    - 你可以使用 json-server https://github.com/typicode/json-server 作为自己的后端服务器
6. 如何取数据，可以参考 https://github.com/github/fetch
7. 网页中的 iconfont 可以参考 http://fontawesome.io/ 能找到最好，找不到的话，可以随便放一个作为站位符
8. 所有相关代码必须提交到 github: https://github.com

###<HashRouter>(锚点路由)

### '<Link>' (链接组件)

### <NavLink> (导航链接组件)

### <Prompt> (提示组件)

### <MemoryRouter> (内存路由)

### <Redirect> (重定向组件)

### <Route> (路由组件)

#### <Router> (路由器组件)

#### <StaticRouter> (静态路由组件)

#### <Switch> (单匹配组件)

state 是组件内部状态, 它可以直接在构造函数内部使用 this.state 直接定义, 也可以使用 this.setState 修改(会自动 render)

#### 注册事件

注意 bind


#### 组件生命周期

##### 组件初始化 https://facebook.github.io/react/docs/state-and-lifecycle.html
    - getDefaultProps --> 在 constructor 中处理 constructor(props){super(props)}
    - getInitialState --> 在 constructor 中处理 this.state
    - componentWillMount --> 在 render 之前调用 一次
    - render
    - componentDidMount --> 在 render 之后调用 一次

##### 组件 props 更新
    - componentWillReceiveProps(object, nextProps)
    - shouldComponentUpdate -> 返回 boolean 决定是否 render 组件
    - componentWillUpdate
    - render
    - componentDidUpdate

##### 组件卸载
    - componentWillUnmount


#### DOM

this.refs.name 获取 DOM 的引用

```
<input type="text" ref="name" />
```
