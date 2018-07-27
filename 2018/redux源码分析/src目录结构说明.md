# Redux目录结构

## utils

utils文件夹用于存放公共的JS文件

### actionTypes.js

文件中产生随机数

```javascript
const randomString = () =>
    Math.random()
        .toString(36)
        .substring(7)
        .split('')
        .join('.')
```