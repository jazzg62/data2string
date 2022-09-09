const fs = require("fs");
const template = require("..");

function parse(text = "") {
    let res = [];
    let arr = text.split("\n").map((val) => val.split(" "));
    for (let i in arr) {
        if (arr[i][0] == "") continue;
        res.push({
            name: arr[i][0].replace(/`/g, ""),
            comment: arr[i][arr[i].indexOf("COMMENT") + 1].replace(/`|'|,/g, ""),
        });
    }
    return res;
}

function transTemplate(tmpl = "", data = []) {
    return template(tmpl, data);
}

let text = fs.readFileSync("example/example.txt").toString();
let data = parse(text);

// ' '.repeat(2000000).split('').forEach(val=>data.push(data[0]))
let start = +new Date();
let output = transTemplate(`
    <%for(let i in data){%>
        <dl>
            <dt><%=data[i]['comment']%></dt>
            <dd>
                <input type="text" value="" name="<%=data[i]['name']%>" id="<%=data[i]['name']%>" class="s-input-txt">
            </dd>
        </dl>
    <%}%>
`,data);

console.log('time:', new Date()-start);
console.log(output);
