---
title: "Webpack 실습 (5) - 주요 Loader 실습"
excerpt: " :computer: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다."

categories:
  - webpack
tags:
  - Webpack
  - css-loader
  - style-loader
  - file-loader
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

#### 3. file-loader

---

`file-loader` 는 파일을 모듈 형태로 지원하여 `webpack` 의 `output` 에 파일을 옮겨주는 역할을 한다.

![image](https://user-images.githubusercontent.com/56063287/149334882-d96a1397-7a0a-4d71-a02b-3b33ffc8442a.png)

이미지 파일을 하나 넣고 `app.css` 파일을 `background-image` 로 변경해준다.

```css
body {
  background-image: url(bg.png);
}
```

`npm run build` 를 실행해보면 아래와 같은 오류가 나오는데 `file-loader` 가 없어서 해당 이미지파일을 웹팩에서 사용하지 못해서 그런다.

설치 후 build 를 해보면 `output` 경로에 이미지 파일이 `hash`값으로 네이밍되어 생성된걸 볼 수 있다.

![image](https://user-images.githubusercontent.com/56063287/149335422-e648c42b-c960-4e7e-b169-02d0296f5502.png)

웹팩은 빌드를 할때마다 유니크한 해쉬 값을 생성한다.

** 브라우저는 이미지, css 등을 캐쉬하여 사용하기 때문에 동일한 파일명을 가지고 다른 파일을 불러와버리면 문제가 생길 수 있기 때문에 이렇게 `유니크한 해쉬값`으로 네이밍을 한다고 한다.**

이대로 `webpack.config.js` 에 이전과 같이 설정을 해준 뒤 build 하고 사이트를 켜보면 파일을 찾을 수 없다는 오류를 확인할 수 있다.

`5c6d3b633991b51295c68b34d8b94c8b.png:1 Failed to load resource: net::ERR_FILE_NOT_FOUND`

해당 파일 경로가 `dist` 안에 있지만 웹팩 설정을 해주지 않았기 때문에 `index.html` 파일 기준에서 찾을 수 없기 때문에 발생하는 것이다.

##### webpack.config.js 설정

---

```js
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/,
        loader: "file-loader",
        options: {
          publicPath: "./dist/",
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
};
```

1. `publicPath` : file-loader 가 파일을 모듈로 사용했을때 경로 앞에 붙여지는 문자열이다. 따라서 이 파일을 호출할때는 웹팩에서 해당 옵션의 값을 붙여서 호출한다.
2. `name` : file-loader 가 output 에 파일을 복사할때 사용 / `원본파일명.확장자명?해쉬값`

이제 페이지를 새로고침하면 정상적으로 이미지가 나오고 개발자 도구에서 위 네이밍으로 호출하는 부분을 확인할 수 있다.

![image](https://user-images.githubusercontent.com/56063287/149337567-2d39b303-e35c-4e10-bfa2-7ab0275e98d1.png)

#### 참고 사이트

---

[https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html](https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html)
