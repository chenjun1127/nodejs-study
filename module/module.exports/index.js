var Hello = require('./hello');
Hello.add.say();

// var hello = new Hello('jone', '28', '10000')
// hello.say()

var circle = require('./circle.js');
console.log('半径为4圆的面积是：' + circle.area(4) + '\n' + '半径为4圆的周长是：' + circle.circleLength(4));