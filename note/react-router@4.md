# React Router 4 - WEB API
React Router 4 API 分为 WEB/Native/Core 三部分，以下是 WEB API
### 一```<BrowserRouter>``` (浏览器路由)
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

### 二 ``` <HashRouter>``` (锚点路由)

### 三```<Link>``` (链接组件)

类似于a标签

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

### 四 ```<NavLink>``` (导航链接组件)
与当前 URL 匹配时，可向渲染元素添加样式属性
```jsx
 <NavLink to="/center" activeStyle={{color: '##0089dc'}}>导航链接组件</NavLink>
 <NavLink to="/center"  activeClassName="selected">导航链接组件</NavLink>
 <NavLink to="/profile/refused/" isActive={()=>{return true}}></NavLink>
 ```
- exact: bool  --> 位置完全匹配，activeStyle/activeClassName才生效
- strict: bool --> 位置匹配，尾部有斜线，activeStyle/activeClassName才生效
- isActive: func --> 当return的结果为true时，该导航的activeStyle/activeClassName一直生效，否则，一直不生效
###  五 ```<Prompt>``` (提示组件)
当路径发生改变时，弹出提示框
```jsx
<Prompt message="Are you sure you want to leave?"/>
<Prompt  when={true} message="Are you sure you want to leave?" />
<Prompt message={location => (Are you sure you want to go to ${location.pathname}?`)}/>
 ```
- message: string --> 提示框的内容
- message: func --> 提示框的内容可以动态设置
- when: bool  --> when={true}提示框生效，when={false}提示框失效 
### 六 ```<MemoryRouter>``` (内存路由)

### 七 ```<Redirect>``` (重定向组件)
渲染 ```<Redirect>``` 将导航到新的位置。进行重新定向
```jsx
<Redirect  to='/profile/center'/>
<Redirect  to={{pathname: '/profile/center', search: '?type=keywords', state: { referrer: "aa" }}}/>
<Switch>
 <Redirect from='/profile/orderThree' to='/profile/center'/>
 <Route  path="/profile/center" component={UserRight}/>
 <Route exact  path="/profile/orderThree" component={orderThree}/>
</Switch>
``` 
- to: string 要重定向到的网址
- to: object 要重定向到的位置，网址变为/profile/center?type=keywords 页面进项跳转

![](https://github.com/cqq151314/ele/blob/master/note/img/a1.png)

- push: bool -->当为 true 时，重定向会将新条目推入历史记录，而不是替换当前条目

1.有push时

![](https://github.com/cqq151314/ele/blob/master/note/img/a2.png)

1.没有push时

![](https://github.com/cqq151314/ele/blob/master/note/img/a3.png)

- from: string 要重定向的路径名,使用时时必须搭配<Switch>使用，否则不生效

### 八 ```<Route>```  (路由组件)

### 九 ```<Router>``` (路由器组件)

### 十 ```<StaticRouter>``` (静态路由组件)

### 十一 ```<Switch>``` (单匹配组件)

