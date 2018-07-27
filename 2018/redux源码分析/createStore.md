# createStore

    作用是创建一个Store层用来保存state状态树

## 引入的依赖

```javascript
    import $$observable from 'symbol-observable'
    import ActionTypes from './utils/actionTypes'  //里面保存着随机生成的 InitAction信息和ReplaceAction信息，这两个用于redux自身的初始化和state替换的Action
    import isPlainObject from './utils/isPlainObject' //用于检测对象的原型是不是Object
```

## createStore接收的参数

    @param1 reducer
    reducer的作用是处理action并返回新的state的纯函数
    @param2 preloadedState
    这个顾名思义就是设置state的初始状态，默认值
    @param3 enhancer
    接收applyMiddleware

    @return 返回值是如下的对象，对象中有一些方法
    {
        dispatch,  //派发action
        subscribe, //订阅
        getState,  //获取当前状态树的状态
        replaceReducer, //更改reducer当前状态
        [$$observable]: observable //观察者
    }