---
title:  "Webpack 에 대한 정의와 배경, 사용이유"
excerpt: " :computer: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다."

categories:
  - webpack
tags:
  - Webpack
  - Webpack Definition
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다.```
<hr>

#### 1. 모듈(Module)이란?
***

모듈이란 프로그래밍 관점에서 특정 기능을 갖는 작은 코드 단위를 의미한다.

```js
// math.js
// 함수
function sum(a, b) {
  return a + b;
}
// 함수
function substract(a, b) {
  return a - b;
}
// 상수
const pi = 3.14;

export { sum, substract, pi }
```
이처럼 성격이 비슷한 기능들을 하나의 의미 있는 파일로 관리하면 모듈이 된다.

#### 2. Webpack에서의 모듈
***

우리가 통상 웹펙에서의 모듈이라 생각하면 JavaScript 만 생각할 수 도 있지만, 웹애플리케이션을 구성하는 모든 자원이 모듈이 될 수 있다. 예를들어 우리가 웹 애플리케이션을 제작하려면 HTML, CSS, Javascript, Images, Font 등 여러 파일들이 각자의 역할을 수행하면서 하나의 페이지를 이루고 있으니 이모든 것들이 모듈이 될 수 있다고 생각하면 될 것 같다.

#### 3. Webpack의 필요성
##### 3-1. 파일 단위의 javascript Module 관리
***

```js
var a = 10;
console.log(a); // 10

function logText() {
  console.log(a); // 10
}
```
자바스크립트의 변수 유효 범위는 기본적으로 전역 범위를 갖고 있으며. 최대한 넓은 변수 범위를 갖기 때문에 어디에서도 접근이 가능하다. 이것은 하나의 장점이라고 생각할 수 있지만 오히려 개발 시 문제를 일으키기도 하는 경우가 있다.

```html
<!-- index.html -->
<html>
  <head>
    <!-- ... -->
  </head>
  <body>
    <!-- ... -->
    <script src="./app.js"></script>
    <script src="./main.js"></script>
  </body>
</html>
```

```js
// app.js
var num = 10;
function getNum() {
  console.log(num);
}

// main.js
var num = 20;
function getNum() {
  console.log(num);
}
```

위와 같이 index.html에서 두 자바스크립트 파일을 로딩하여 사용한다고 스크립트에 아래와 같이 코드를 실행하게 된다면 결과는 어떻게 될까?

```html
<!-- index.html -->
<html>
  <head>
    <!-- ... -->
  </head>
  <body>
    <!-- ... -->
    <script src="./app.js"></script>
    <script src="./main.js"></script>
    <script>
      getNum(); // 20
    </script>
  </body>
</html>
```

결과는 20입니다. app.js에서 선언한 num 변수는 main.js에서 다시 선언하고 20을 할당했기 때문에 실제 복잡한 애플리케이션을 개발할때면 발생할 수 있는 케이스 이다. 실제로 실무를 하다보면 운영 시 수많은 페이지들이 있고 그 페이지들이 각각 어떤 변수를 사용하는지 완벽하게 파악할 수 없기 때문이다.

웹펙의 모듈은 import, export 를 사용하고 있고 실제 함수나, 변수 등 모듈로서 사용되어 지는 부분들을 각 도메인에 맞게 분리하여 개발하고 export 하게되면 실제로 사용할때는 파일단위로 import 하여 중복되어 발생하는 문제점을 해결할 수 있다.

##### 3-2. 웹 개발 작업 자동화 도구
***

이전부터 프런트엔드 개발 업무를 할 때 가장 많이 반복하는 작업은 텍스트 편집기에서 코드를 수정하고 저장한 뒤 브라우저에서 새로 고침을 누르는 것이었습니다. 그래야 화면에 변경된 내용을 볼 수 있었죠.

이외에도 웹 서비스를 개발하고 웹 서버에 배포할 때 아래와 같은 작업들을 해야 했습니다.

* HTML, CSS, JS 압축
* 이미지 압축
* CSS 전처리기 변환

##### 3-3. 웹 애플리케이션의 빠른 로딩 속도와 높은 성능
***

실무에서 플랫폼을 운영하다 보면 실제로 브라우저에서 서버로 수많은 파일들을 요청하고 이로 인해 로딩되는데 속도의 지연이 발생하기도 하고 있다. 최대한 이런 요청을 줄일 수 있다면 페이지 로딩속도가 개선되지 않을까? 

맞는 이야기이다 이러한 것을 개선하기 위해 웹팩은 Web Tesk Manager 를 통해 JS, CSS , Img 등등 많은 요청 파일들을 압축하고 병합하여 한번에 요청하여 Request & Response 빈도를 줄여 속도의 성능을 높일 수 있다.

속도의 시대라고도 말할 수 있는 현재는 수많은 앱에서 로딩시간 0.1 초를 줄이기 위해 여러 시도를 해보고 노력을 하고 있다.

이러한 점에서 Lazy Loading 이 등장하기도 하였고 웹팩이 가지고 있는 기본적인 철학 또한 미리 자원을 로딩하여 페이지 렌더링의 속도를 느리게 하는것이 아닌 실제로 브라우저에서 노출이 필요할때 그때 그때 요청하자는 철학을 가지고 있다고 한다.

이러한 모든 면을 보았을때 웹팩은 우리가 이시대의 프론트 개발자로써 반드시 숙지하고 효과적으로 사용할 줄 알아야 할 것이다. 
