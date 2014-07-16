var fs = require('fs');
var path = require('path');

var demoDir = path.join(__dirname, '..', 'demo');
var CSI = require(path.join(demoDir, 'scripts', 'CSI'));
var IntervalStore = require(path.join(demoDir, 'scripts', 'IntervalStore'));

var input = fs.readFileSync(path.join(demoDir, 'data', 'input.txt'), 'utf8');
var data = CSI.parse(input);

var expectedOutput = fs.readFileSync(path.join(demoDir, 'data', 'output.txt'), 'utf8');

var i1 = new IntervalStore();
i1.load(data);

var lines = [];
for (var i = 0; i < 100; i++) {
  lines.push("Clicking at point " + i + ": " + JSON.stringify(i1.find(100 * i)));
}
var result = lines.join('\n');

if (result === expectedOutput) {
  console.log("Yay! Tests passed!");
} else {
  throw "Actual output didn't match expected!";
}
