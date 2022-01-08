---
title: "Webpack 실습 part1"
excerpt: " :computer: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다."

categories:
  - webpack
tags:
  - Webpack
  - npm
  - node
  - config
  - command
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다.```
<hr>

#### 1. npm init()

- 프로젝트 폴더 이동 후 npm init 실행

```
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
