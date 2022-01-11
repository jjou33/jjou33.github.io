---
title: "Webpack 실습 (4) - Loader & Module"
excerpt: " :computer: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다."

categories:
  - webpack
tags:
  - Webpack
  - Loader
  - Module
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다.```
<hr>

#### 1. Loader

---

웹팩은 자바스크립트, 스타일시트, 이미지, 폰트 등 모든 소스를 각각의 모듈로 바라보기 때문에 import 구문을 사용하여 외부 소스를 활용한다.

이는 웹팩의 `로더(Loader)`의 존재 때문인데 `로더`는 여러가지 언어들을 `javascript` 문법으로 변환해 주거나 `image`를 `data URL` 형식의 문자열로 변환하거나 `CSS` 파일을 자바스크립트에서 직접 로딩할 수 있도록 해준다.

#### 2. Loader 실습

---

##### 2-1. Webpack 을 통한 Loader 실행

---

![image](https://user-images.githubusercontent.com/56063287/148957409-ef306aa5-b582-40ca-bc9d-41a3512a185c.png)

위에서 보는것과 같이 앞서 설정한 초기 웹팩 개발환경에서 `my-webpack-loader.js` 파일을 만든다.
해당 파일은 우리가 실행하게 될 `loader` 의 `function` 을 정의하여 `module` 로 내보낼 것이다.

```js
// my-webpack-loader.js
module.exports = function myWebpackLoader(content) {
  console.log("js 파일마다 loader 동작");
  return content;
};
```

이제 이 `loader` 를 사용하려면 `webpack.config.js` 설정 파일에 정의해주어야한다.

```js
// webpack.config.js

const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [path.resolve("./my-webpack-loader.js")],
      },
    ],
  },
};
```

`module` 객체를 추가하고 `rules` 배열안에 `test, use` 객체를 각각 정의해주었다.

- **test** : `Loader` 가 처리해야 할 파일들의 `패턴` 을 정의(정규표현식)
- **use** : 사용할 `Loader` 를 명시

`npm run build` 를 통해 `webpack` 을 실행하게 되면 `js` 파일이 `import` 될 때마다 명시한 `Loader` 가 동작하게 된다.

##### Webpack Build 결과

---

![image](https://user-images.githubusercontent.com/56063287/148958784-5dc13110-e34c-4a5c-b6c6-7090f51a9533.png)

##### 2-2. Loader 를 통해 특정 요소 변경

---

이번엔 `js` 파일 내 `console.log` 를 `alert` 로 변경해 본다.

```js
// app.js

import * as math from "./math.js";

console.log(math.sum(1, 2));
```

현재는 `math.js` 에서 `sum` 함수를 통해 결과값을 `console` 에 찍고 있지만 `Loader` 를 통해 이를 `Alert` 로 변환하여 `Build` 후 페이지를 실행해본다.

```js
// my-webpack-loader.js

module.exports = function myWebpackLoader(content) {
  // console.log("js 파일마다 loader 동작");
  console.log("content : ", content);
  return content.replace("console.log(", "alert(");
};
```

변경 후 `npm run build` 확인
`config` 내용은 동일하기 때문에 `js` 파일이 실행 될 때마다 `Loader` 가 실행되는 부분 확인
`content` 값이 어떻게 나올 지 궁금해서 찍어보았다..

![image](https://user-images.githubusercontent.com/56063287/148959970-f03c47c5-f6c7-4fdc-9a19-b8131aaded33.png)

이후 우리는 앞선 포스팅에서 했듯이 `index.html` 에서 번들링 된 `dist/main.js` 를 로딩하여 페이지를 열면 `Alert` 을 확인할 수 있다.

![image](https://user-images.githubusercontent.com/56063287/148961345-7dd7cfa4-ef71-4e0b-8535-6052e5b7b1e5.png)

#### 정리

---

우선 `Webpack` 이란 도구는 우리가 개발을 함에 있어서 다양한 도움을 주는 번들러이다.

이러한 Webpack 을 그냥 공부하기 보다는 실제 `Loader` 를 `Custom` 화 하여 만들어보고 이제 조금 이해가 된 것 같다.
실제 업무에서 사용하고 있지만, 이제 조금은 알고 사용할 수 잇을 것 같아 회사가서 더 찾아봐야겟다..

오늘 끗!

#### 참고 사이트

---

[https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html#51-cdn%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%B0%A9%EB%B2%95](https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html#51-cdn%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%B0%A9%EB%B2%95)
