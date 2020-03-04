function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "no good";
  }

  const backwards = [];
  const totalItem = str.length - 1;
  for (let i = totalItem; i >= 0; i--) {
    backwards.push(str[i]);
  }
  //console.log(backwards);
  return backwards.join("");
}

function reverse2(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

const reverse3 = str => [...str].reverse().join("");

const mag = reverse3("dawid dawdi daiw");

console.log(mag);
