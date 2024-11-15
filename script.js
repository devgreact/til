function run(함수) {
  함수();
}

const say = () => {
  console.log("say");
};
const cry = () => {
  console.log("ㅠㅠ");
};

run(function () {
  console.log("say");
});

run(function () {
  console.log("ㅠㅠ");
});

window.addEventListener("", function () {});
