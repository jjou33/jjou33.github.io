---
title: "awesome Icon 및 Google Font 사용법"
excerpt: " :computer: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다."

categories:
  - htmlcss
tags:
  - F/E
  - awesome icon
  - Google Font
toc: true
toc_sticky: true
toc_label: "POST LIST"
classes: wide
---

<hr>
:raising_hand:  ```프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다.```
<hr>

#### 1. awesome Icon 이 무엇인가요?

---

![image](https://user-images.githubusercontent.com/56063287/169057842-da3f3b2c-7b78-4b0d-8410-0c58413c1027.png)

`Awesome Icon`에서 우리는 다양한 `icon`들을 무료로 사용 가능하다.

#### 2. 프로젝트 적용 방법

---

##### 2-1. 사이트 회원 가입

---

- URL : [https://fontawesome.com/](https://fontawesome.com/)

위 `URL`에 접속하여 회원가입을 하고 내 계정의 고유 `Kit`을 생성하면 나만의 `Kit Code`를 제공한다.

![image](https://user-images.githubusercontent.com/56063287/169059595-8d99553a-920e-4c99-bac9-1b286b0de926.png)

##### 2-2. 프로젝트 설정

---

해당 `<script>` 태그를 내 프로젝트에 `head` 안에 붙여넣어 적용한다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>vue-todo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="shortcut icon"
      href="./src/assets/favicon.ico"
      type="image/x-icon"
    />
    <link rel="icon" href="./src/assets/favicon.ico" type="image/x-icon" />
    <script
      src="https://kit.fontawesome.com/8c8829426d.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div id="app">
      <font-awesome-icon icon="fa-thin fa-alarm-plus" />
    </div>
    <script src="/dist/build.js"></script>
  </body>
</html>
```

#### 3. Google Font 적용방법

---

- URL : [https://fonts.google.com/](https://fonts.google.com/)

위 `URL`에 진입하여 원하는 폰트를 고른 뒤 아래 보이는 오른쪽 `link`를 내 프로젝트에 붙이면 된다.

![image](https://user-images.githubusercontent.com/56063287/169060708-5ef8f4d1-529d-4b54-b439-b435056f297c.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...생략
    <link
      href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="app"></div>
    <script src="/dist/build.js"></script>
  </body>
</html>
```
