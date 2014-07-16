var path = require('path');
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(path.join(__dirname))).listen(8080);
