/******By Reverse******/
let S = "abba";
let array = S.split("");
let revArray = array.reverse();
console.log(revArray);
let revString = revArray.join("");
if (S == revString) {
  console.log(1);
} else {
  console.log(0);
}
