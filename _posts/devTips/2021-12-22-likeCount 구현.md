---
title: "Vanilla Javscript 구현 - 좋아요 갯수증감 버튼"
excerpt: " :computer: Javascript 구현 개발 중 기록이 필요한 요소들 모음집입니다."

categories:
  - devTips
tags:
  - Vanilla Javscript
  - dataset
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```Javascript 구현 개발 중 기록이 필요한 요소들 모음집입니다.```
<hr>

#### 1. 문제 내용

---

코딜리티를 구경하던 중 간단한 구현과제 문제가 보여서 바닐라로 구현해보았다.

문제는 간단하게 "LIKE | { 좋아요갯수 }" 버튼을 생성하고 누를때마다 좋아요 갯수를 증/감 하는 문제이다.
특별한건 없지만 최대한 깔끔하게 짜도록 노력해보았고, 조금씩 다른사람 코드도 보면서 배우도록 해야겠다.

문제의 조건보다는 실제 기능 동작과 구현위주로 짜보았다.

#### index.html 소스

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <div>
      <button class="like-button">
        <span class="likes-counter"></span>
      </button>
    </div>
    <script src="./src/index.js" type="module"></script>
  </body>
</html>
```

#### index.js 소스

---

```js
//index.js

const $ = (selector) => document.querySelector(selector);
let count = 100;
let isLike = false;
function App() {
  this.init = () => {
    updateLikeCount(count);
  };

  console.log($(".like-button"));

  const changeCountValue = () => {
    if (!isLike) {
      console.log("++");
      updateLikeCount(count++);
      isLike = true;
    } else {
      console.log("--");
      updateLikeCount(count--);
      isLike = false;
    }
  };
  const updateLikeCount = (count) => {
    $(".likes-counter").innerHTML = `LIKE | ${count}`;
  };
  $(".like-button").addEventListener("click", (e) => {
    changeCountValue();
  });
}

const app = new App();
app.init();
```

실제 사이트에는 React 를 활용한 component 문제이지만, 최근 바닐라JS 공부를 하던차라 바닐라로 간단하게 구현해보았다.
앞으로도 간단한거라도 조금 씩 구현해보면서 구현 능력을 좀 길러야겠다..

#### 문제 사이트

**코딜리티** [https://app.codility.com/programmers/trainings/8/react_like_button/](https://app.codility.com/programmers/trainings/8/react_like_button/)
