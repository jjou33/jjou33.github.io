---
title: "Webpack 실습 (2) - 개념정리"
excerpt: " :computer: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다."

categories:
  - webpack
tags:
  - Webpack
  - 사용배경
  - IIFE
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다.```
<hr>

#### 1. import/Export 없는 이전의 함수 사용법 및 문제점

- ES2015 부터 모듈을 지원했기 때문에 이전에는 `script` 를 `html` 에서 불러와 로딩하여 사용하였다.

```js
// math.js

function sum(a, b) {
  return a + b;
}

// app.js
console.log(sum(1, 2));
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./src/math.js"></script>
    <script src="./src/app.js"></script>
  </body>
</html>
```

위와 같이 진행하면 `app.js` 는 `math.js` 에서 sum 함수를 불러와 사용하지만, `sum` 함수가 전역 스코프에 노출되는 점으로 인해 문제가 발생할 여지가 있다.

##### window 객체 안의 sum 함수

---

![image](https://user-images.githubusercontent.com/56063287/148675208-fa21e146-62a9-46d4-80e3-e90090817276.png)

위 처럼 window 객체에서도 sum 이 불러와지는걸 볼 수 있는데 만약 sum 을 1로 할당 후 다시 호출하면 에러가 발생하는것을 볼 수 있다.

따라서, 다른 파일에서 sum 이란 네이밍을 사용하면 전역 스코프가 오염되어 충돌이 발생하게된다.

##### 스코의 범위를 이용한 접근 공간 분리

---

sum 함수를 새로운 함수 스코프 내에 만들어 격리시킴으로써 외부와의 충돌을 막는다.

```js
// math.js
var math = math || {};

(function () {
  function sum(a, b) {
    return a + b;
  }

  math.sum = sum;
});

// app.js
console.log(math.sum(1, 2));
```

![image](https://user-images.githubusercontent.com/56063287/148675441-e08237ab-acaf-4a2f-b54f-ca72e673ae95.png)

#### 2. 그 외 모듈 스펙

---

##### CommonJS

---

자바스크립트의 모든 환경에서 모듈을 사용하게 하며, `exports` 키워드로 모듈을 만들고 `require()` 함수로 불들여서 사용한다. 대표적으로 서버 사이드 플랫폼 `Node.js` 에서 사용한다.

##### AMD(Asynchronous Module Definition)

---

비동기로 로딩되는 환경에서 모듈을 사용하는 것

##### UMD(Universal Module Definition)

---

AMD 기반으로 CommonJS 방식 까지 지원하는 통합 형태

현재는 ES2015 표준 모듈 시스템을 사용(바벨와 웹팩을 사용하는것이 일반적)

```js
// math.js
export function sum(a, b) {
  return a + b;
}

// app.js
import * as math from "./math.js";
math.sum(1, 2);
```
