const Reverse = (text) => {
  let ans = "";
  if (text || (typeof text === "string" && text.length > 0)) {
    for (let i = text.length - 1; i > -1; i--) {
      ans += text[i];
    }
    return ans;
  } else {
    console.log("Please Put some String");
    return ans;
  }
};

const Reverse2 = (text) => {
  return text.split("").reverse().join("");
};
const a = Reverse2("Hello Wat");
console.log(a);
