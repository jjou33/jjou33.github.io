---
title: "Webpack Dev Server"
excerpt: " :computer: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다."

categories:
  - webpack
tags:
  - Webpack
  - Bundling 실습
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다.```
<hr>

#### 1. Webpack DEV 서버란?

---

**_실제 빌드 전 개발 서버로 실제 파일 시스템에 build 가 완료된 파일을 만들지 않고 인메모리 상에만 올려놓아 개발하는 기능_**

#### 2. 실습내용

##### 2-1. 프로젝트 내 신규 폴더 새야성 후 npm 설정 시작

---

`npm init -y`

**_package.json 생성 확인필요_**

##### 2-2. 필요한 라이브러리 설치 (DEV) 로 설치한다.

---

`npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D`

##### 2-3. package.json 소스의 script 안에 "webpack serve" 추가

---

```js
{
  "name": "devserverprc",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev" : "webpack serve"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^5.3.2",
    "webpack": "^5.46.0",
    "webpack-cli": "^4.7.2",
    "webpack-dev-server": "^3.11.2"
  }
}
```

##### 2-4. index.html 소스 후 기본 템플릿 생성

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>웹팩 개발서버 테스트</div>
  </body>
</html>
```

##### 2-5. index.js 파일 생성 후 html 에 만든 div 태그에 test 추가 소스 추가

---

```js
var div = document.querySelector(".container");
div.innerText = "테스트 성공";
```

##### 2-6. webpack.config.js 파일 생성 후 아래와 같이 생성

---

```js
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: "index.html",
    }),
  ],
};
```

##### 2-7. npm run dev 커멘드 실행

---

```js
npm run dev
```

##### 2-8. 9000 번 포트로 들어가면 페이지 로드

---

![image](https://user-images.githubusercontent.com/56063287/145405289-e62918cd-e4df-4b6e-bea6-35ee2f167148.png)

**_localhost:9000 진입 시 페이지 로드 성공_**

![image](https://user-images.githubusercontent.com/56063287/145405391-6382825b-3958-42e9-97fa-b9c97fb3c6c0.png)

#### 3. 결과정리

---

이제 우리가 index.js 에 정의해논 텍스트를 바꾸고 저장만 하게되면 바로바로 컴파일이 진행되며 페이지가 새로 로드되게 된다.

하지만 여기서 기존 빌드 방식으로 진행할때와 다른점이 있었다.

```js
// webpack.config.js

var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: "index.html",
    }),
  ],
};
```

분명 output 속성에 최종 결과물 위치와 파일명까지 작성하였지만 실제로 기존처럼 프로젝트 내 결과물 파일이 생성되지 않았다.

![image](https://user-images.githubusercontent.com/56063287/145405511-cb0f9e44-ef0b-41f5-a024-eb43d47a3bd3.png)

하지만 웹 페이지 개발자도구로 들어가보면 request 요청도 하고 실제 bundle.js 파일 소스를 확인할 수 있다.

**_개발자 도구 확인_**
![image](https://user-images.githubusercontent.com/56063287/145405563-97b8da09-3f57-4b35-a5b5-a855562b4b2f.png)

![image](https://user-images.githubusercontent.com/56063287/145405640-6f9ba454-948b-45e2-af2b-c5f49adf33bb.png)

이유는 웹팩 dev 서버의 경우 in memory 기반으로 웹팩의 빌드 결과물을 올려 변환하여 메모리 상에만 존재하고 파일 시스템 상에서 보이지 않는다.

따라서 개발 중엔 웹팩 dev 서버를 이용해서 먼저 결과물을 확인 후 완료되었을때 build 하여 파일을 생성하는 방법이 있다.

이러한 전 과정들이 현재 운영을 맞고 있는 시스템에 적용되면 좋을 것 같아 기록을 남겨두어 차후 개선해보면 좋을 것 같다.
