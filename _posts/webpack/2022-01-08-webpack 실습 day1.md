---
title: "Webpack 실습 (1) - 패키지 설치 및 버전관리"
excerpt: " :computer: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다."

categories:
  - webpack
tags:
  - Webpack
  - npm
  - 유의적 버전
  - 버전 관리
  - 틸트(~)
  - 캐럿(^)
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다.```
<hr>

#### 1. npm init()

- 프로젝트 폴더 이동 후 npm init 실행

```shell
npm init()
```

##### init 후 config 설정

---

![image](https://user-images.githubusercontent.com/56063287/148648584-708f6887-621c-4dda-9e65-46f9facf51a6.png)

command 로 설정이 완료된 후 실제 프로젝트 폴더 내 `package.json` 파일 확인

```json
{
  "name": "webpackstudy",
  "version": "1.0.0",
  "description": "my webpack study",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "echo \"My Build Script Info\""
  },
  "author": "hyunwoo cho",
  "license": "ISC"
}
```

script 를 실행 테스트

```
npm test
npm run build
```

##### npm 제공 Script

---

```s
npm

All commands:

    access, adduser, audit, bin, bugs, cache, ci, completion,
    config, dedupe, deprecate, diff, dist-tag, docs, doctor,
    edit, exec, explain, explore, find-dupes, fund, get, help,
    hook, init, install, install-ci-test, install-test, link,
    ll, login, logout, ls, org, outdated, owner, pack, ping,
    prefix, profile, prune, publish, rebuild, repo, restart,
    root, run-script, search, set, set-script, shrinkwrap, star,
    stars, start, stop, team, test, token, uninstall, unpublish,
    unstar, update, version, view, whoami

```

#### 2. 패키지 설치

---

##### 2-1. CDN 이용

---

`외부 서버에서 직접 라이브러리를 가져오는 방식이다.`

```html
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
```

만약 이 방식으로 사용 중 `CDN 서버`의 장애가 발생할 시 해당 스크립트가 정상적으로 동작하지 않기 때문에 장애가 발생할 수 있다.

##### 2-2. 직접 다운로드

---

[https://unpkg.com/react@16/umd/react.development.js](https://unpkg.com/react@16/umd/react.development.js) 해당 URL 로 들어가 `Script` 를 가져다가 직접 프로젝트 내 파일을 생성하여 사용

서버 장애가 생겨도 문제가 되지 않지만, 매번 업데이트시 마다 가서 다운로드 해서 build 를 해줘야 해줘야 하는 단점이 있다.

##### 2-3. NPM 사용

---

```
npm install [설치 필요 라이브러리]

npm install react
```

```json
{
  "name": "webpackstudy",
  "version": "1.0.0",
  "description": "my webpack study",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "echo \"여기에 빌드 스크립트를 추가\""
  },
  "author": "hyunwoo cho",
  "license": "ISC",
  "dependencies": {
    "react": "^17.0.2"
  }
}
```

dependencies 목록에 설치한 라이브러리(react) 버전 확인 가능

##### 2-4.유의적 버전

---

- 버전 번호를 관리하기 위한 규칙

`"react": "^17.0.2"` 표기의 의미는 아래와 같다.

버전 기준

- 주 버전(Major Version) : 기존 버전과 호환되지 않게 변경한 경우
- 부 버전(Minor Version) : 기존 버전과 호환되면서 기능이 추가된 경우
- 수 버전(Patch Version) : 기존 버전과 호환되면서 버그를 수정한 경우

**즉, 17 버전이 주이며 2번의 버그 패치가 있었다는걸 확인할 수 있다.**

##### 2-5.버전의 범위

---

위 dependencies 의 버전의 규칙에 따라 갱신 시 버전관리 범위가 달라진다.

**1. 특정 버전만 사용**

---

```
1.2.3
```

**2. 버전보다 높거나 낮은 버전으로 사용**

---

```
>1.2.3
>=1.2.3
<1.2.3
<=1.2.3
```

**3. 틸트(~)**

---

```
~1.2.3
```

버전 앞에 `~` 가 붙어있으면, 마이너 버전이 명시되어 있는 경우 **패치 버전만 변경**한다.

예를 들어 `~1.2.3` 표기는 `1.2.3` 부터 `1.3.0` 미만 까지를 포함한다.
만약 마이너 버전이 없는 경우 현재의 버전의 최신 마이너 버전으로 갱신한다.

즉, `~0` 표기는 `0.0.0`부터 `1.0.0` 미만 까지를 포함한다.

**4. 캐럿(^)**

---

버전 앞에 `^` 가 붙어 있으면, 정식 버전에서 `마이너와 패치 버전`을 변경한다.

예를 들어 `^1.2.3` 표기는 `1.2.3` 부터 `2.0.0` 미만 까지를 포함한다.
정식 버전 미만인 `0.x.x` 버전은 패치만 갱신한다.

즉, `^0` 표기는 `0.0.0`부터 `0.1.0` 미만 까지를 포함한다.

만약 `package.json` 안에 `"react": "~0"` 로 변경 후 `npm install` 커멘드를 실행하면 어떻게 될까?

`npm` 은 현재 `package.json` 내에 `dependencies` 안의 모든 라이브러리 에 대하여 설치한다.

위에서 설명했듯이 마이너 버전이 없기 때문에 최신 마이너 버전으로 갱신할 것이다.

```shell
// 라이브러리 버전 확인 command
npm view react versions
```

확인된 현재 정식 릴리즈 전 0 버전의 최신 마이너 릴리즈는 0.14.x 이다.

![image](https://user-images.githubusercontent.com/56063287/148649982-af2c8c85-c273-4018-b73f-99ca7961afe6.png)

그렇다면 `npm install` 의 결과는?

`node_modules` 내 react package.json 에서 아래와 같은 정보를 확인할 수 있다.

```json
    ...
    "addons.js",
    "react.js",
    "addons/",
    "dist/",
    "lib/",
    "cjs/",
    "jsx-runtime.js",
    "jsx-dev-runtime.js"
  ],
  "homepage": "https://facebook.github.io/react/",
  "keywords": [
    "react"
  ],
  "license": "BSD-3-Clause",
  "main": "react.js",
  "name": "react",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/facebook/react.git"
  },
  "version": "0.14.10"
}
```

예상대로 14버전의 최신 릴리즈가 설치되었다.

이렇게 되면 **부버전이 변경**되면서 **하위 호환성이 깨지게 될 것**이다.

그렇다면 `^0.0` 으로 버전변경 후 `install` 하게 되면 어떻게 될까?

```json
{
  "name": "react",
  "description": "React is a javascript module to make it easier to work with asynchronous code, by reducing boilerplate code and improving error and exception handling while allowing variable and task dependencies when defining flow.",
  "version": "0.0.3",
  "author": "Jeff Barczewski <jeff.barczewski@gmail.com>",
  "repository": {
    "type": "git",
    "url": "http://github.com/jeffbski/react.git"
  },
  "bugs": { "url": "http://github.com/jeffbski/react/issues" },
  "licenses": [
    {
      "type": "MIT",
      "url": "http://github.com/jeffbski/react/raw/master/LICENSE"
    }
  ],
  "main": "react",
  "engines": { "node": "~v0.4.12" },
  "dependencies": {},
  "devDependencies": {}
}
```

마이너 버전은 건들지 않고 **패치 버전**만 변경되는 것을 확인할 수 있다.

#### 정리

---

이부분은 항상 어려웠고, 어떻게 알지라고 생각했던 버전관리에 대해서 기본적인 개념을 이해한 것 같아서 뜻 깊은 포스팅이 된것 같다.

실제로 운영되고 있는 서버에서 적용하기에는 너무 무섭지만...? 그래도 관리를 위해서는 조금씩은 알아둬야 할 것 같다.

#### 참고 사이트

---

[https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html#51-cdn%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%B0%A9%EB%B2%95](https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html#51-cdn%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%B0%A9%EB%B2%95)
