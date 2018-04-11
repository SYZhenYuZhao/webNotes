# ES6 Set&&Map（ES6提出的两种数据结构）

## Set

### Set特点

- 1、Set本身是一个构造函数，用来生成Set数据结构
- 2、Set提供一个类似数组的数据结构，其成员都是唯一的,没有重复的值 (浅层的说就是一个数组去重的方法)。  ！！！但是返回的数据类型并不是数组类型，也不带数组类型的方法

### Set实例的属性和方法

#### Set的属性

- 1、Set.prototype.constructor : 构造函数,默认就是Set函数
- 2、Set.prototype.size : 返回set实例的成员总数，(与数组方法的.length相似)

#### Set的实例方法（Constructor）

##### Set实例的操作方法

- 1、add(Value) : 添加某个值，返回Set结构本身(与数组方法的.push相似)
- 2、delete(Value) : 删除某个值，返回一个布尔值 用于标志是否删除成功(与对象方法的 delete相似)
- 3、has(Value) : 用于检测Set实例中是否含有某个值，返回一个布尔值 用于标志这个值是否存在
- 4、clear() : 清除所有成员 没有返回值

##### Set实例的遍历方法

- 1、keys() : 返回键名的遍历器
- 2、values() : 返回键值得遍历器
- 3、entries() : 返回键值对的遍历器
- 4、forEach() : 使用回调函数遍历每个成员

> 这里遍历方法的前三种都是Object在ES6新增的对象方法，因为set没有键名，或者说键值键名是一样的，那么Keys()和values()这两个遍历的方法，返回的内容是完全一样的

### Set在开发环境中的一些使用方法

> Set在开发环境中，不仅仅局限于对数组的去重处理，通常是和数组方法连用，可以很容易实现对两个数组取交集、并集、差集。

#### 如何将Set类型转换成数组类型

- 1、使用扩展运算符( ... ) 扩展运算符本身是有for...of..实现的

```javascript
 let arr = [3, 5, 2, 2, 5, 5];
 let unique = [...new Set(arr)];
 // [3, 5, 2]

```

- 2、使用Array.form方法 (将伪数组转换成数组的方法)

#### 并集(Union) 、交集（Intersect）和 差集(Difference)

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

## WeakSet

### WeakSet特点

- 1、WeakSet与Set结构类似，也是不重复的集合.
- 2、WeakSet成员只能是对象
- 3、WeakSet中对对象的引用是弱引用，即当构造函数外部不在引用这个对象时，就会触发垃圾回收机制，随着垃圾回收机制的触发，WeakSet中的引用也自动消失了。

## Map

### Map特点

- 1、构造函数，用于生成Map数据结构
- 2、本质上是一个类似对象的数据结构，Map的出现主要是为了解决传统上 (对象只能接受字符串调用键名的这种行为)，而Map数据结构中不仅仅可以使用字符串调用键名还是支持各种数据类型(包括对象)**通俗的说就是在ES6中键名也可以使用变量代替了，但是ES6之前键名只能通过字符串来调用，而ES6之前想用变量调用键名赋值只能转换成JSON字符串，然后使用变量赋值之在将JSON字符串转回对象**

### Map接受一组参数的实现方法

> 例 : const map = new Map([['name', '张三'],['title', 'Author']])

```javascript
const items = [
  ['name', '张三'],
  ['title', 'Author']
];

const map = new Map();

items.forEach(
  ([key, value]) => map.set(key, value)
);
```

### Map实例的属性和操作方法

#### Map属性

- size 返回Map结构的成员总数

#### Map操作方法

- 1、set(ket,value) set方法设置键名key对应的键值为value,若key存在就更新，若不存在就新建一个key并赋值,返回一个新的Map对象，支持链式调用
- 2、get(key) 通过Key读取对应的value,若不存在返回Undefined
- 3、has(key) 检测是否拥有这个键，返回一个布尔值，标志某个键是否存在
- 4、delete(key) 删除某个键名，返回布尔值标志删除是否成功
- 5、clear() 清空所有成员，没有返回值

#### Map遍历方法

- 1、keys() : 返回键名的遍历器
- 2、values() : 返回键值得遍历器
- 3、entries() : 返回键值对的遍历器
- 4、forEach() : 使用回调函数遍历每个成员

> 这里遍历方法的前三种都是Object在ES6新增的对象方法, **!!!Map遍历的顺序就是插入的顺序**

### Map通常在项目中的作用

- 1、Map在项目中通常先转换成数组，然后使用数组的filter等方法实现过滤
- 2、Map使用forEach方法进行遍历
- 3、Map可以使用对象为键名，这样在更新和迭代的过程中，就不会出现相同键名被覆盖的情况(set和get的存取是针对地址的)**只要两个值完全相等（===）就会被Map视为是同一个键值对，但是在Map中NAN被看做事一个值，0、-0、+0是同一个值**

```javascript
let map = new Map();

map.set(-0, 123);
map.get(+0) // 123

map.set(true, 1);
map.set('true', 2);
map.get(true) // 1

map.set(undefined, 3);
map.set(null, 4);
map.get(undefined) // 3

map.set(NaN, 123);
map.get(NaN) // 123
```

### Map的数据类型转换

- 1、Map 转为 数组 (使用扩展运算符)

```javascript
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
[...myMap]
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
```

- 2、数组 转为 Map (将数组传入Map构造函数，就可以转为Map)

```javascript
new Map([
  [true, 7],
  [{foo: 3}, ['abc']]
])
// Map {
//   true => 7,
//   Object {foo: 3} => ['abc']
// }
```

- 3、Map 转为对象 (如果所有 Map 的键都是字符串，它可以无损地转换为对象,如果有非字符串的键名，那么这个键名会被转成字符串，再作为对象的键名。)

```javascript
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map()
  .set('yes', true)
  .set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }
```

- 4、对象 转为 Map

```javascript
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

objToStrMap({yes: true, no: false})
// Map {"yes" => true, "no" => false}
```

- 5、Map 转为 JSON

- 5.1. 当Map的键名为字符串时，可以转换为对象JSON

- 5.2. 当Map的键名不都为字符串时，可以转换为数组JSON

- 6、JSON 转为 Map

- 6.1. JSON转为Map,正常情况下，所有键名都是字符串

- 6.2.有一种特殊情况，整个 JSON 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。这时，它可以一一对应地转为 Map。这往往是 Map 转为数组 JSON 的逆操作。

#### 数据类型转换的小总结

> 总的来说，在进行类型转换的时候，唯一遇到的问题，就是键值类型不是字符串的问题，所以才会出现两种解决办法，当键名全是字符串时，我们可以很开心的进行正常转换，但是如果不完全都是字符串的键名，我们在转换JSON的时候需要转换成数组JSON，转回来的时候也需要逆操作
