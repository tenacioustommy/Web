// js是在浏览器上运行的脚本语言，一开始做校验
// 可以获取html一些东西，操控页面一些内容
// alert("hello hzh!")
// null 是 object类型的 ，undefined
// !!!虽然大部分情况不加分号可以，js会自动加分号，但还是建议加分号避免不必要的报错
var d = "10";
var a = "asd";
console.log(a + 10);
console.log(typeof d);
console.log(2 + 2);
console.log(parseInt(d) + 1);
d = 100;
// object
var wangfeng = {
  name: "asd",
  age: 18,
  wife: "sdf",
  chi: function () {
    console.log("eat");
    return 1;
  },
};
// 遍历
for (let key in wangfeng) {
  // 函数的话就是打印return值
  console.log(wangfeng[key]);
}
// list 独有的
// var arr = [11, 22, 33, 44];
// arr.forEach(function (item) {
//   console.log(item);
// });
// create a arr length=2
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 0;
// console.log(arr);
var $ = function (b) {
  console.log("hello" + b);
};
$(2);
// 只要是函数，就能加括号
(function (a, b) {
  console.log("zheyexing???" + a + b);
})(10, 20);

let c = (function () {
  var m = {
    name: "alex",
    age: "18",
    xijiao: function (a) {
      console.log(a + "xijaio");
    },
  };
  return m;
})();
console.log(c.name);
c.xijiao("asd");
//读写
document.write("<p>hello</p>");
// alert and prompt 跳过渲染直接执行
// prompt("what's your name");
// let better than var,eg:
// var greeting = "hi";
// if (1) {
//   var greeting = "hello";
// }
// 隐式声明var
// greeting='1'
// let只能声明一次
let greeting = "hi";
greeting = 1;
console.log(greeting);
// let uname = prompt("what's your name");
// document.write(uname);
// 模板字符串，方便拼接
document.write(`${greeting}`);
console.log(typeof +"123");
//匿名函数
let fn = function (x, y) {
  // console.log('i am function')
  console.log(x + y);
};
fn(1, 2);
// 立即执行函数
(function () {
  console.log("hello");
})();
(function () {
  console.log("hello");
})();
//输出10!! 在判断时用boolean看，返回的是原来的值
console.log(10 || 20);
Math.random();
let arr = ["red", "green", "blue"];
let random = Math.floor(Math.random() * arr.length);
console.log(random);
