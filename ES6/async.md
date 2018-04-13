# async函数

## async含义

> ES2017 标准引入了async函数，使得异步操作变得更加方便。简单的来说async就是Generator函数的语法糖

### async的优点

- 1、内置执行器(Generator需要co模块而async只需要一行)
- 2、更好的语义(async代替Generator中的*,await代替yield)
- 3、更广的适用性
> co模块约定，yield命令后面只能是Thunk函数或Promise对象，而async函数的await命令后面，可以是Promise对象和原始类型的值(数值，字符串和布尔值) await表示同步操作，但是如果还有异步跟随需要在增加await去等待
- 4、返回值是Promise

> async函数的返回值是Promise对象，这比Generator函数的返回值是Iterator对象方便很多。你可以用then方法指定下一步的操作。</br>
进一步说，async函数完全可以看做多个异步操作，包装成的Promise对象，而await命令就是内部then命令的语法糖