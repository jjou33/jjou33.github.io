---
title: "Webpack 실습 (7) - 주요 Plugin 실습"
excerpt: " :computer: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다."

categories:
  - webpack
tags:
  - Webpack
  - Plugin
  - 주요 Plugin
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다.```
<hr>

대표적으로 많이 사용하는 `Plugin` 에 대한 개념 설명 및 실습을 정리하는 포스팅이다.
`loader` 와 같이 `custom` 으로 작성하는 일은 거의 없으며 웹펙에서 제공하는 플러그인을 알아본다.

#### 1. BannerPlugin

---

위 플러그인은 결과물에 대해 원하는 정보를 함께 결과물에 노출 시킬 수 있다. 즉, `Build` 완료된 결과물에 `Banner` 형식으로 `Comment` 개념을 남길 수 있는 것이다.

```js
const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    ...
  },
  module: {
    rules: [
      ...
    ],
  },
  plugins: [
    // Webpack 에서 제공하는 BannerPlugin 생성자 호출
    new webpack.BannerPlugin({
      banner:
      `
        Build Date: ${new Date().toLocaleString()}
        Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
        Author: ${childProcess.execSync("git config user.name")}
      `,
    }),
  ],
};

```

먼저 `webpack` 을 가져와서 사용하는 부분부터 설명한다.

```js
const webpack = require("webpack");
const childProcess = require("child_process");

plugins: [
    // Webpack 에서 제공하는 BannerPlugin 생성자 호출
    new webpack.BannerPlugin({
      banner:
      `
        Build Date: ${new Date().toLocaleString()}
        Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
        Author: ${childProcess.execSync("git config user.name")}
      `,
    }),
  ],
```

`const webpack = require("webpack");` 를 통해 `Webpack` 모듈을 가져온 후 웹팩에서 제공하는 `BannerPlugin` 플러그인의 생성자를 만든다.
이때 실습간 `Build Date, Commit Version, Author` 를 함께 넣는 실습을 진행한다.

위 처럼 작성 후 `npm run build` 를 통해 `build` 를 진행하면 `output` 결과 파일인 `main.js` 최상단에 아래와 같은 `Comment` 를 볼 수 있다.

![image](https://user-images.githubusercontent.com/56063287/150683224-b940c8a6-be89-42f3-99de-16c7cbed1b84.png)

##### 1-1. childProcess 와 execSync

---

위 소스 중 우리는 `ChildProcess` 에 대해서 궁금할 수 있다.
이 기능에 대해서는 추후 개별 포스팅을 통해 조금 더 자세히 알아봐야 할 것 이지만, 우선 이번 실습강의에서 학습한 부분에 대해서만 기록한다.

```js
const webpack = require("webpack");
const childProcess = require("child_process");

plugins: [
    // Webpack 에서 제공하는 BannerPlugin 생성자 호출
    new webpack.BannerPlugin({
      banner:
      `
        Build Date: ${new Date().toLocaleString()}
        Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
        Author: ${childProcess.execSync("git config user.name")}
      `,
    }),
  ],
```

우리는 `webpack` 모듈을 불러오듯이 노드 모듈 중 `child_process` 모듈을 불러올 수 있다.

이때 `childProcess.execSync` 를 통해 우리가 터미널에서 실행할 수 있는 커멘드를 변수로 입력하면 해당 커멘드의 결과물을 `return` 해준다.

![image](https://user-images.githubusercontent.com/56063287/150683417-88244e83-132b-4464-8ac2-6ca63ce2438c.png)

위 예를 들어 위 사진에서 볼 수 있듯이 터미널에서 해당 커멘드를 통해 나온 결과물이 `main.js` 상단 `Comment` 에 작성되어 있는것을 볼 수 있다.

우리는 `childProcess` 또한 `Node.js` 공식 문서에서 디테일한 정보들을 확인할 수 있으니 참고해서 좀더 공부해봐야겠다.

##### Banner Plugin 공식 문석

---

- [https://webpack.js.org/plugins/banner-plugin/](https://webpack.js.org/plugins/banner-plugin/)

##### Nodejs 공식문서(ChildProcess)

---

- [https://nodejs.org/api/child_process.html#child_processexecsynccommand-options](https://nodejs.org/api/child_process.html#child_processexecsynccommand-options)

#### 2. DefinePlugin

---

`DefinePlugin` 또한 `Webpack` 에서 지원하는 플러그인이다.

우리가 실무에서 Application 을 운영할때는 `개발 / 운영` 환경을 나누게 된다.

이때 개발과 운영일때 서로다른 API 서버 주소나, 특징적이고 의존적인 정보들을 소스에 저장하지 않고 `Webpack Plugin` 에 저장하여 변수로 값을 얻을 수 있는 기능을 제공한다.

```js
// Webpack.config.js
const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");

module.exports = {
  mode: "development",
  entry: {
    // 생략
  },
  output: {
    // 생략
  },
  module: {
    // 생략
  },
  plugins: [
    // Webpack 에서 제공하는 BannerPlugin 생성자 호출
    new webpack.BannerPlugin({
      banner: `
        Build Date: ${new Date().toLocaleString()}
        Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
        Author: ${childProcess.execSync("git config user.name")}
      `,
    }),
    new webpack.DefinePlugin({}),
  ],
};

// app.js

console.log(process.env.NODE_ENV);
```

`BannerPlugin` 처럼 `plugins` 배열내에 선언해주고 실제로 `process.env.NODE_ENV` 를 출력하면 명시했던 `mode` 의 `development` 가 출력되는것을 볼 수 있다.

만약에 직접 프로젝트를 구성하면서 정의한 환경변수나 의존정보들을 넣고 싶다면 직접 넣을 수 있다.

```js
// webpack.config.js
new webpack.DefinePlugin({
  testValueNotString: "1+1", // 값
  testValueString: JSON.stringify("1+1"), // 문자열
  "api.domain": JSON.stringify("http://dev.api.domain.com"),
}),
  // app.js
  console.log(process.env.NODE_ENV);
console.log(api.domain);
console.log(testValueNotString);
console.log(testValueString);
```

결과는 아래와 같이 잘 나온다.

![image](https://user-images.githubusercontent.com/56063287/152820105-c58d94b1-b8c9-4d03-8872-3c0beb860954.png)

#### 3. HtmlTemplatePlugin

---

`webpack` 에서 지원하는 플러그인은 아니고 서드파티로 따로 설치해야한다.

```js
npm install html-webpack-plugin
```

설치 후 이 플러그인은 `index.html` 을 `src` 폴더 위에서 관리하지 않고 소스처럼 폴더 내에서 관리할 수 있게 만들어준다.

`index.html` 파일을 원하는 위치에 넣어놓고 아래 설정을 해주자.

```js
// webpack.config.js

...

new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
```

`src` 폴더 내에 `index.html` 을 `output` 경로에 `build` 하여 만들어낸다.

![image](https://user-images.githubusercontent.com/56063287/152985432-324159bd-557d-497e-88ac-68147e4bd094.png)

또한 이제 웹 경로가 `local/index.html` 에서 `local/dist/index.html` 로 바뀌어야 하고 혹시 loader 에서 `/dist/` 경로를 추가로 명시해준 부분이 있다면 삭제해주어야한다.

단적인 예로 아래와 같은 예가 있다.

```js
// webpack.config.js
new htmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        // env 변수에 development 일경우 개발용을 넣는다.
        env: process.env.NODE_ENV === "development" ? "개발용" : "",
      },
    }),
```

````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>Document<%= env %></title>
  </head>
  <body></body>
</html>

```js NODE_ENV=development npm run build
````

로 빌드하면 env 에 개발용이붙는다.
그리고 `주석을 제거`하는 기능도 있다.

```js
new htmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "개발용" : "",
      },
      minify: {
        collapseWhitespace: true, // 빈칸제거
        removeComments: true, // 주석제거
      }
    }),
```

빌드 후 `dist` 폴더의 결과물에 다음과 같이 공백 및 주석이 제거되어있다.

![image](https://user-images.githubusercontent.com/56063287/152998580-8779504a-e643-4eca-b6a2-c84d6b5dba3e.png)

만약 이 경우에도 운영환경일 경우에만 적용한다고 하면

```js
new htmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "개발용" : "",
      },
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true, // 빈칸제거
              removeComments: true, // 주석제거
            }
          : false,
    }),
```

#### 4. CleanWebpackPlugin

---

역할은 `output` 결과물을 삭제해주는 `plugin` 이다.

![image](https://user-images.githubusercontent.com/56063287/152999408-ec20888d-9541-4e7b-8c2b-ac4e1bdad333.png)

위 사진에서 보이듯이 `test.js` 란 파일을 임시로 만들어놓고 `cleanWebpackPlugin` 을 적용해서 build 해보면 사라지는 것을 볼 수 있다.

#### 5. MiniCssExtractPlugin

---

프로젝트의 규모가 커지다보면 하나의 자바스크립트 결과물로 만드는것이 부담이 될 수 있다.

이 플러그인은 번들 결과에서 `스타일시트` 코드만 뽑아서 별도의 `CSS 파일` 로 만들어 분리하게된다.

결과적으로 자바스크립트파일과 CSS 파일 하나가 생성되게 된다.

브라우저에서 큰 파일을 하나 다운받는것보다 작은것 2개를 동시에 다운받는것이 빠르기 때문이다.
개발에서보다 운영에서 즉, `production` 환경에서는 분리하는 것이 좋다.

```js
module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    //...(생략)

    ...(process.env.NODE_ENV === "production"
      ? [
          new MiniCssExtractPlugin({
            filename: "[name].css",
          }),
        ]
      : []),
  ],
```

위와 같이 운영환경일때만 실행하고 아닐땐 빈 배열을 리턴하는게 좋다.

그리고 이 플러그인은 `loader` 부분에 `style-loader` 대신 자체적으로 제공하는 ` MiniCssExtractPlugin.loader` 를 사용하는것이 좋기 때문에 이 또한 분리해주는것이 좋다.

결과물은 아래와 같이 `main.css` 파일이 같이 생겨난다.

![image](https://user-images.githubusercontent.com/56063287/153001497-0bb79a07-0977-42e6-b2e5-44d66f44a0be.png)

#### 참고 사이트

---

- [https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html](https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html)
