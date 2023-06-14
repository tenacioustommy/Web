// 从global开始找到才会回收,闭包会有内存泄漏的问题
// 闭包,有点像c++中的类
function outer() {
  let a = 0;
  function fn() {
    a++;
    console.log(a);
  }
  return fn;
}
let fn = outer();
// i不会被回收
fn();
fn();
// 变量提升只提升到当前作用域最前面，但不赋值,只有var才行
// var num
console.log(num);
var num = 1;
// 函数也只提升声明
f1();
function f1() {
  console.log("hanshutisheng");
}
// 动态参数，argument假数组
function getSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
getSum(1, 2, 3);
// 剩余参数，arr是真数组
function getSum1(a, b, ...arr) {
  console.log(arr);
}
getSum1(1, 2, 3);
//展开运算符,求数组最大值，合并数组用
const arr = [1, 2, 3];
console.log(Math.max(...arr));
const arr2 = [4, 5, 6];
const a = [...arr, ...arr2];
a.forEach;
// 匿名函数
const f3 = (x) => {
  console.log(x);
};
// 一行代码可以省略return
const f4 = (x) => console.log(x);
const f5 = (x) => ({ x: x });
console.log(f5(2));
// 箭头函数有剩余参数，无arguements参数
const getsum = (...arr) => {
  let sum = 0;
};
// this参数
window.getSum();
const obj = {
  name: "ad",
  sayHi: function asd() {
    //指向obj
    console.log(this);
  },
};
obj.sayHi();
const f6 = () => {
  // 箭头函数this指向上一层对象
  console.log(this);
};
// 数组解构,可以有默认参数,也可以忽略
const [min = 0, , max = 0] = [1, 2, 3];
console.log(min);
// 交换变量
let c = 1;
let d = 2;
// 数组开头必须加分号
[d, c] = [c, d];
[1, 2, 3].map(function (item) {
  console.log(item);
});
