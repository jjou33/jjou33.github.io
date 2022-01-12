---
title: "Webpack 실습 (5) - 주요 Loader 실습"
excerpt: " :computer: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다."

categories:
  - webpack
tags:
  - Webpack
  - css-loader
  - style-loader
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다.```
<hr>

실무에서 주로 사용하는 대표적인 로더들에 대한 실습을 진행해본다.

#### 1. CSS Loader

---

`CSS-Loader` : css 코드를 `javascript` 로 가져와서 사용 가능

```js
// app.js

import "./app.css";
```

위 코드와 같이 import css 구문을 자바스크립트에서 실행해 주는 것이 `CSS Loader` 의 역할이다.

`npm install css-loader` 로더를 다운로드 하고 `webpack.config.js`에서 로더를 실행해보자

##### 설치 간 버전 호환오류

---

CSS loader 를 설치 시 아래와 같은 오류가 발생하였다.

```shell
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: webpackstudy@1.0.0
npm ERR! Found: webpack@4.46.0
npm ERR! node_modules/webpack
npm ERR!   webpack@"^4.46.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer webpack@"^5.0.0" from css-loader@6.5.1
npm ERR! node_modules/css-loader
npm ERR!   css-loader@"*" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See /Users/hyunwoo/.npm/eresolve-report.txt for a full report.
```

현재 webpack 의 최신 버전은 `npm view webpack versions` 를 통해 확인해보면 `5.66.0` 버전까지 확인이 된다.
나는 실습환경으로 `4버전` 을 사용하였는데, `css-loader` 를 최신버전으로 설치하려고 해서 문제가 발생한듯 하다.

`npm install css-loader@4` 동일하게 4버전대로 설치하였더니 정상적으로 설치가 되었다.

설치가 완료된것을 확인하였다.

```js
// package.json
  ...

  "bugs": {
    "url": "https://github.com/jjou33/webpackStudy/issues"
  },
  "homepage": "https://github.com/jjou33/webpackStudy#readme",
  "dependencies": {
    "css-loader": "^4.3.0",
    "webpack": "^4.46.0",
    "webpack-cli": "^4.9.1"
  }
}
```

이제 `webpack.config.js` 에서 css 파일에 대하여 `css-loader` 를 실행해보자!

```js
// webpack.config.js

...
module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
```

`app.css` 파일을 아래와 같이 임시로 설정하고

```css
body {
  background-color: aqua;
}
```

`npm run build`

build 를 하면 `main.js` 에 문자열 형태로 css 코드가 들어가 있는것을 확인할 수 있다.

![image](https://user-images.githubusercontent.com/56063287/149156965-fc4afd20-1e37-42ba-bdc2-6b54f4d85d1f.png)

하지만 실제 브라우저를 확인해보면 분명히 개발자도구 `main.js` 안에는 코드가 bundling 되어 들어가 있는데 아무 적용이 되지 않는다.
이는 `css-loader` 와 반드시 함께 쓰이는 `style-loader` 가 없기 때문이다.

#### 2. style-loader

---

`npm install style-loader` 를 통해 로더를 다운로드 하고 동일하게 적용시켜보자

```json
  "bugs": {
    "url": "https://github.com/jjou33/webpackStudy/issues"
  },
  "homepage": "https://github.com/jjou33/webpackStudy#readme",
  "dependencies": {
    "css-loader": "^4.3.0",
    "style-loader": "^2.0.0",
    "webpack": "^4.46.0",
    "webpack-cli": "^4.9.1"
  }
```

스타일로더 설치 후 `webpack.config.js` 에 설정

```js
const path = require("path");

module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

```

`use: ["style-loader", "css-loader"],` 처럼 `style-loader` 를 추가해 주었는데 use 배열에 여러 `loader` 를 추가할 때 실행 순서는 `배열의 뒤에서부터 앞으로 실행`된다는 점을 유의해야 될 것 같다. 즉, `css-loader -> style-loader` 순으로 실행된다.

다시 build 후 실행해보면

![image](https://user-images.githubusercontent.com/56063287/149158363-b5e9dff8-ac86-4db0-a90a-52b8424116a0.png)

적용 되는것을 볼 수 있다.

#### 참고 사이트

---

[https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html](https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html)
