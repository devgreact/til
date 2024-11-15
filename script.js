console.log("글로벌 this : ", this);

const go = () => {
  console.log("화살표 this : ", this);
};

function hi() {
  console.log("일반함수 this : ", this);
}

go();
hi();
