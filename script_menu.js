window.addEventListener("load", () => {
  // 메뉴목록(li)
  const liList = document.querySelectorAll(".gnb li ");

  function showFocus(_number) {
    console.log("전달된 값 ", _number);
    liList.forEach((html, 순서, c) => {
      if (_number === 순서) {
        console.log("빨간색", 순서);
      } else {
        console.log("검은색", 순서);
      }
    });
  }

  liList.forEach((a, b, c) => {
    a.addEventListener("mouseenter", () => {
      // 선택된 번호를 전달해서 꾸미기
      showFocus(b);
    });
  });
});
