// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   alert("hello");
// });
const box1 = document.querySelector(".box1");
const box = document.querySelector(".box");
box1.addEventListener("click", () => {
  box.style.display = "none";
});
box.addEventListener("mouseenter", () => {
  console.log("enter");
});
box.addEventListener("mouseleave", () => {
  console.log("leave");
});
