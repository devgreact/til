# JavaScript 기초

## 1. 기초 상식

- HTML5

```
본인의 생각이 중요합니다. 설명을 직접 작성해 보시길 추천
- 웹브라우저에 데이터를 보여주는 형식을 지정한 문법구조
```

- CSS3

```
본인의 생각이 중요합니다. 설명을 직접 작성해 보시길 추천
- 데이터를 잘 보이기 위해서 꾸며주는 용도의 문법
```

- JavaScript

```
본인의 생각이 중요합니다. 설명을 직접 작성해 보시길 추천

- 1. 레이아웃 변경(CSS) : 인터렉티브(사용자 행동에 제어) 결과로 html, css 변경
- css 제어를 위한 추가 설명 : css 파일(SCSS 방식, moudul 방식), emotion, tailwind, bootstrap...

- 2. HTML 변경 : 데이터를 호출하고 그 결과를 처리할 수 있다.
- html 제어를 위한 추가 설명 : innerHtml ===> 리액트에서는 JSX 로 구현

- 3. 별첨 :  html 제어하지 하는 것이 아니고 , Server, DB 를 다루는 javaScript 를 Node.js 라고 한다.

```

## 2. 웹브라우저용 javaScript

- 웹브라우저에 js 가 실행이 되는 것 테스트 하기(F12 개발자 도구 Console 창 활요)
- 여러 줄 테스트 시 Shift + Enter 를 활용

```
console.log("안녕")
```

## 3. html 문서에 js 활용하기

- index.html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
  </head>
  <body></body>
</html>
```

- 태그로 js 배치하기

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
    <!-- 추가 : 자바스크립트 코드 -->
    <script></script>
  </head>
  <body></body>
</html>
```

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
    <!-- 추가 : 자바스크립트 코드 -->
    <script>
      // 추가 :  console.log 확인 하기
      console.log("안녕");
    </script>
  </head>
  <body></body>
</html>
```

## 4. html 과 js 분리하기

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
    <!-- 추가 : 자바스크립트 코드 -->
    <script src="script.js"></script>
  </head>
  <body></body>
</html>
```

```js
console.log("안녕");
```

## 5. 변수 알기

### 5.1. 변수(Variable)란?

- 웹브라우저에 값, 즉 데이터를 임시로 보관한다.

### 5.2. 변수 만드는 법

- 1단계

```
1. 무엇을 보관할 것인가?
: 사용자 정보를 보관하고 싶습니다. 웹브라우저에
- 이름
- 주민번호
- 전화번호
- 주소
- 이메일
- 아이디
- 비밀번호
- 개인정보동의
```

- 2단계

```
1. 각 항목에 보관할 내용(값, 데이터)에 대한 고민
- 이름 : 글자(몇자까지 허용할까?)
- 주민번호 : 글자(13자리)
- 전화번호 : 글자(11자리)
- 주소 : 글자(알수없다)
- 이메일: 글자
- 아이디: 글자
- 비밀번호: 글자
- 개인정보동의: 동의 또는 비동의

```

- 3단계

```js
1. 변수 선언
2. 값의 (=) 할당/대입/Assign

var 이름;
이름 = "홍길동";

var 주민번호;
주민번호 = "123456789";

var 전화번호;
전화번호 = "0000000000";

var 주소;
주소 = "대구";

var 이메일;
이메일 = "a@a.net";

var 아이디;
아이디 = "aa";
var 비밀번호;
비밀번호 = "123456";

var 개인정보동의;
개인정보동의 = false;

```

- 4단계
  : const 로 부터 let 을 고민한다.

```js
/**
 * 최신 문법 즉 ECMA Script로 적용하기
 * var 를 사용하면 협업이 어렵다.
 * 여러번 중복으로 동일한 이름으로 선언해도 오류가 없다.
 * 이게 문제이다.
 * 그래서 ECMA 에서는 let 또는 const 를 사용한다.
 * let 은 한번만 만들수 있고, 값 즉, 데이터는 여러번 변경가능
 *
 * const 는 unique 한 값이다. 유일한 constant 다.
 * let 처럼 한번만 만들수 있다.
 * let 과는 다르게 데이터는 여러번 변경 불가능
 */
let 이름;
이름 = "홍길동";

const 주민번호 = "123456789";

let 전화번호;
전화번호 = "0000000000";

let 주소;
주소 = "대구";

let 이메일;
이메일 = "a@a.net";

let 아이디;
아이디 = "aa";

let 비밀번호;
비밀번호 = "123456";

let 개인정보동의;
개인정보동의 = false;

//let 전화번호;
전화번호 = 1234560;
```

### 5.3. 변수명 잘 만들기(명명법, 네이밍 규칙(컨벤션) 적용하기 )

- "명사 & 영어"로 지어주세요.

```
1. 특수기호 중 변수명으로 가능한 글자
   const _ = "hello";
   const $ = "안녕";

2. 숫자로 시작하는 변수명 불가능

   const 3_name; (불가능)
   const _3name; (가능)

3. js 에서 사용하는 단어는 변수명 활용 불가(키워드)

   const if = "안녕"; (불가능)
   const for = "안녕"; (불가능)
   const var = "안녕"; (불가능)

```

- 카멜케이스(Camel Case) 명명법

```
 변수명이 소문자로 무조건 시작해야 합니다.
 연결되는 새로운 단어의 시작은 대문자로 시작합니다.
 가장 일반적으로 프로그래머들이 활용해요.

 const name;
 const nickname; (카멜 케이스 아님)
 const nickName; (카멜 케이스)
 const userAddressName; (카멜 케이스)
```

- 스네이크(Snake Case) 명명법

```
 변수이름을 모두 소문자로 작성하고 단어마다 _를 작성해줌
 const nick_name;
 const user_address_name;
```

- 케밥(Kebab Case) 명명법

```
  변수이름으로 사용할 수 없습니다.
  js에서는 - 를 뺄셈, 즉 연산자로 생각합니다.

  const nick-name;  ( - 연산으로 생각, 오류 )

  예외적으로 Next.js 의 파일명에 파일이름 컨벤션에 주로 활용합니다.

```

- 파스칼(Pascal Case) 명명법

```
  변수명의 첫글자를 대문자로 작성하는 것만 카멜케이스와 다릅니다.

  const Name;
  const NickName;

  참고적으로 파스칼 케이스는 용도가 관례상(문법과 상관없이) 지정된다.
  프로그래머들 사이에 암묵적 관례를 지니고 있다.

  첫글자가 대문자이면

   - 객체명 아닐까?
   - 객체를 만들어주는 객체 생성자 함수 이름이 아닐까?
   - 객체를 생성하는 클래스 함수가 아닐까?

  라고 유추를 자연스럽게 합니다.

```

- 상수 명명법

```
 이런 규칙은 없습니다.
 암묵적으로 상수를 만들때는 대문자만 씁니다.

 const PI = 3.14;
 const APP_NAME = "TODO";

```

- 활용예

```js
/**
 * 최신 문법 즉 ECMA Script로 적용하기
 * var 를 사용하면 협업이 어렵다.
 * 여러번 중복으로 동일한 이름으로 선언해도 오류가 없다.
 * 이게 문제이다.
 * 그래서 ECMA 에서는 let 또는 const 를 사용한다.
 * let 은 한번만 만들수 있고, 값 즉, 데이터는 여러번 변경가능
 *
 * const 는 unique 한 값이다. 유일한 constant 다.
 * let 처럼 한번만 만들수 있다.
 * let 과는 다르게 데이터는 여러번 변경 불가능
 */
let name;
name = "홍길동";

const juminNumber = "123456789";

let telNumber;
telNumber = "0000000000";

let address;
address = "대구";

let email;
email = "a@a.net";

let id;
id = "aa";

let password;
password = "123456";

let privacyPolice;
privacyPolice = false;

//let 전화번호;
telNumber = 1234560;

const MEMBER_SIGN_UP = "회원가입정보입력";
```

## 6. 데이터 타입 알기

- 변수에 담을 수 있는 값(데이터) 는 정해져 있어요.

```js
const myAge = 값;
```

- 위의 코드를 읽어보겠습니다.
- 할당/대입 기호(=)를 기준으로 오른쪽 부터

```
 숫자 값이 myAge 에 담긴다.
 글자 값이 myAge 에 할당된다.
```

### 6.1. 값으로 즉, 데이터로 인정받는 큰 2가지 분류

- 위 문장을 조금 더 정확하게 표현하면 Data Type 이라 함.
- `원시(Primitive) 타입`, `참조(Reference) 타입` 2가지 종류가 있습니다.

### 6.2. 원시 타입 (Primitive Data Type)

- 기본 데이터 값의 종류
- 1. string : 글자
- 2. number : 숫자
- 3. boolean : 논리적으로 true/false
- 4. undefined

```
 : 변수 만들면 기본적으로 셋팅 되는 값
 : 값으로 아무것도 안작성했어요. 하면 기본적으로 undefined 셋팅
```

- 5. null

```
개발자가 의도적으로 값이 없음을 표현하는 경우.
```

- 6. symbol

```
 최신 ECMA Script 추가 데이터 타입
 죽어도 겹치지 않는 변수명 및 변수값 보장
```

- 7. 레퍼런스 즉 `참조타입(Object)`입니다.

### 6.3. 참조 타입 (Reference Data Type)

- 기본활용하기 좋은 경우

```
 원시값이 너무 많다. 그렇다면 묶어서 관리할까?
 원시값이 서로 관련성이 있는 정보다. 그렇다면 묶어서 관리할까?
```

```js
// 인터파크 쇼핑몰 JS 작업
const 공연명 = "";
const 공연일시 = "";
const 공연포스터 = "";
const 출연진_1 = "";
const 출연진_2 = "";
const 출연진_3 = "";
const 공연가격 = "";
const 예약자수 = "";
const 잔여석 = "";

const 공연명2 = "";
const 공연2일시 = "";
const 공연2포스터 = "";
const 출연2진_1 = "";
const 출연2진_2 = "";
const 출연2진_3 = "";
const 공연2가격 = "";
const 예약2자수 = "";
const 잔여2석 = "";

const 공연명3 = "";
const 공연3일시 = "";
const 공연3포스터 = "";
const 출연3진_1 = "";
const 출연3진_2 = "";
const 출연3진_3 = "";
const 공연3가격 = "";
const 예약3자수 = "";
const 잔여3석 = "";
```

```js
// 인터파크 쇼핑몰 JS 작업
const 공연명 = ["로미오", "아이유", "노트담의"];
const 공연일시 = ["11", "12", "13"];
const 공연포스터 = ["a.jpg", "b.jpg", "c.jpg"];
const 출연진_1 = ["a", "b", "c"];
const 출연진_2 = ["d", "f", "g"];
const 출연진_3 = ["a", "", "c"];
const 공연가격 = [1000, 5000, 25000];
const 예약자수 = [100, 50, 48];
const 잔여석 = [false, false, true];
```

```js
// 인터파크 쇼핑몰 JS 작업
const 로미오 = {
  공연명: "로미오",
  공연일시: "11",
  출연진_1: "a",
  출연진_2: "d",
  출연진_3: "a",
  공연가격: 1000,
  예약자수: 100,
  잔여석: false,
};
const 아이유 = {
  공연명: "아이유",
  공연일시: "11",
  출연진_1: "a",
  출연진_2: "",
  출연진_3: "a",
  공연가격: 500,
  예약자수: 50,
  잔여석: false,
};
const 노틀담 = {
  공연명: "노틀담의 꼽추",
  공연일시: "11",
  출연진_1: "a",
  출연진_2: "",
  출연진_3: "a",
  공연가격: 500,
  예약자수: 10,
  잔여석: true,
};

const 공연 = [로미오, 아이유, 노틀담];
```

- 배열
- 객체
- 함수

### 6.4. 호이스팅 (Hoisting)

- 코드의 작성 순서가 실행에 영향을 주는 것
- 면접 단골메뉴
- 코드를 가장 상단으로 끌어올려 줌(자바스크립트의 엔진이..)

```
 var, function 함수명() {}

 위의 2가지는 hoisting 이 된다.
 좋지 않다. 라고 생각해서 권장하지 않아요.
```

## 7. number 알아보기

```js
const num_1 = 5;
const num_2 = 5.4;
const num_3 = Infinity;
const num_4 = -Infinity;
const num_5 = NaN;
console.log(typeof num_1);
console.log(num_3);
console.log(num_4);
console.log(num_5);
```

## 8. string 알아보기

```js
const str_1 = "안녕하세요.";
const str_2 = "안";
const str_3 = `반가워`;

const age = 10;
const city = "대구";
const message = `나는 ${city}에 살고 ${age}살입니다`;

console.log(typeof str_1);
console.log(str_3);
console.log(typeof str_3);
console.log(message);
```

## 9. boolean 알아보기

```js
const isMember = false;
console.log(typeof isMember, isMember);

const isLogin = true;
console.log(typeof isLogin, isLogin);
// ============================================= //
const isNow = "12시";
console.log("12시", typeof isNow, isNow);

if (isNow) {
  console.log("true 입니다.");
} else {
  console.log("false 입니다.");
}

const isPlay = 100;
console.log(typeof isPlay, isPlay);

if (isPlay) {
  console.log("isPlay true 입니다.");
} else {
  console.log("isPlay false 입니다.");
}

const isPoint = 0;
console.log(typeof isPoint, isPoint);

if (isPoint) {
  console.log("isPoint true 입니다.");
} else {
  console.log("isPoint false 입니다.");
}

const isTeam = "";
console.log(typeof isTeam, isTeam);

if (isTeam) {
  console.log("isTeam true 입니다.");
} else {
  console.log("isTeam false 입니다.");
}

const isItems = [];
console.log(typeof isItems, isItems);
if (isItems) {
  console.log("isItems true 입니다.");
} else {
  console.log("isItems false 입니다.");
}

const isInfo = {};
console.log(typeof isInfo, isInfo);
if (isInfo) {
  console.log("isInfo true 입니다.");
} else {
  console.log("isInfo false 입니다.");
}

const isUn = undefined;
console.log(typeof isUn, isUn);
if (isUn) {
  console.log("isUn true 입니다.");
} else {
  console.log("isUn false 입니다.");
}

const isN = null;
console.log(typeof isN, isN);
if (isN) {
  console.log("isN true 입니다.");
} else {
  console.log("isN false 입니다.");
}
```

### 9.1. 우리는 falshy 한 데이터를 알아야 합니다.

- truthy 참스러운 데이터..
- falshy 는 거짓스러운 데이터..
- 어떤 경우를 false 로 판다하는가?

```
    false
    ""
    0
    null
    undefined
    NaN
```

## 10. null 알아보기

- 변수에 보관한 `값`이 `없다`.
- 개발자가 값이 비었음을 직접 표현한다.

```js
// 회원정보가 없다.(비어있다. 청소대상)
// 개발자가 직접 표현
const memberInfo = null;

// memberInfo 는 falshy 라서 거짓
if (memberInfo) {
  console.log("있어요.");
} else {
  // 실행이 됨.
  console.log("없어요.");
}
```

## 11. undefined 알아보기

- un + defined 로 보자.
- defined 는 값을 셋팅했다.
- undefined 는 값을 셋팅안한 상태이다.
- 변수의 초기값은 undefined 가 됩니다.

```js
// 회원정보 값을 안 담았다.
let isLogin; // undefined

// isLogin 는 falshy 라서 거짓
if (isLogin) {
  console.log("있어요.");
} else {
  // 실행이 됨.
  console.log("없어요.");
}
```

## 12. symbol 알아보기

- unique 한 값
- 교재참조

## 13. 기본형 데이터 정리

```js
const str = "안녕";
const strName = `홍길동 ${str} 하세요.`;

const num = 1;
const numNan = NaN; // 숫자 아니다.

const isLogin = false;

const member = null;

let isPoint = undefined;
```

## 2. 암묵적(묵시적) 데이터 변환

- 데이터가 나한테 말도 안하고 형태(종류)가 바뀌네?
- 프로그램에 원하지 않는 결과가 나옴

```js
const num = 100;
console.log(typeof num, num); // number

const point = "50";
console.log(typeof point, point); // string

const total = num + point;
// 프로그래머는  100   +   "50" ===> 150 ?
// 프로그래머는  100   +   "50" ===> 10050 ?
console.log(typeof total, total); // 묵시적으로 종류결정

const minus = num - point;
// 프로그래머는  100  -   "50" ===> 50 ?
// 프로그래머는  100   -   "50" ===> ????
console.log(typeof minus, minus); // 묵시적으로 종류결정
```

## 3. 명시적 데이터형을 지정함.

- 명시적 데이터형 변환

```js
const num = 100;
console.log(typeof num, num); // number

const point = "50점";
console.log(typeof point, point); // string

const total = num + Number(point); // 명시적으로 종류결정
console.log(typeof total, total); //

const minus = num - parseInt(point);
console.log(typeof minus, minus); // 묵시적으로 종류결정
```

## 4. 연산

- 수식에 의한 결과값 출력하기

### 4.1. 4칙연산 (+, -, \*, /), 나머지연산( % )

```js
//  + 연산

const num_1 = 500;
const num_2 = 50;
const total = num_1 + num_2;

// 글자 + 글자 = 글자 (더하기 가능)
const str_1 = "안녕";
const str_2 = "반가워";
const result = str_1 + str_2;
const num_3 = 200;
const str_3 = "점이야";
const result_str_num = num_3 + str_3;

// - 뺄셈
const m_1 = 500;
const m_2 = 1000;
const m_result = m_1 - m_2;

// 숫자 - 글자 (몰래 숫자로 변경) = 결과 / NaN
const m_3 = 500;
const m_4 = "안녕";
const m_result_n_s = m_3 - m_4;

const m_5 = "500";
const m_6 = "1000";
const m_result_s_s = m_5 - m_6;

// * 곱셈

const multi_1 = 5;
const multi_2 = 3;
const multi_result_1 = multi_1 * multi_2;
// 값을 숫자로 바꾸어 보고 결과 출력 (NaN)
const multi_3 = 5;
const multi_4 = "안녕";
const multi_result_2 = multi_3 * multi_4;

//  / 나눗셈

const div_1 = 5;
const div_2 = 3;
const div_result_1 = div_1 / div_2;
// 값을 숫자로 바꾸어 보고 결과 출력 (NaN)
const div_3 = 5;
const div_4 = "안녕";
const div_result_2 = div_3 / div_4;

const div_5 = 5;
const div_6 = 0;
const div_result_3 = div_5 / div_6; //Infinity
console.log(div_result_3);

// % 나머지
const totalReview = 32;
const pageReview = 5;
const totalResult = totalReview % pageReview; // 2
console.log(totalResult); // 0 이면 NaN
```

### 4.2. 복합연산자( += -= /= \*= %= )

```js
let num_1 = 500;
num_1 = num_1 + 5;
num_1 += 5;

num_1 = num_1 - 5;
num_1 -= 5;

num_1 = num_1 * 5;
num_1 *= 5;

num_1 = num_1 / 5;
num_1 /= 5;

num_1 = num_1 % 5;
num_1 %= 5;
```

### 4.3. 증가 감소 연산자 ( ++ -- )

```js
let num_1 = 500;
num_1++;
num_1--;
```

### 4.4. 논리 연산자

- 결과가 참이냐 아니냐
- truth 하냐, falshy 하냐

```
""    0    undefined   null  NaN
```

```js
// 또는 연산자 ( OR 연산자 )
let result = true || true; // true
result = false || true; // true
result = false || false; // false
//result = "로그인하셨네요." || "로그인하세요.";
//console.log(result);

// 그리고 연산자 ( AND 연산자 )
result = true && true; // true
result = false && true; // false
result = true && false; // false
//result = "로그인하셨네요." && "로그인하세요.";
//console.log(result);

// Not 연산자
result = !true; // false
result = !false; // true
```

### 4.5. 비교 연산자

```js
// 비교 연산자
let result = 1 == "1"; // true

// 데이터 타입도 필수로 체크 해야 합니다.
result = 1 === "1"; // false

result = 1 != "1"; // false
result = 1 !== "1"; // true

result = 1 > 1; // false
result = 1 < 1; // false
result = 1 >= 1; // true
result = 1 <= 1; // true
```

### 4.6. 병합 연산자

- `기본 값을 셋팅`할 때 활용.
- `undefined`, `null` 이 아닌 것찾기

```js
// 병합 연산자
let userName = null;
let displayName = userName ?? "Guest";
console.log("displayName : ", displayName);

// 아래는 주의하세요.
let age = 0;
let displayAge = age ?? 15;
console.log("displayAge : ", displayAge);
```

### 4.7. 삼항 연산자

- 연산자가 3개라서 삼항 이라고 합니다.

```js
// 삼항 연산자
//  결과 = 조건  ?   참결과    :    거짓결과

let age = 10;
let result = age > 18 ? console.log("회원가입") : console.log("부모동의필요");

// if(result) {
//   console.log("회원가입")
// }else{
//   console.log("부모동의필요")
// }

const userRole = "ADMIN";
const url = userRole === "ADMIN" ? "admin.html" : "member.html";
```

## 5. 조건문(Condition)

### 5.1. if 문

```js
const age = 15;

// 아래도 됩니다.
if (age > 18) {
  console.log("성인 이시군요.");
}

if (age > 18) console.log("성인 이시군요.");

const user = "hong";
if (user) return "로그인하셨네요";

// if else 구문을 일반적으로 활용
if (age >= 18) {
  console.log("성인이시군요.");
} else {
  console.log("부모님 동의 필요해요.");
}

// if else if  else if  else
if (age >= 18) {
  console.log("성인이시군요.");
} else if (age >= 15) {
  console.log("3년 후에 오세요.");
} else if (age >= 13) {
  console.log("8년 후에 오세요.");
} else if (age >= 10) {
  console.log("10년 후에 오세요.");
} else if (age >= 8) {
  console.log("12년 후에 오세요.");
} else if (age >= 5) {
  console.log("13년 후에 오세요.");
} else {
  console.log("나이가 없네요. 입력하세요.");
}
```

### 5.2. switch 문

```js
const age = 15;

switch (age) {
  case 18:
    console.log("성인");
    break;

  case 15:
    console.log("3년뒤");
    break;

  case 10:
    console.log("8년뒤");
    break;

  case 5:
    console.log("13년뒤");
    break;

  default:
    console.log("나이를 입력하셔야 해요.");
    break;
}

const userRole = "ADMIN"; // GUEST, MEMBER
switch (userRole) {
  case "ADMIN":
    console.log("관리자시군요.");
    break;
  case "MEMBER":
    console.log("회원시군요.");
    break;
  default:
    console.log("가입전 이군요. 회원가입 해주세요.");
    break;
}
```

## 6. 반복문 (Loop)

- for 구문
  : 몇 번 반복할지를 프로그래머가 아는 경우

```js
// for  조건이 참인 동안 실행

// for (초기값; 조건식; 증감) {
//      할일;
// }
const total = 10;
for (let i = 0; i < total; i++) {
  // console.log("안녕", i);
}
// break 는 가까운 for를 끊어내고 다음 코드 실행
for (let i = 0; i < total; i++) {
  console.log("안녕", i);
  if (i == 2) {
    break;
  }
}
console.log("점심먹자...");

// 반복 중 일부를 실행하지 않고 무시하면서 반복
for (let i = 0; i < total; i++) {
  console.log("안녕", i);
  if (i % 2) {
    continue;
  }
  console.log("반가워", i);
}

// 구구단
for (let i = 1; i < 10; i++) {
  console.log("==== ", i, "단 출력 ==== ");

  for (let j = 1; j < 10; j++) {
    if (j > 5) {
      // 얘가 중요합니다.
      break;
    }
    console.log(` ${i} * ${j} = ${i * j} `);
  }
}
```

- while 구문
  : 몇 번 반복할지를 모를 때

- do while 구문
  : 몇 번 반복할지를 모를 때
  : 한번은 조건을 보지 않고 실행한다.

```js
// while (조건) {
//   할일
// }

// do {
//   할일
// } while (조건)

let count = 0;

while (count < 5) {
  console.log("while ", count);
  count++;
}

let countDo = 0;
do {
  console.log("do : ", countDo);
  countDo++;
} while (countDo < 5);
```

## 7. 함수 (function)

- 기능을 { } 블럭에 모으고 이름을 주는 것.
- 함수는 여러 번 사용하는 기능 묶음이다.
- 여러 번 사용하므로 JSDoc 을 작성하려고 노력하자.
- 여러 번 사용하므로 예외처리를 하려고 노력하자.

### 7.1. 함수가 왜 필요하지 ?

- 반복되는 여러 줄의 코드가 있다면 함수 만들자.
- 함수에 기능을 변경하면 모든 곳에 반영이 자동으로 됨.
- 개발에 속도 및 안정성이 좋다.
- 가독성이 엄청 좋아집니다.

### 7.2. 함수만드는 순서

- 먼저 반복되는 일들을 {} 로 묶어주자.
- 이름은 `동사`로 짓자
- 이름뒤에 `()` 주자
- js 를 위해 `function 키워드` 작성

### 7.3. 함수사용하는 법

- `함수단어()` : 함수 `call` 호출

### 7.4. 함수에 재료 즉 매개변수 주기

- function 함수명(`매개변수`, `매개변수=기본값`) { 할일 }

- 실패 예제

```js
//  세금을 계산하고 싶다.

//  월급의 5% 세금이다.

//  월급이 1000000 원
//  세금이 5%
//  최종 세금은 월급 * 0.05 가 나온다.

const 월급 = 950000;
const 세금 = 5;

function ratioCalc(_money, _ratio) {
  // 재료가 없는 경우 예외처리
  if (_money === undefined || _ratio === undefined) {
    return "값이 올바르지 않습니다. 확인해 주세요.";
  }
  const ratio = _ratio / 100;
  const result = _money * ratio;
  console.log(result);
}

ratioCalc(월급, 세금);
```

- 응용 예제

````js
/**
 * 덧셈 계산기
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  if (arguments.length < 2) {
    return "2개의 값이 필요합니다. ";
  }
  if (typeof a !== "number") {
    return "첫번째 값이 숫자여야 합니다.";
  }
  if (typeof b !== "number") {
    return "두번째 값이 숫자여야 합니다.";
  }

  const reslut = a + b;
  return reslut;
}

/**
 * 뺄셈 함수
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function minus(a, b) {
  if (arguments.length < 2) {
    return "2개의 값이 필요합니다. ";
  }
  if (typeof a !== "number") {
    return "첫번째 값이 숫자여야 합니다.";
  }
  if (typeof b !== "number") {
    return "두번째 값이 숫자여야 합니다.";
  }

  const reslut = a - b;
  return reslut;
}

/**
 * 뺄셈 함수
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function divide(a, b) {
  if (arguments.length < 2) {
    return "2개의 값이 필요합니다. ";
  }
  if (typeof a !== "number") {
    return "첫번째 값이 숫자여야 합니다.";
  }
  if (typeof b !== "number") {
    return "두번째 값이 숫자여야 합니다.";
  }
  if (b === 0) {
    return "분모는 반드시 0 이상이어야 합니다.";
  }

  const reslut = a / b;
  return reslut;
}

/**
 * 계산기
 * 계산기 함수는 두개의 숫자와 한개의 기호를 받습니다.
 * 한개의 기호는 + - / 로 입력합니다.
 *
 * 사용예시
 * ```javascript
 *  const result = calc("+", 5, 4);
 * ```
 * @param {string} sign
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function calc(sign, a, b, role = "guest") {
  if (role === "admin") {
    return "주인님 오셨네요.";
  }

  if (typeof a !== "number") {
    return "첫번째 값이 숫자여야 합니다.";
  }
  if (typeof b !== "number") {
    return "두번째 값이 숫자여야 합니다.";
  }

  switch (sign) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return minus(a, b);
      break;
    case "/":
      if (b === 0) {
        return "분모는 반드시 0 이상이어야 합니다.";
      }
      return divide(a, b);
      break;
    default:
      return "기호를 올바르게 입력해주세요.";
      break;
  }
}

const now = calc("+", 5, 4);
console.log(now);

const admin = calc("+", 5, 4, "admin");
````

## 8. 화살표 함수 (Arrow function)

### 8.1. 정말 간단한 작성법

```js
add();
function add() {
  return 1 + 2;
}

const addA = () => 1 + 2;
addA();

function minus(a) {
  return a - 2;
}
const minusA = (a) => a - 2;

function divide(a, b) {
  return a / b;
}

const divideA = (a, b) => a / b;

function multi(a, b) {
  console.log("곱셈");
  return a * b;
}
const multiA = (a, b) => {
  console.log("곱셈");
  return a * b;
};
```

### 8.2. 일반 함수와는 다르게 arguments 가 없다.

- `Arguments` 대신에 `...rest (레스트 파라메터)` 가 있다.

```js
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
```
