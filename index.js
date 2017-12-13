var fs = require('fs');
var parse = require('xml-parser');
var xml = fs.readFileSync('test.xml', 'utf8');

var obj = parse(xml);

// console.log(obj);
console.log(obj.root.children[0].content);