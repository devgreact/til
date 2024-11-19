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
