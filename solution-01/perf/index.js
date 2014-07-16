var fs = require('fs');
var path = require('path');
var Benchmark = require('benchmark');

var demoDir = path.join(__dirname, '..', 'demo');
var CSI = require(path.join(demoDir, 'scripts', 'CSI'));
var IntervalStore = require(path.join(demoDir, 'scripts', 'IntervalStore'));

var csi = fs.readFileSync(path.join(demoDir, 'data', 'input.txt'), 'utf8');
var data = CSI.parse(csi);
console.log('Data set size: ' + data.length + ' rows');

var i1 = new IntervalStore();
i1.load(data);

var i2 = new IntervalStore();
i2.load(data);

var suite = new Benchmark.Suite;

suite.add('IntervalStore#load (+ ctor)', function() {
  var i = new IntervalStore();
  i.load(data);
})

suite.add('IntervalStore#add', function() {
  i1.add(123, 123, 123, 123);
})

suite.add('IntervalStore#find', function() {
  i2.find(123);
})

.on('cycle', function(event) {
  console.log(String(event.target));
})

.run();
