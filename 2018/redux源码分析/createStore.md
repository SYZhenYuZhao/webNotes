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
    中间件，这个参数我们在applyMiddleware中在进行详细介绍

    @return 返回值是如下的对象，对象中有一些方法
    {
        dispatch,  //派发action
        subscribe, //订阅
        getState,  //获取当前状态树的状态
        replaceReducer, //更改reducer当前状态
        [$$observable]: observable //观察者
    }
## getState
    getState是获取当前状态快照的方法，其代码原理很简单，
    在getState中存在一个判断 ，判断当前 reducer是否正在派发过程中，如果正在派发中就抛出错误，如果没有派发直接return变量currentState的值，这个currentState被我们称作当前状态的快照。
    快照的意思是这个值仅仅只能表示当前时刻State的状态，不并能保值之前和之后也是这样。
## subscribe
    订阅函数
    这个订阅函数接收一个监听函数（监听函数意味着，在State状态改变时，这个监听函数会被触发），
    订阅函数中存在如下限定条件:
    1、接受的listen必须是一个函数，
    2、reducer不能处在派发状态
    如果通过了如下的限定条件，我们将会在监听的队列中添加这个监听函数（队列其实就是一个数组）
    返回一个取消监听的函数，
    取消订阅的函数有如下限定条件，
    1、监听函数必须是在订阅队列中的
    2、reducer不能出在派发状态
    如果通过了如下的限定条件，我们将在监听队列中剔除这个监听函数
    取消订阅时，直接执行取消订阅函数就可以了，应为监听函数已经被保存在内存中了。
## dispatch
    dispacth是我们改变store状态的唯一方法，因为调用reducer的函数被保存在dispatch中。
    dispatch中存在如下限定条件
    1、action是object的直接实例
    2、action.type必须存在
    3、reducer不能处在派发过程中
    通过了如下判定条件之后，我们先将isDispatching置为true（这里就是我们常说的reducer处在的派发状态），然后我们执行reducer，将currentState，action传入到reducer中，在状态改变后我们将isDispatching置为false。（这里我们用到了try...finally相当于一个promise函数），然后我们在将监听队列中的监听函数执行一遍。
    最后我们返回一个action
## replaceReducer
    这个api主要是用于热替换reducer的，在大多数开发中这个api是不被开发者所使用到的，我也是在阅读redux源码是才了解这个api的，这个api非常简单，接受一个nextReducer的参数
    replaceReducer的限定条件如下:
    1、nextReducer必须是一个函数
    通过了如下限定条件,我们将当前reduer热替换为nextReducer
    主要方法是通多调用dispatch传对应的系统内置action来替换reducer
## observable
    暂时没太理解未来会加上


最后我们在函数执行的时候会用dispacth传一个初始化的action值，来进行reducer初始化