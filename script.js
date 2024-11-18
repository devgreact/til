class Student {
  constructor(_age, _member) {
    this.age = _age;
    this.member = _member;
  }
  // 메소드 추가
  say() {}
  cry() {}
  hi() {}
}
// 아래처럼 하면 안되요. 용도를 잘못 생각하고 코딩한것
// Student(10, true);

// 함수만 보아도 new 를 사용하려는 용도임을 앎.
new Student(15, true);
