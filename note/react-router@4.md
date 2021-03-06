# React Router 4 - WEB API
React Router 是 React 广泛使用的“路由”库，路由做的事情，可以简单理解为：根据 URL 规则渲染对应的 组件。之前最常用的是v2、v3版本，而新出的V4 版的 router 进行了代码完全重写, 其遵循 React 的 Just Component;声明式;可组合性的设计理念, 所有的东西都是一个组件: Router, Link, Switch. 而且
其代码库进行了拆分, 拆分成五个库:
  
  - react-router      -->   React Router 核心
  - react-router-dom       -->   用于 DOM 绑定的 React Router
  - react-router-native    -->  用于 React Native 的 React Router
  - react-router-redux     -->   React Router 和 Redux 的集成
  - react-router-config     -->  静态路由配置的小助手
  
 React-router 是核心基础库, router-dom 则用于 web 开发, router-native 用于React native 开发. 在 v4 中有两种基本的方法指定 url 对应的组件.
 一是component, 二是render.
### 引用react-router 还是 react-router-dom ？

  他们两个只要引用一个就行了，不同之处就是后者比前者多出了 ``` <Link> <BrowserRouter>  ```这样的 DOM 类组件。因此我们只需引用 react-router-dom 这个包就行了。
  
#### 一、```<BrowserRouter>```(浏览器路由)
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

#### 二、``` <HashRouter>```(锚点路由)
Hash history 不支持 location.key 和 location.state。另外由于该技术只是用来支持旧版浏览器，因此更推荐大家使用 BrowserRouter。这里给大家简单看下HashRouter的用法。
```jsx
 <HashRouter  basename="/Profile" getConfirmation={window.confirm("哈希路由")} >  
    <li><NavLink to="/orderThree" activeStyle={{color: '#0089dc'}} onClick={(e)=>{this.handClick(e)}}>近三个月订单</NavLink></li>
    <li><NavLink to="/untated"  activeStyle={{color: '#0089dc'}} onClick={(e)=>{this.handClick(e)}}>待评价订单</NavLink></li>
    <li><NavLink to="/refused" activeStyle={{color: '#0089dc'}}  onClick={(e)=>{this.handClick(e)}}>退单记录</NavLink></li>
    <li><NavLink to="/Profile/hongbao" activeStyle={{color: '#0089dc'}} onClick={(e)=>{this.handClick(e)}}>我的红包</NavLink></li>
    <li><NavLink to="/Profile/balance" activeStyle={{color: '#0089dc'}} onClick={(e)=>{this.handClick(e)}}>账户余额</NavLink></li>
    <Switch>
        <Route exact path="/" component={UserRight}/>
        <Route  path="/center" component={UserRight}/>
        <Route   path="/orderThree" component={orderThree}/>
        <Route   path="/untated" component={Ubrated}/>
        <Route   path="/refused" component={Refused}/>
        <Route  component={IndexCenter}/>
    </Switch>
  </HashRouter>
  ```
- basename： string  -->  设置基本的url路径，渲染之后to的路径为 ```<a href="#/Profile/orderThree" />```
- getConfirmation func  -->  用于弹出提示框。默认使用 window.confirm
- children: node --> 一个HashRouter只能有一个子节点，建议用 ```<div> ```将多个节点包裹起来。

【注意】在使用HashRouter时，to后面的地址为哈希值，（#/Profile/orderThree）,进行路由切换时，改变的是哈希值，  

#### 三、```<Link>``` (链接组件)

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
- basename： string  -->  设置的url路径，跳转到指定路径。
- to object  -->  url路径为 /courses?sort=name#the-hash，通过props.location.state可以查看state的值

#### 四、```<NavLink>``` (导航链接组件)
这是  ```<Link> ``` 的特殊版，顾名思义这就是为页面导航准备的。因为导航需要有 “激活状态”，
```jsx
 <NavLink to="/center" activeStyle={{color: '##0089dc'}}>导航链接组件</NavLink>
 <NavLink to="/center"  activeClassName="selected">导航链接组件</NavLink>
 <NavLink to="/profile/refused/" isActive={()=>{return true}}></NavLink>
 ```
- exact: bool  --> 位置完全匹配，activeStyle/activeClassName才生效
- strict: bool --> 位置匹配，尾部有斜线，activeStyle/activeClassName才生效
- isActive: func --> 当return的结果为true时，该导航的activeStyle/activeClassName一直生效，否则，一直不生效
#### 五、```<Prompt>``` (提示组件)
当用户离开当前页面前做出一些提示，用在render方法中，当做提示框标签使用。
```jsx
<Prompt message="Are you sure you want to leave?"/>
<Prompt  when={true} message="Are you sure you want to leave?" />
<Prompt message={location => (`Are you sue you want to go to ${location.pathname}?`)} />
 ```
- message: string --> 当用户离开当前页面时，设置的提示信息
- message: func --> 当用户离开当前页面时，设置的回掉函数
- when: bool  --> 通过设置一定条件要决定是否启用 Prompt,when={true}提示框生效，when={false}提示框失效 

#### 六、```<Redirect>``` (重定向组件)
渲染 ```<Redirect>``` 渲染时将导航到一个新地址，这个新地址覆盖本该访问的那个地址
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
- to: object 重定向的 location 对象，网址变为/profile/center?type=keywords 页面进项跳转，跳转时可以把一些需要的参数传递过去。

![](https://github.com/cqq151314/ele/blob/master/note/img/a1.png)

- push: bool -->当为 true 时，重定向会将新条目推入历史记录，而不是替换当前条目,无法回退到前面的页面

1.有push时

![](https://github.com/cqq151314/ele/blob/master/note/img/a2.png)

1.没有push时

![](https://github.com/cqq151314/ele/blob/master/note/img/a3.png)

- from: string 要重定向的路径名,使用时时必须搭配<Switch>使用，否则不生效

#### 七、```<Route>```  (路由组件)
```<Route>```  也许是 RR4 中最重要的组件了,它最基本的职责就是当页面的访问地址与 Route 上的 path 匹配时，就渲染出对应的 UI 界面。

```<Route>``` 自带三个 render method 和三个 props 

render methods 分别是：
 - ``` <Route component>```
 - ``` <Route render>```
 - ``` <Route children>```

【注意】 每种 render method 都有不同的应用场景，同一个<Route> 应该只使用一种 render method ，大部分情况下你将使用 component 。

props 分别是：
 - match
 - location
 - history
 
##### 1. component
当访问地址和路由匹配时，一个 React component 被渲染，此时此组件接受 route props (match, location, history)


```javascript
// 基本用法
 <Router history={history}>
      <div>
          <Route exact path="/" component={IndexCenter} />
          <Route exact path="/Profile" component={UserCenter}/> 
      </div>
</Router>

// 当嵌套子路由时，子页面NavLink和route不需要Router包裹
 render() {
  return (
   <div>
    <li><NavLink to="/Profile/orderThree" activeStyle={{color: '#0089dc'}} onClick={(e)=>{this.handClick(e)}}>近三个月订单</NavLink></li>
    <li><NavLink to="/Profile/untated"  activeStyle={{color: '#0089dc'}} onClick={(e)=>{this.handClick(e)}}>待评价订单</NavLink></li>
    <li><NavLink to="/Profile/refused" activeStyle={{color: '#0089dc'}}  onClick={(e)=>{this.handClick(e)}}>退单记录</NavLink></li>
    <li><NavLink to="/Profile/hongbao" activeStyle={{color: '#0089dc'}} onClick={(e)=>{this.handClick(e)}}>我的红包</NavLink></li>
    <li><NavLink to="/Profile/balance" activeStyle={{color: '#0089dc'}} onClick={(e)=>{this.handClick(e)}}>账户余额</NavLink></li>
    <Link to={'/profile/order/id/'+item.id}>订单详情</Link>
    <Route exact path="/Profile" component={UserRight}/>
    <Route  path="/Profile/center" component={UserRight}/>
    <Route   path="/Profile/orderThree" component={orderThree}/>
    <Route   path="/Profile/untated" component={Ubrated}/>
    <Route   path="/Profile/refused" component={Refused}/>
    <Route exact  path="/Profile/refused" component={Refused}/>
    <Route  exact path="/Profile/hongbao" component={HongBao}/>
    <Route exact  path="/Profile/balance" component={Balance}/>
    <Route  path="/profile/order/id/:id" component={OrderDetail}/>
  </div>
  );
 }

```
##### 2. render

```javascript

// 基本用法

<Route path="/home" render={() => <h1>Home</h1} />
<Route path='/page' render={(props) => (
  <Page {...props} data={extraProps}/>
)}/>

// 路由包装
const BoxRouter = ({ component: Component}) => (
  <Route   render={(props) => (<div><Component {...props} /></div> )} />
);
export default BoxRouter;

// 包装路由的使用

<BoxRouter path="/cool" component={组件} />

```
##### 3. children

```javascript
// 基本用法

<Route path='/page' children={(props) => (
  <EmptyPage {...props} />
)}/>
```
【注意】：通常component参数与render参数被更经常地使用。children参数偶尔会被使用，它更常用在path无法匹配时呈现的'空'状态。
- path: string  URL 路径,如果不给path，那么路由将一直匹配。
- exact: bool 

path |	location.pathname | exact | matches?
----|------|----|------
/a | /a  | true |  yes
/a | /a/  | true |   no
/a | /a/b  | true  |  no
/a | /a/  | no  |  yes  
/a | /a/b  | no  |  yes  

【总结】如果exact为false，则每次匹配/a/b时都会先把/a的组件渲染出来，再把/b的组件渲染出来，如果exact为true，则每次渲染时只渲染/b.

- strict: bool 

path |	location.pathname | strict | matches?
----|------|----|------
/a | /a/  | true |  yes
/a/ | /a  | true |   no
/a | /a/b  | true  |  yes
/a/b/ | /a/b  | true  |  no 
/a/b | /a/b/  | true  |  yes  

【总结】如果strict为true，在路径层级相同或location.pathname比path多一层时，location.pathname后面带有斜杠时则匹配成功，如果想确保路由没有斜杠，则exact和strict都必须为true   

##### 3.props的所有信息如下所示。

![](https://github.com/cqq151314/ele/blob/master/note/img/a4.png)

#### 八、```<Router>``` (路由器组件)
- history: object  
```jsx
import createBrowserHistory from 'history/createBrowserHistory'
  render(){
    const customHistory = createBrowserHistory();
    const history = createBrowserHistory();
    // 将新入口放入历史堆栈
    history.push({
        pathname: '/profile',
        search: '?a=query',
        // 一些不存在url参数上面的当前url的状态值
        state: { the: 'state' }
    })
    return (
      <div className="App">
          <Router history={history}>
              <div>
                 <Route exact path="/" component={IndexCenter} />
                 <Route exact path="/Profile" component={UserCenter}/>
              </div>
          </Router>
      </div>
    );
```
【总结】history.push后，跳转到push的路径里。url地址为：/profile?a=query#/
#### 九、```<Switch>``` (单匹配组件)

只渲染出第一个与当前访问地址匹配的 ```<Route>或<Redirect>```,只会渲染第一个匹配奥！
```jsx
  <Route exact path="/Profile" component={UserRight}/>
  <Route  path="/Profile/center" component={UserRight}/>
  <Route   path="/Profile/orderThree" component={orderThree}/>
  ```
// 在上面这段代码中，如果你访问 /about，那么组件 UserRight，UserRight，orderThree 都将被渲染出来，因为他们对应的路由与访问的地址 /about 匹配。这显然不是我们想要的，我们只想渲染出第一个匹配的路由就可以了，于是 <Switch> 应运而生！
```jsx
<Switch>
  <Route path="/Profile" component={UserRight}/>
  <Route path="/Profile/center" component={UserRight}/>
  <Route path="/Profile/orderThree" component={orderThree}/>
  <Route component={orderThree}/>
</Switch>
```
 【总结】 <Switch> 下的子节点只能是 <Route> 或 <Redirect> 元素。只有与当前访问地址匹配的第一个子节点才会被渲染。<Route> 元素用它们的 path 属性匹配，<Redirect> 元素使用它们的 from 属性匹配。如果没有对应的 path 或 from，那么它们将匹配任何当前访问地址。
 
 ### 参考资料
   - [React Router 4 API](https://reacttraining.com/react-router/)

