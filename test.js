var parse = require('parse-svg-path')
var translate = require('translate-svg-path')
var serialize = require('serialize-svg-path')
 
var path = parse('M10 10 L15 15')
var x = translate(path, 20)
var xy = translate(path, 20, 10)
 
console.log(xy
)