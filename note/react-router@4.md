# React Router 4 - WEB API
React Router 4 API 分为 WEB/Native/Core 三部分，以下是 WEB API

##### 要求

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

##### 如何评定结果：

1. 讲解自己的代码
2. 回答 react 相关基础问题

##### 参考资料：

1. React（第2版）: 引领未来的用户界面开发框架 https://book.douban.com/subject/26918475/ （1-9章）

#### ES6 写法
```js
import React, { Component } from 'react';

class List extends Component {

	constructor() {
		super();
		// state 要么是对象, 要么是 null
		this.state = {
			list: ['AngularJS', 'Webpack', 'React']
		};
	}

	render() {
	// li 元素需要添加 key, https://facebook.github.io/react/docs/lists-and-keys.html#keys
		return (
			<ul>
				{
					(this.state.list.map((item, index) => <li key={index}> {item} </li>))
				}
			</ul>
		);
	}
}

export default List;

```

#### props 属性

props 就是传入组件的属性, 可以是任意类型

可以通过 PropTypes 指定传入组件的属性类型

https://facebook.github.io/react/docs/typechecking-with-proptypes.html

```js
import React, { Component, PropTypes } from 'react';

const propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	skills: PropTypes.array
};

class Profile extends Component {
	constructor() {
		super();
		this.state = null;
	}

	render() {
		return (
			<div className="profile">
				<h3>Fucking Cool Name: {this.props.name} </h3>
				<h3>Fucking Cool Age: {this.props.age} </h3>
				<h3>Fucking Cool Skills: {this.props.skills ? this.props.skills.join(',') : 'No Skills'} </h3>
			</div>
		);
	}
}

Profile.propTypes = propTypes;

export default Profile;

```

#### state 状态

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
