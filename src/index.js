import "./another";

console.log('Hello Project.');

document.getElementById("my-button").addEventListener("click", function() {
  console.log("I'm clicked!");
  myFunction();
});

var myFunction = () => {
  console.log("my-function");
};