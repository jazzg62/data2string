# data2string

javascript 模板引擎。

## 使用指南

基本示例

```javascript
const data2string = require("data2string");
let template = `
        <%for(let i in this){%>
            <div class="list">
                <span><%=this[i]%></span>
            </div>
        <%}%>
    `;
console.log(data2string(template, [1, 2, 3]));
/** 输出
    <div class="list">
        <span>1</span>
    </div>
    <div class="list">
        <span>2</span>
    </div>
    <div class="list">
        <span>3</span>
    </div>
*/
```

引入函数

```javascript
const data2string = require("data2string");
```

输出单个变量

```javascript
let template = `<%=this.name%>`;
console.log(data2string(template, { name: "hello world" }));
/** 输出 hello world */
```

if 表达式

```javascript
let template = `<%if(this.a==1){%>1<%}else{%>2<%}%>`;
console.log(data2string(template, { a: 1, b: 2 }));
/** 输出 1 */
```

for 表达式

```javascript
let template = `<%for(let i in this.list){%><%=this.list[i];%><%}%>`;
console.log(data2string(template, { list: [1, 2, 3] }));
/** 输出 123 */
```

## 问题反馈与建议

[提交 ISSUE](https://github.com/jazzg62/data2string/issues/new)
