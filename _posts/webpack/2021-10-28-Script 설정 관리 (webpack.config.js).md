---
title:  "Script 설정 관리 (webpack.config.js)"
excerpt: " :computer: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다."

categories:
  - webpack
tags:
  - Webpack
  - config
  - lodash
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다.```
<hr>

#### 1. webpack.config.js
***

```js
{
  "name": "webpack-start",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode=none"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.44.0",
    "webpack-cli": "^4.7.2"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  } 
}

```

위 json 파일에 정의한대로 webpack 을 build 할 때 우리는 여러가지 옵션을 줄 수 있다.

예로 ***--entry , --output*** 같이 파일, 위치 등을 본인이 원하는 폴더에 생성하겠다는 옵션 같은것들 말이다.

하지만 이렇게되면 아래와 같이 사용하는 옵션이 많아질수록 너무 길어져 관리 측면상 ***복잡하고 명확하지가 않게*** 된다.

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode=none --entry=src/index.js --output=public/output.js"
  },
```
이점을 해결하기 위해 우리는 ***webpack.config.js*** 파일을 만들고 이 파일내에서 하나로 관리하도록 한다.

```js
var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
우리가 기본적으로 사용하는 **Node.js** 의 문법이라고 보면될 것이다.

이제 라인별로 설명을 기록하도록 한다.

```js
var path = require('path');
```

**path** 라고 하는 Node.js 의 path **라이브러리**를 로딩해서 path 라는 변수에 담는다.

이때 우리는 **resolve API** 를 사용한다.

```js
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
```
***output*** 의 경우 **entry** 에 명시되어 있는 파일을 대상으로 **Webpack 을 돌려서 결과를 만들어내는 파일의 filename 과 그에 경로를 의미**한다.

여기서 **resolve API** 의 경우는 시스템에 접근해서 경로를 특정하기 위해 사용한다. 
위 코드에서는 **__dirname** 즉 **현재 폴더 주소를 기준으로 dist 폴더를 유효하게 만들어준다**는 의미로 해석하면 될 것 같다. 

아직까지는 모든걸 완벽하게 이해한것 같지는 않아도 조금은 큰 플로우라도 다시한번 이해하는 것이 좋을것 같다.

[참고 사이트](https://nodejs.org/api/path.html)

#### 2. 정리
***

위 설정들을 정리해보면 다음과 같다.

***먼저 우리가 웹팩으로 빌드 할 때 여러가지 옵션, 선택사항 등을 직접 치는것이 아니고 설정파일에 정의한 대로 build 가 될 수 있게 작업을 하는 것이다.***

##### 2-1. Build 시작(webpack.config.js)
***

```js
var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
***path API 를 가져온 뒤 resolve 를 통해서 결과물에 대한 시스템 위치 및 fileName 을 정의해준다.***

***이때 mode 는 none 으로 하고 entry 를 읽고 output 의 결과물을 만들게 되는데 ***

##### 2-2. index.js
***

```js
import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

위 require 를 통해 API 를 가져오는 부분은 ES5 문법이라 보면 될 것이고 ES6 에서는 우리가 흔히 아는 import from 을 통해 가져오면 되겠다.

**lodash API** 내 join 을 통해 Hello webpack 을 div text 에 넣어주고 body 밑에 넣어주게 되면 config 에 작성했던 위치(dist/main.js) 에 결과물이 나오게 되고 화면에 랜더링이 된다.

이러한 **작업들은 흔히 우리가 html DOM** 에 script cdn 을 가져오는 부가적인 작업이 필요없어지는 부분도 **하나의 이점**인 것 같다.

##### 2-3. index.html
***

```html
<!-- index.html -->
<html>
    <head>
        <title>Webpack Demo</title>
        <!-- <script src="https://unpkg.com/lodash@4.16.6"></script> -->
    </head>
    <body>
        <!-- <script src="src/index.js"></script> -->
        <script src="dist/main.js"></script>
    </body>
</html>
```

[참고 사이트](https://lodash.com/docs/4.17.15#join)