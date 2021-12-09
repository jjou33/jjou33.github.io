---
title: "html webpack plugin(플러그인 사용법)"
excerpt: " :computer: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다."

categories:
  - webpack
tags:
  - Webpack
  - html Webpack Plugin
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다.```
<hr>

#### 1. Webpack DEV 서버란?

---

**앞서 플러그인 사용법을 봤지만 이번에 새로 사용하는 겸 기록해둔다.**

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

HtmlWebpackPlugin 의 경우 정의된 html 파일에 빌드 결과물을 추가해준다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Webpack Dev Server</title>
  </head>
  <body>
    <!-- 빌드 결과물이 정상적으로 로딩되면 아래 div 태그의 텍스트가 변경됨 -->
    <div class="container">TBD..</div>
    <!-- HTML Webpack Plugin에 의해 웹팩 빌드 내용이 아래에 추가됨 -->
  </body>
</html>
```

따라서 기존과는 다르게 index.html 에 script 로 결과물을 불러오는 태그가 없는 것을 알 수 있다.

또한, link 태그를 통해 css 결과물을 아래와 같은 테그로 가져와서 페이지에 그려줬어야 했지만 이또한 plugin 이 알아서 해준다.

이러한 플러그인을 잘 사용하면 웹 빌드 환경을 구성하는데 좋을 것 같다.

#### 2. 참고사항

---

참고사항으로 web-cli 를 통하여 프로젝트를 생성하였을대 webpack.config.js 이다.

아래 소스 중 자세한건 공식홈페이지에서 찾아서 공부하자

```js
var path = require("path");
var webpack = require("webpack");

module.exports = {
  // mode 를 production 으로 배포하게 되면 최적화를 웹팩 내에서 진행해준다.
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "build.js",
  },
  module: {
    rules: [
      {
        // css loader 를 변환하기 위해
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        // vue 확장 파일에 대해 loader 를 돌림
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {},
          // other vue-loader options go here
        },
      },
      {
        // javascript 의 최신 문법들을 모든 브라우저가 호환할 수 있게 변환해준다.
        test: /\.js$/,
        loader: "babel-loader",
        // 이 부분은 배제한다.
        exclude: /node_modules/,
      },
      {
        // 이미지 확장 파일 loader
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
  // 파일간의 연관관계를 해석할때 사용
  resolve: {
    // 별칭
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    // extensions 에 넣어둔 것들에 대해서 import {} from '.***.js, vue, json'
    // 이렇게 확장자 까지 안쳐도 해석해주겠다.
    extensions: ["*", ".js", ".vue", ".json"],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
  },
  performance: {
    hints: false,
  },
  devtool: "#eval-source-map",
};
```

#### 참고 사이트

---

[https://webpack.js.org/plugins/html-webpack-plugin/](https://webpack.js.org/plugins/html-webpack-plugin/)
