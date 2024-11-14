function add(a, b) {
  console.log(arguments);
  return a + b;
}
add(5, 4, 6, 7, 8);

const addA = (a, b, ...aaa) => {
  console.log(aaa);
  return a + b;
};
addA(100, 70, 5, 5, 5, 5, 5);
