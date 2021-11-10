---
title:  "ES6에서 추가된 문법"
excerpt: " :computer: JavaScript 문법과 관련된 설정을 기록하는 포스트 입니다."

categories:
  - JavaScript
tags:
  - JavaScript
  - ES6
  - Array
toc: true
toc_sticky: true
toc_label: "POST LIST"
---


<hr>
:raising_hand:  ```JavaScript 문법 내용을 기록하기 위한 포스트입니다.```
<hr>

#### 1. 삼항 연산자
***

* 조건문을 좀 더 간결하게 사용할 수 있다.

```js
const data = 3;

if(data === 3) {
  console.log("S");
} else {
  console.log("F");
}

```
위 조건문을 **삼항연산자**를 통해 작성하면 아래와 같다

```js
data === 3 ? console.log("S") : console.log("F");
```

#### 2. 함수 Default 값 설정
***

* 인자값이 없을 경우 undefined 출력
```js
function printName(name) {
  console.log(name);
}

printName(); // undefined
```

* Default 값 설정

```js
function printName(name="hyunwoo") {
  console.log(name);
}

function printName2(age, name="hyunwoo") {
  console.log(age, name);
}

printName2(3); // 3, hyunwoo
printName2("suKyung"); // suKyung , hyunwoo
```
위와 같이 기본값으로 설정한 값이 나와 이슈발생에 대한 방어가 가능하다.

#### 3. 객체 구조 분해 할당
***

* 객체에 정의된 Property 값을 간단히 변수에 선언 가능하다.

```js
const obj = {
  name: "hyunwoo",
  age: 30,
  sex: "man"
}

// 동일한 프로퍼티명을 써줘야 한다. 객체의 모든 property 를 가져올 필요는 없다.
let {name, age} = obj 
console.log(name, age) // "hyunwoo", 30

// 동일하지 않은 변수명으로 대입하고 싶을 경우
let {name: myName, age:myAge} = obj;
console.log(myName, myAge);

// 일부만 가져오고 일부는 선언하고 싶을 경우
let {name, hobby='play'} = obj;
console.log(name, hobby);

// 객체안에 해당 값이 없을 경우 default 값을 대입하기
let {name, age: myAge=15, hobby='play'} = obj;
console.log(name, myAge, hobby); // hyunwoo 30 play

const obj = {
  name: "hyunwoo",
  // age: 30,
  sex: "man"
}

let {name, age: myAge=15, hobby='play'} = obj;
console.log(name, myAge, hobby); // hyunwoo 15 play
```

#### 4. 배열
***

```js
let data = [1,2,3];

const [v1, v2, v3] = data;
console.log(v1, v2, v3); // 1 2 3

// 정의된 배열보다 변수가 많을 경우 순서 이외 변수는 할당이 되지 않아 undefiend 처리
const [v1, v2, v3, v4] = data;
console.log(v1, v2, v3 ,v4); // 1,2,3,undefined

// dafault 값 처리 가능
const [v1, v2, v3, v4="hello"] = data;
console.log(v1, v2, v3 ,v4); // 1,2,3,hello

// 특정 위치 값만 가지고 오고 싶을 경우
const [, , v1] = data;
console.log(v1); // 3

// 특정 값들을 배열로 가져오기 이때 ...변수는 가장 마지막 변수여야 한다.
const [v1, ...v2] = data;
console.log(v1, v2); 1, [2,3]

const
```