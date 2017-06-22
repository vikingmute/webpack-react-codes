以下为本书 2016 年 10 月第 1 版的勘误列表，欢迎提交 PR 进行补充，帮助其他读者。

### [1.1.1 语言特性] const、let 关键字

第一段示例代码：单引号错误，另 `console.log` 的参数应该是 `a`。勘正后为：

```javascript
if (true) {
  let a = 'name';
}
console.log(a);
// ReferenceError: a is not defined
```


### [1.1.1 语言特性] 函数 this在箭头函数中

第一段代码示例：结果错误 这里的 this.age 在setTimeout中应该是 undefined。

```javascript
let age = 2;
let kitty = {
  age: 1,
  grow: function() {
    setTimeout(function() {
      console.log(++this.age);
    }, 100);
  }
};

kitty.grow();
// 3

```
应修改为 var age ＝2;
因为：
`At the top level of programs and functions, let, unlike var, does not create a property on the global object.`
但是这段代码在 babel 编译后可以正常运行，所以笔者出现了这个错误。原因是 Babel 编译后并没有对这个特性没有特殊的处理。

附代码 Babel 编译后的结果：

```javascript
"use strict";

var age = 2;
var kitty = {
  age: 1,
  grow: function grow() {
    setTimeout(function () {
      console.log(++this.age);
    }, 100);
  }
};

kitty.grow();
```
### [1.1.1 语言特性] 模板字符串

代码示例中的变量名 `name` 错误书写成 `viking`，即，

```
var a = 'My name is ' + viking + '!';
```

应为

```
var a = 'My name is ' + name + '!';
```

### [3.4.1 props属性] 代码段export default Class 中的Class应为 class关键字


### [4.2.3 配置测试环境]

`来简单介绍一下这个命令， mocha也可以使用编译器编译 javascript 代码，这里使用 babel 这个编译器，因为现在代码的格式都是ES6的，而由于 Webpack 允许直接在代码中 import 样式文件，例如 import './style.scss' 这种格式的代码，如果直接用 mocha 来运行这类的代码，会直接报错，因为 babel 无法解析这类 CSS 代码，所以需要一个插件来忽略掉这类型的代码。这插件就是 ignore-styles 。简单来说运行 mocha 的时候可以接受这类型的参数：--compilers 指的是指定文件格式的预编译器，而 --require 指的是运行测试之前需要引入的一些辅助插件。`

在该段后面应该添加：

**特别注意，在windows环境下该命令应该为："test": "set NODE_ENV=production && mocha --compilers js:babel-core/register --require ignore-styles"**


### [3.3.3 配置 webpack]

`在项目根目录新建一个 *webpack.config.js* 的文件。` 应该修改为： **在项目根目录新建app文件夹，同时再新建一个 *webpack.config.js* 的文件。**

代码中 `app: path.resolve(APP_PATH, 'index.jsx')` 应该修改为： **app: path.resolve(APP_PATH, 'app.jsx')**

`复习一下上一章的知识，把 app 文件夹中的 index.jsx 作为入口，` 应该修改为： **复习一下上一章的知识，把 app 文件夹中的 app.jsx 作为入口，**

### [6.2.3 使用 middleware]

`2. redux-promise-middleware` 部分，第二段示例代码，首行注释中的文件位置 `chapter5/part2/app/reducers/entries/list.js`，应该修改为： **`chapter6/part2/app/reducers/entries/list.js`**
