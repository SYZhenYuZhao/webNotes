# ES6 Set&&Map（ES6提出的两种数据结构）

## Set特点

- 1、Set本身是一个构造函数，用来生成Set数据结构
- 2、Set提供一个类似数组的数据结构，其成员都是唯一的,没有重复的值 (浅层的说就是一个数组去重的方法)。  ！！！但是返回的数据类型并不是数组类型，也不带数组类型的方法

## Set实例的属性和方法

### Set的属性

- 1、Set.prototype.constructor : 构造函数,默认就是Set函数
- 2、Set.prototype.size : 返回set实例的成员总数，(与数组方法的.length相似)

### Set的实例方法（Constructor）

#### Set实例的操作方法

- 1、add(Value) : 添加某个值，返回Set结构本身(与数组方法的.push相似)
- 2、delete(Value) : 删除某个值，返回一个布尔值 用于标志是否删除成功(与对象方法的 delete相似)
- 3、has(Value) : 用于检测Set实例中是否含有某个值，返回一个布尔值 用于标志这个值是否存在
- 4、clear() : 清除所有成员 没有返回值

#### Set实例的遍历方法

- 1、keys() : 返回键名的遍历器
- 2、values() : 返回键值得遍历器
- 3、entries() : 返回键值对的遍历器
- 4、forEach() : 使用回调函数遍历每个成员

> 这里遍历方法的前三种都是Object在ES6新增的对象方法，因为set没有键名，或者说键值键名是一样的，那么Keys()和values()这两个遍历的方法，返回的内容是完全一样的

## Set在开发环境中的一些使用方法

> Set在开发环境中，不仅仅局限于对数组的去重处理，通常是和数组方法连用，可以很容易实现对两个数组取交集、并集、差集。

### 如何将Set类型转换成数组类型

- 1、使用扩展运算符( ... ) 扩展运算符本身是有for...of..实现的

```javascript
 let arr = [3, 5, 2, 2, 5, 5];
 let unique = [...new Set(arr)];
 // [3, 5, 2]

```

- 2、使用Array.form方法 (将伪数组转换成数组的方法)

### 并集(Union) 、交集（Intersect）和 差集(Difference)

```javascript
    let a = new Set([1, 2, 3]);
    let b = new Set([4, 3, 2]);

    // 并集
    let union = new Set([...a, ...b]);
    // Set {1, 2, 3, 4}

    // 交集 A中过滤出B中拥有的数据+去重
    let intersect = new Set([...a].filter(x => b.has(x)));
    // set {2, 3}

    // 差集 A中过滤出B中没有有的数据+去重
    let difference = new Set([...a].filter(x => !b.has(x)));
    // Set {1}
```