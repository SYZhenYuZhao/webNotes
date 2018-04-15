# Promise

## Promise的含义

> Promise是异步编程的一种解决方案，比传统的解决方案——回调函数和时间,更强大且合理，在ES6中被统一规范，由原生提供了Promise对象。(通俗的说Promise是一个异步监听器，它会在异步完成的时候，帮助你做一些事情，这里面需要处理的异步，通常是因为异步的结果，会影响到之后的逻辑)

### Promise对象有两个特点

- 1、对象状态不受到外界影响

> 这里必须先说下Promise的三个状态，pending(正在进行)、fulfilled(已成功)和rejected(已失败)。只有异步操作的结果，可以决定当前是哪一种状态，其他任何操作无法改变这个状态(只有reslove和reject可以改变)。这也是说状态不受外界影响的原因

- 2、一旦状态改变，就不会再变。(任何时候都可以得到这个结果)

> 就是说一但有pending状态变成完成或者未完成的状态，状态就不会在发生第二次改变——"状态凝固"</br>
通俗的说就是，原本的判定条件改变了，也不会影响到状态已经改变的Promise对象

### Promise的缺点

- 1、Promise一旦新建就会立即执行，无法中途停止
- 2、Promise如果Promise不设置回调函数，Promise内部会抛出错误，但是不会反应到外部。
- 3、当Promise出于pending状态时，你无法判断异步执行到哪一步了。即无法判断异步是刚开始执行，还是将要执行玩了。(如果执行失败，无法判断失败的原因具体是什么)

## Promise的基本用法

- Promise是一个构造函数，能接受一个函数作为参数，该函数的两个参数分别是 resolved和rejected(这两个函数有JavaScript引擎提供，不用自己部署)
- resolve函数的作用是，将Promise对象的状态从"未完成"变为"成功",在异步执行结束后，通过将**异步结果**作为参数的形式传递出去
- reject函数的作用是，将Promise对象的状态从"未完成"变为"失败"，在异步操作失败是调用，并将**异步操作报出的错误**作为参数的形式传递出去。
- then方法有两个参数，分别是resolved和rejected的回调函数(rejected的回调函数不是必传参数)，在then方法中我们可以对异步的结果进行一些处理。

示例代码
```javascript
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done'); //setTimeout 第二个参数之后的所有参数，会被当做第一个函数的参数传入到第一个函数中
  });
}

timeout(100).then((value) => {
  console.log(value);
});
```