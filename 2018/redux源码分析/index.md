# index.js顾名思义就是redux的入口文件

## 引入依赖

```javascript
    import createStore from './createStore'
    import combineReducers from './combineReducers'
    import bindActionCreators from './bindActionCreators'
    import applyMiddleware from './applyMiddleware'
    import compose from './compose'
    import warning from './utils/warning'
    import __DO_NOT_USE__ActionTypes from './utils/actionTypes'
```

## 暴露的api

### createStore

    用于创建store层

### combineReducers

    用于将多个reducer处理模块整合成一个reducer

### bindActionCreator

    用于将Action 与View 绑定避免复杂操作

### applyMiddleware

    用于向store中添加关联的中间件

### compose

    将数组中的函数嵌套执行

### __DO_NOT_USE__ActionTypes

    redux本身自带的ActionTypes