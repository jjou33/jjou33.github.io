---
title:  "ES6 Arrow Function"
excerpt: " :computer: JavaScript 문법과 관련된 설정을 기록하는 포스트 입니다."

categories:
  - JavaScript
tags:
  - JavaScript
  - Arrow Function
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```JavaScript 문법 내용을 기록하기 위한 포스트입니다.```
<hr>

#### 1. ES6 화살표 함수 (Arrow Function, '=>') 선언
***
* 함수 선언을 보다 간단하게 하기 위해 고안되었다.
* 화살표 함수는 익명 함수이다. 따라서 호출하기 위해 변수에 대입하는 경우가 많다.

```js
let function = (함수인자) => { expression }
let function = (함수인자) => { statements }

let func = function(함수인자) {
  return expression
}
// 인자가 있을 경우
let myFunction = (name, size) => {
  console.log(name, size)
}
// 인자가 없을 경우
let myFunction = () => {
  console.log("이름")
}
// 인자가 하나일 경우 인자 괄호 생략 가능
let myFunction = name => {
  console.log("1");
  return "hello world" + name
}
// 별도 로직이 없을 경우(한라인으로 끝나는 경우 포함) 바로 리턴값 출력
let myFunction = () => "hello World"
let myFunction = number => number + 2
```





