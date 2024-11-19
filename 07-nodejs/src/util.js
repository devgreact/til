export const say = () => {
  console.log("안녕하세요");
};

// hi를 변수로 먼저 선언하고 default로 export하거나, 이름 없는 함수로 export default를 사용해야 합니다.
const hi = () => {
  console.log("방가워요.");
};
export default hi;

export const smile = () => {
  console.log("웃어요^^.");
};

export const yok = () => {
  console.log("화나요.");
};
