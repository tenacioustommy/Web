// const问题,复杂数据类型放heap里,简单类型放stack里,地址不该就不错
// 只能追加,优先用const
const arr = ["red", "pink"];
arr.push("green");
console.log(arr);
// DOM页面文档对象模型 and BOM浏览器对象模型
// dom对象浏览器自动生成
//添加类名
const div = document.querySelector("div");
div.classList.add("box");
// 有就加，没有就去
// div.classList.toggle("box");
// 匹配的第一个元素
const box = document.querySelector(".box");
// 改变文本
box.textContent = "change";
// 获取多个,得到伪数组
const nav = document.querySelectorAll(".nav li");
for (let i = 0; i < nav.length; i++) {
  console.log(nav[i]);
}
box.innerHTML = "<strong>change</strong>";
// 识别标签
console.log(box.innerHTML);
function getrandom(N, M) {
  return Math.floor(Math.random() * (M - N)) + N;
}
const img = document.querySelector("img");
const random = getrandom(1, 3);
img.src = `img/${random}.jpg`;
img.title = "random jpg";
box.style.backgroundColor = "red";
document.body.style.backgroundImage = "";
// 复选框
const input = document.querySelector("input");
input.checked = true;
const button = document.querySelector("button");
button.disabled = true;
// 自定义属性
const one = document.querySelector("div");
console.log(one.dataset.id);
// 间歇函数,第一次要隔时间\
let i = 0;
let num = setInterval(function () {
  i++;
  document.write(i);
}, 100);
clearInterval(num);
