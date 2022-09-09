const data2string = require("..");
const { describe, expect, test } = require("@jest/globals");

describe("data2string", () => {
    test("string", () => {
        let data = { name: "hello world" };
        expect(data2string(`<%=this.name%>`, data)).toBe("hello world");
    });

    test("number", () => {
        let data = { num: 1111 };
        expect(data2string(`<%=this.num%>`, data)).toBe("1111");
    });

    test("boolean", () => {
        let data = { bool: false };
        expect(data2string(`<%=this.bool%>`, data)).toBe("false");
    });

    test("addition expression", () => {
        let data = { a: 1, b: 2 };
        expect(data2string(`<%=this.a + this.b%>`, data)).toBe("3");
    });

    test("subtraction expression", () => {
        let data = { a: 1, b: 2 };
        expect(data2string(`<%=this.a - this.b%>`, data)).toBe("-1");
    });

    test("multiplication expression", () => {
        let data = { a: 1, b: 2 };
        expect(data2string(`<%=this.a * this.b%>`, data)).toBe("2");
    });

    test("division expression", () => {
        let data = { a: 1, b: 2 };
        expect(data2string(`<%=this.a / this.b%>`, data)).toBe("0.5");
    });

    test("if expression", () => {
        let data = { a: 1, b: 2 };
        expect(data2string(`<%if(this.a==1){%>1<%}else{%>2<%}%>`, data)).toBe("1");
    });

    test("for expression", () => {
        let data = { list: [1, 2, 3] };
        expect(data2string(`<%for(let i in this.list){%><%=this.list[i]%><%}%>`, data)).toBe("123");
    });

    test("while expression", () => {
        let data = { list: [1, 2, 3] };
        expect(data2string(`<%while(this.list.length){%><%=this.list.shift();%><%}%>`, data)).toBe("123");
    });
});
