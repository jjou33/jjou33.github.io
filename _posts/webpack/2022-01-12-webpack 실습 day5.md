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

#### 4. url-loader

---

웹 페이지 내 호출 시 마다 사용하는 `image` 갯수가 많다면 여러번의 네트워크 호출이 발생할것이다.

만약 너무 많은 `image` 를 호출하게 된다면 `속도` 나 `성능`에도 영향을 줄 수 있다.

```html
<img
  src="data:image/png;base64,iVBORw0KGgoAAA
ANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4
//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU
5ErkJggg=="
  alt="Red dot"
/>
```

이러한 경우 위 `html` 소스 처럼 `url-loader` 를 활용하여 작은 이미지들을 많이 사용할 경우 이러한 이미지들을 `Base64`로 인코딩하여 문자열 형태로 소스코드에 넣는 기능을 자동화해줄 수 있다.

`npm install url-loader` 를 통해 설치를 진행한다.

```json
//package.json
  ...
  "homepage": "https://github.com/jjou33/webpackStudy#readme",
  "dependencies": {
    "css-loader": "^4.3.0",
    "file-loader": "^6.2.0",
    "style-loader": "^2.0.0",
    "url-loader": "^4.1.1",
    "webpack": "^4.46.0",
    "webpack-cli": "^4.9.1"
  }
```

##### 4-1. 처리과정

---

![image](https://user-images.githubusercontent.com/56063287/149663731-316b0e59-0260-4c7c-901f-6da73a750a28.png)

사이즈가 작은 `nyancat.jpeg` 파일을 `src` 경로에 다운받는다.

```js
// app.js

import "./app.css";
import nyancat from "./nyancat.jpeg";

// DOM 이 Loading 되어졌을때 Body 에 해당 이미지를 넣는다.
document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
        <img src="${nyancat}" />
    `;
});
```

DOM 이 Loading 되었을 때 이미지를 `Body` 태그 안에 넣는 코드를 작성하였다.

그럼 이제 `Webpack.config.js` 에서 `url-loader` 를 사용하도록 설정을 변경한다.

먼저 앞서 공부한 `file-loader` 를 통해 해당 이미지를 처리하는 것부터 실습해보자.
적용 파일에 `png` 와 더불어 `jpg , jpeg` 파일도 적용할 수 있도록 정규식에 추가해준다.

```js
// webpack.json
module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|jpg|jpeg$/,
        loader: "file-loader",
        options: {
          publicPath: "./dist/",
          name: "[name].[ext]?[hash]",
        },
      },
    ],
```

그리고 `npm run build`를 해보면 `nyancat.jpeg` 파일이 `dist` 경로에 생성되는 것을 볼 수 있다.

![image](https://user-images.githubusercontent.com/56063287/149663964-d6a77b94-1b2a-4778-96f1-5a2a4268221d.png)

그리고 페이지에도 정상적으로 이미지가 노출된다.

![image](https://user-images.githubusercontent.com/56063287/149663981-120092d8-d4ad-4998-bff5-9d9147ca0954.png)

##### 4-1. url-loader 적용

--

먼저 `webpack.config.js` 설정 변경

```js
// webpack.config.json
module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|jpg|jpeg$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist/",
          name: "[name].[ext]?[hash]",
          limit: 20000, // url-loader 가 처리할때 해당 크기 미만은 url-loader 로 처리하고
                        // 그 이상은 file-loader 를 통해 파일을 복사한다.
        },
      },
```

파일의 크기는 `20KB` 미만이다.
![image](https://user-images.githubusercontent.com/56063287/149663764-bc708400-c26f-4b7c-a720-ed0c2d67f613.png)

##### 4-2. 핵심!!!

---

`limit` 으로 설정해준 값 미만의 크기를 가진 파일은 `url-loader` 가 `Base64` 로 인코딩하여 문자열로 이미지를 로딩하고 그 이상은 앞서 공부한 `file-loader` 를 통해서 이미지를 복사하여 `dist` 경로에 생성해서 로딩하는 방식이다.

설정 변경을 마친 후 build 를 해보면 `nyancat.jpeg` 파일은 파일이 아닌 문자열로 변환되어 `main.js` 내에 포함되고 `bg.png` 의 경우 20kb 이상이기 때문에 파일이 복사되어 `dist` 폴더에 생성되는 것을 볼 수 있다.

##### 4-3. 결과 페이지

---

![image](https://user-images.githubusercontent.com/56063287/149664194-d9137f8a-9bf9-4501-8790-bfb2e0532263.png)

##### 4-4. main.js 내 인코딩 문자열

---

![image](https://user-images.githubusercontent.com/56063287/149664323-7257bf9d-2d75-4e18-9955-df3ebb3f358f.png)
![image](https://user-images.githubusercontent.com/56063287/149664384-20f83be2-59c4-4b69-bb16-20c4e9c398e4.png)

#### 참고 사이트

---

[https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html](https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html)
