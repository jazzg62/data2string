module.exports = function (template, data) {
    let code = `let r=[];\n`,
        re = /<%([^%>]+)?%>/g,
        cursor = 0;
    let add = (line, isJavascript) => {
        if (isJavascript) code += isVariable(line) ? "r.push(" + parseVariable(line) + ");\n" : line + "\n";
        else code += "r.push(`" + line.replace(/"/g, '\\"') + "`);\n";
    };
    while ((match = re.exec(template))) {
        add(template.substring(cursor, match.index), false);
        add(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(template.substr(cursor, template.length - cursor));
    code += 'return r.join("");';
    return new Function(code).apply(data);
};

function isVariable(expression = "") {
    if (typeof expression !== "string") return false;
    if (expression[0] === "=") return true;
    return false;
}

function parseVariable(expression = "") {
    if (typeof expression !== "string") return "";
    if (expression[0] === "=") expression = expression.substring(1);
    if (expression[expression.length - 1] === ";") expression = expression.substring(0, expression.length - 1);
    return expression;
}
