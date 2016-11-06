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