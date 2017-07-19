# React Router 4 - WEB API
React Router 4 API 分为 WEB/Native/Core 三部分，以下是 WEB API

### ```<BrowserRouter>``` (浏览器路由)
使用 HTML5 History API（pushState，replaceState 和 popstate 事件）的 <Router> 来保持 UI 与 URL 同步。

#### 详解
```
<BrowserRouter
  basename={optionalString}
  forceRefresh={optionalBool}
  getUserConfirmation={optionalFunc}
  keyLength={optionalNumber}
>
  <App/>
</BrowserRouter>
```
- basename： string   设置基本的url路径
```<BrowserRouter  basename="/profile">
   <Link to="/today"/>
   </BrowserRouter>
   ``` <Link to="/today"/> 设置路径为/profile/today
- forceRefresh bool

### ``` <HashRouter>``` (锚点路由)

### ```<Link>``` (链接组件)

### ```<NavLink>``` (导航链接组件)

### ```<Prompt>``` (提示组件)

### ```<MemoryRouter>``` (内存路由)

### ```<Redirect>``` (重定向组件)

### ```<Route>```  (路由组件)

### ```<Router>``` (路由器组件)

### ```<StaticRouter>``` (静态路由组件)

### ```<Switch>``` (单匹配组件)


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
