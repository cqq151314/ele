# React Router 4 - WEB API
React Router 4 API 分为 WEB/Native/Core 三部分，以下是 WEB API
### ```<BrowserRouter>``` (浏览器路由)
使用 HTML5 History API（pushState，replaceState 和 popstate 事件）的 <Router> 来保持 UI 与 URL 同步。
```jsx
<BrowserRouter
  basename="/profile"
  forceRefresh={!supportsHistory}
  getConfirmation={window.confirm("浏览器路由")}
  keyLength={11}>
 <Link to="/one"/>
</BrowserRouter>
```
- basename： string  -->  设置基本的url路径，渲染之后to的路径为/profile/one
- forceRefresh bool  -->  如果为 true，则路由器将在页面导航中使用全页刷新
- getConfirmation func  -->  用于弹出提示框。默认使用 window.confirm
- keyLength: number --> props.location.key的长度，这个key值是随机的，最大可设置的长度为11，默认长度为6

### ``` <HashRouter>``` (锚点路由)
```jsx
<Link to="/courses" />
<Link to={{
  pathname: '/courses',
  search: '?sort=name',
  hash: '#the-hash',
  state: { fromDashboard: true }
}}/>
```
- basename： string  -->  设置的url路径，渲染之后to的路径为
- to object  -->  url路径为 /courses?sort=name#the-hash，通过props.location.state可以查看state的值

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
