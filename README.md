# 비동기(Asynchronous)

- `비동기`란 오랜 시간이 걸리는 작업
- 예) 서버에 데이터를 요청, 또는 파일을 읽을 때, 쓸때 등
- `비동기`처리는 시간이 많이 걸리는 작업중 `다른일도 같이 처리`하도록 진행하는 것

## 1. 종류

- XHR (Xml Http Request)
- Callback
- Promise
- async/await
- 백엔드 API 샘플 사이트(https://jsonplaceholder.typicode.com/)

### 1.1. XHR

- 서버와 통신하는 작업을 위해서 기본적 제공.
- `Request` : 서버에 자료를 요청하는 것
- `Response` : 요청된 자료로 반환된 결과
- 지금은 자주 사용하지 않습니다.
- xhr.status 는 200 대의 내용이 정상이다.
- xhr.status 는 500 대의 내용은 서버가 없다.
- xhr.status 는 400 대의 내용은 FE 가 오타낸 경우가 많다.

````js
/**
 * getPost 함수는 백엔드 서버에 등록된 글 가져오기
 *
 * 사용법
 * ```javascript
 *  getPosts()
 * ```
 */
// 함수 정의
function getPosts() {
  // 1. xhr 한개 만듦
  const xhr = new XMLHttpRequest();

  // 2. 백엔드에서 알려준 주소로 요청을 실행할 함수
  //   xhr.open("방식", "백엔드주소")
  xhr.open("GET", "https://jsonplaceholder.typicode555.com/posts");

  // 3. 웹브라우저로 요청을 보낸다.
  xhr.send();

  // 4. 요청이 결과를 처리하는 함수
  xhr.onload = function () {
    console.log("요청이 된 경우 결과 : ", xhr);
    // 200 단위는 정상적인 처리이다. 자료가 왔다.
    if (xhr.status === 200) {
      // 처리가 완료되었다.
      console.log(xhr.responseText);
    } else if (xhr.status === 404) {
      console.log("없는 페이지 입니다.");
    } else if (xhr.status === 505) {
      console.log("서버가 꺼져있습니다.");
    }
  };
}
// 함수 호출
getPosts();
````

### 1.2. Callback 함수로 처리하기

- 비동기 작업이 종료시 처리할 함수를 전달하여 처리

```js
// 서버에서 데이터 가져오기
function getPosts() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //할일 : 포트스들을 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}

function getAlbums() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/albums");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //할일 : 앨범데이터를 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}

function getTodos() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //할일 : 할일데이터를 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}
// 위의 코드는 상당히 코드량이 많다.
// 언제가 오타가 발생할 것이다.
// 예를 들어 http 주소가 바뀌었다.
// 그래서 팀장님이 콜백함수로 하면 좋은데...
function getData(apiString = "", callBack = function () {}) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/" + apiString);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      callBack(xhr.responseText);
    } else {
      console.log(apiString + "에러에요", xhr.status);
    }
  };
}
function todosParse(data) {
  console.log("할일 데이터 처리 했습니다.", data);
}
function albumsParse(data) {
  console.log("앨범 데이터 처리 했습니다.", data);
}
function postsParse(data) {
  console.log("포스트 데이터 처리 했습니다.", data);
}
function memberParse(data) {
  console.log("멤버 데이터 처리 했습니다.", data);
}

getData("todos", todosParse);
getData("albums", albumsParse);
getData("posts", postsParse);
getData("users", memberParse);
```

#### 1.2.1. 콜백헬 경험

- 함수의 요청을 여러분의 머릿속에 관리하셔야 합니다. (단점)

```js
// 서버에서 데이터 가져오기
function getPosts() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //할일 : 포트스들을 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}

function getAlbums() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/albums");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //할일 : 앨범데이터를 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}

function getTodos() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //할일 : 할일데이터를 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}
// 위의 코드는 상당히 코드량이 많다.
// 언제가 오타가 발생할 것이다.
// 예를 들어 http 주소가 바뀌었다.
// 그래서 팀장님이 콜백함수로 하면 좋은데...
function getData(apiString = "", callBack = function () {}) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/" + apiString);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      callBack(xhr.responseText);
    } else {
      console.log(apiString + "에러에요", xhr.status);
    }
  };
}
function todosParse(data) {
  console.log("할일 데이터 처리 했습니다.", data);
  getData("albums", albumsParse);
}
function albumsParse(data) {
  console.log("앨범 데이터 처리 했습니다.", data);
  getData("posts", postsParse);
}
function postsParse(data) {
  console.log("포스트 데이터 처리 했습니다.", data);
  getData("users", memberParse);
}
function memberParse(data) {
  console.log("멤버 데이터 처리 했습니다.", data);
}

getData("todos", todosParse);
// getData("albums", albumsParse);
// getData("posts", postsParse);
// getData("users", memberParse);
```

### 1.3. Promise (약속)

- 서버 연동이 끝날 때 원하는 콜백함수를 실행한다.
- 비동기 작업이 완료되면 결과를 알려주는 방식이다.

#### 1.3.1. Promise 는 2개의 콜백함수를 파라멘터로 전달받음

- resolve 콜백함수: 정상적인 결과가 있을 때,
- reject 콜백함수 : 비정상적, 즉, 에러가 있을 경우

#### 1.3.2. Promise 는 3개의 상태가 있습니다.

- Pending : 결과 대기중...
- Resolved : 성공됨!
- Rejected : 실패함!

```js
// 서버에서 데이터 가져오기
function getPosts() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //할일 : 포트스들을 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}

function getAlbums() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/albums");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //할일 : 앨범데이터를 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}

function getTodos() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //할일 : 할일데이터를 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}
// 위의 코드는 상당히 코드량이 많다.
// 언제가 오타가 발생할 것이다.
// 예를 들어 http 주소가 바뀌었다.
// 그래서 팀장님이 콜백함수로 하면 좋은데...
function getData(apiString = "") {
  // 약속의 결과를 돌려받는다.
  // 왜 new Promise 라고 한 것은
  // promise 로 만들어진 결과는 성공, 실패 에 대한 결과가 담겼다.
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/" + apiString);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) {
        //   callBack(xhr.responseText);
        resolve(xhr.responseText);
      } else {
        // console.log(apiString + "에러에요", xhr.status);
        reject(apiString + "에러에요", xhr.status);
      }
    };
  });
}

function todosParse(data) {
  console.log("할일 데이터 처리 했습니다.", data);
}
function albumsParse(data) {
  console.log("앨범 데이터 처리 했습니다.", data);
}
function postsParse(data) {
  console.log("포스트 데이터 처리 했습니다.", data);
}
function memberParse(data) {
  console.log("멤버 데이터 처리 했습니다.", data);
}

getData("todos")
  .then((data) => {
    todosParse(data);
    return getData("albums");
  })
  .then((data) => {
    albumsParse(data);
    return getData("posts");
  })
  .then((data) => {
    postsParse(data);
    return getData("users");
  })
  .then((data) => {
    memberParse(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

### 1.4. async/await

- 적극 추천
- 너무 좋아요.
- function 앞에 반드시 `async` 키워드 작성
- function 안쪽에 `try catch` 작성권장

```js
// 서버에서 데이터 가져오기
function getPosts() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //할일 : 포트스들을 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}

function getAlbums() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/albums");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //할일 : 앨범데이터를 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}

function getTodos() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //할일 : 할일데이터를 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}
// 위의 코드는 상당히 코드량이 많다.
// 언제가 오타가 발생할 것이다.
// 예를 들어 http 주소가 바뀌었다.
// 그래서 팀장님이 콜백함수로 하면 좋은데...
function getData(apiString = "") {
  // 약속의 결과를 돌려받는다.
  // 왜 new Promise 라고 한 것은
  // promise 로 만들어진 결과는 성공, 실패 에 대한 결과가 담겼다.
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/" + apiString);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) {
        //   callBack(xhr.responseText);
        resolve(xhr.responseText);
      } else {
        // console.log(apiString + "에러에요", xhr.status);
        reject(apiString + "에러에요", xhr.status);
      }
    };
  });
}

function todosParse(data) {
  console.log("할일 데이터 처리 했습니다.", data);
}
function albumsParse(data) {
  console.log("앨범 데이터 처리 했습니다.", data);
}
function postsParse(data) {
  console.log("포스트 데이터 처리 했습니다.", data);
}
function memberParse(data) {
  console.log("멤버 데이터 처리 했습니다.", data);
}

// 순차적 Promise 실행하기
async function getAllData() {
  try {
    const todosdata = await getData("todos");
    todosParse(todosdata);

    const albumsdata = await getData("albums");
    albumsParse(albumsdata);

    const postsdata = await getData("posts");
    postsParse(postsdata);

    const usersdata = await getData("users");
    memberParse(usersdata);
  } catch (error) {
    console.log(error);
  }
}

getAllData();
```

## 2. 활용 외부 API 연동 코드

```js
async function getAllData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    console.log("포스트 : ", data);

    res = await fetch("https://jsonplaceholder.typicode.com/albums");
    data = await res.json();
    console.log("앨범 : ", data);

    res = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await res.json();
    console.log("유저 : ", data);
  } catch (error) {
    console.log(error);
  }
}
getAllData();
```
