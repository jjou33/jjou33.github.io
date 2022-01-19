---
title: "Webpack 실습 (6) - Plugin 기본 개념정리"
excerpt: " :computer: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다."

categories:
  - webpack
tags:
  - Webpack
  - Plugin
  - 기본개념
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다.```
<hr>

실무에서 주로 사용하는 대표적인 로더들에 대한 실습을 진행해본다.

#### 1. Plugin 이란 무엇이며 역할은 무엇일까?

---

`loader` 를 통해서 파일단위로 다양한 처리를 하였다면 `plugin` 을 통해서는 `bundling` 된 결과물을 처리한다.
예를 들면 `bundling` 된 `javascript` 를 난독화하거나 특정 텍스트를 `추출` 하는 용도이다.

#### 2. Plugin 구현 실습

---

현재 `webpack` [공식 문서](https://webpack.js.org/contribute/writing-a-plugin/)를 보면 `plugin` 에 대한 `custom` 예제들을 많이 찾을 수 있다.

공식 문서에 있는 예제를 하나 가져와서 프로젝트에 만들어 보았다.

```js
//my-webpack-plugin.js

// Custom 화 한 plugin

class MyWebpackPlugin {
  apply(compiler) {
    // plugin 이 종료되면 2번째 인자로 준 Callback 함수가 실행된다.
    compiler.hooks.done.tap("My Plugin", (stats) => {
      console.log("MyPlugin: done");
    });
  }
}

module.exports = MyPlugin;
```

`my-webpack-plugin.js` 파일에 위와 같이 클레스를 정의한다.
위 클레스는 `apply` 함수에서 제공하는 `complier` 를 통해 `webpack build` 가 끝나는 시점에 2번째 인자로 준 `callback` 함수가 실행되도록 할 계획으로 작성된 코드이다.

`complier` 에 대해서는 정확히 이해가 되지 않아 좀 더 찾아봐서 추후에 따로 정리를 한번 해야될것 같다...ㅠ

우선 `plugin` 을 대신할 `js` 파일을 만들었으므로, `webpack.config.js` 에 위 `js` 를 `plugin` 처럼 실행하도록 설정을 바꿔보자

```js
const path = require("path");
const MyWebpackPlugin = require("./my-webpack-plugin");

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
  ...
  plugins: [
    new MyWebpackPlugin(), // Class 객체 생성
  ],
};

```

`loader` 에 대한 설정을 `modules` 에 작성하였다면, `plugin` 은 `plugins` 에 작성하면 된다.
`my-webpack-plugin.js` 에서 작성한 `class` 에 대한 객체를 `new` 를 통해 생성한다.

그 후 `build` 를 하면 어떻게 될까?

##### 결과

---

![image](https://user-images.githubusercontent.com/56063287/150137582-2ed54efa-f0d9-4a0c-9741-6894ee140c92.png)

`loader` 를 실습할때는 `module`에 설정한 동작이 파일하나 혹은 여러개에 대해 반복 되었지만, `plugin` 의 경우 한번만 동작하는 것을 볼 수 있다.

이유는 `plugin` 은 `bundling` 된 결과물을 대상으로 즉, 우리가 자주 했던 `main.js` ? 라 생각하면 될것 같다.
어쨋든 이런 결과물을 대상으로 동작한다고 한다.

따라서, 우리가 실습에서 생성하는 결과물 파일은 `main.js` 하나이기 때문에 한번만 동작하는 것을 확인할 수 있었다.

#### 3. BannerPlugin 의 Compliation 인자

---

[BannerPlugin 코드](https://github.com/lcxfs1991/banner-webpack-plugin/blob/master/index.js)(Webpack 의 내장 플러그인) 를 참고한 예제 코드를 가져와 보았다.

```js
// Custom 화 한 plugin

class MyWebpackPlugin {
  apply(compiler) {
    // plugin 이 종료되면 2번째 인자로 준 Callback 함수가 실행된다.
    // compiler.hooks.done.tap("My Plugin", (stats) => {
    //   console.log("MyPlugin: done");
    // });

    // compiler.plugin() 함수로 후처리한다
    compiler.plugin("emit", (compilation, callback) => {
      // Compliation 을 통해서 Webpack 이 번들링 한 결과물에 대한 접근을 할 수 있다.
      const source = compilation.assets["main.js"].source();
      console.log(source);
      callback();
    });
  }
}

module.exports = MyWebpackPlugin;
```

위 `source` 를 찍어보니 진짜 번들링된것 같은 로그를 볼 수 있었다.

![image](https://user-images.githubusercontent.com/56063287/150140462-0582856e-333b-4efa-9176-8220253ac3c7.png)

그렇다면 실습으로 이번엔 해당 소스를 재정의 하여 `bundling` 된 결과 상단에 지정한 문자열을 추가하도록 하는 소스로 실습하였다.

```js
compiler.plugin("emit", (compilation, callback) => {
  // Compliation 을 통해서 Webpack 이 번들링 한 결과물에 대한 접근을 할 수 있다.
  const source = compilation.assets["main.js"].source();
  // 번들링 된 main.js 파일 상단에 banner 문자열이 추가되도록 하는 소스
  compilation.assets["main.js"].source = () => {
    const banner = [
      "/**",
      " * 이것은 BannerPlugin이 처리한 결과입니다.",
      " * Build Date: 2022-01-19",
      " */",
    ].join("\n");
    return banner + "\n" + source;
  };
  callback();
});
```

##### 결과

---

![image](https://user-images.githubusercontent.com/56063287/150141571-77c5ffe0-ba5c-4702-813a-383bdde61168.png)

위처럼 결과물인 `main.js` 파일 최상단에 입력한 `banner` 내용이 들어가 있는 것을 볼 수 있다.

#### 4. 최종 정리

---

결과적으로 `plugin` 이란 `webpack` 이 번들링을 통해 여러개의 파일을 합치게 된 결과물에 대한 `후처리` 를 한다고 이해하면 될 것 같다.

![image](https://user-images.githubusercontent.com/56063287/150142194-fb1dc330-bc34-4184-9c66-99bb9dedf1cb.png)

즉, 위 사진에서 빨간색으로 표시한 부분에서 최종적으로 번들링된 각각의 파일들에 대하여 원하는대로 처리를 한다고 이해하면 될 것 같다.

#### 참고 사이트

---

[https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html](https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html)
