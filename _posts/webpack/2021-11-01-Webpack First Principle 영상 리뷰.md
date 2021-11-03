---
title:  "Webpack First Principle 영상 리뷰"
excerpt: " :computer: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다."

categories:
  - webpack
tags:
  - Webpack
  - Webpack from firstprinciples 
  - youtude
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다.```
<hr>

#### 1. Webpack First Principle
***

현재 공부하고 있는 강의에서 webpack 에 대한 유투브 분석 강의를 보았다.

[유투브 링크](https://www.youtube.com/watch?v=WQue1AN93YU )

이 영상의 초기에는 특정 Application 을 만들어 놓고 집에서 쾌적한 인터넷 환경에서 할 경우와 어딘가 굉장히 느린 환경에서 웹 페이지 속도를 크롬 개발자 도구로 보여주며 시작을 하게 된다.

##### 쾌적한 환경의 경우
***
![image](https://user-images.githubusercontent.com/56063287/140076569-04e7da4b-0d4b-4556-a964-7e6c8a3c6409.png)

##### 느린 환경
***
![image](https://user-images.githubusercontent.com/56063287/140076735-4585a40f-794c-484e-9984-4bd70d26c4ac.png)

각각의 Request 의 속도가 현저하게 차이가 나게 된다. 

여기서 웹펙을 적용하게 되면 아래와 같이 위에서 요청했던 10개 이상의 Request 가 bundle.js 에 여러개의 파일이 병합되어 하나로 합쳐져서 요청되므로 확실한 속도 차이가 보이는것을 확인할 수 있다.

*** 모듈 번들러 : 여러개의 파일을 하나로 합쳐주는 것***

결과적으로 네트워크 request 가 확실하게 줄었으므로 페이지 로딩속도가 크게 줄어드는것을 확인시켜준다.

##### 웹팩 적용 후 느린환경
***
![image](https://user-images.githubusercontent.com/56063287/140076993-572be6bf-77e5-46af-a6b6-858ae2c7ad37.png)

![image](https://user-images.githubusercontent.com/56063287/140077117-7fa30062-88d9-42a7-b06d-4cc719a402dd.png)
일반적인 웹페이지의 렌더링을 통해 그리는 과정에 대한 설명 즉, 렌더링 파이프라인에 대한 설명을 하고 있으나, 굉장히 느리기 때문에 결론은 Webpack 을 통해 해결하자! 이다.

#### 2. Web Task 처리를 위한 자동화 도구
***

##### 자동화 도구
***
![image](https://user-images.githubusercontent.com/56063287/140077215-dfb7c3b8-a4c6-4a60-ae03-6dfe74244ffa.png)

#### 3. gulp
***

Gulp 라는 라이브러리를 통해서 개발자는 웹 페이지의 효율성을 높여왔다.
##### gulp 를 이용한 파이프라인 설계
![image](https://user-images.githubusercontent.com/56063287/140077369-4101583b-2364-43ac-bda9-287d9625a97f.png)

위 소스와 같이 개발자가 html, css, js 의 속도와 효율성을 높이기 위해 따로 gulp 라이브러리를 통해서 환경을 개발하는 경우가 많다. 이제 Webpack 으로 이런걸 포함해서 훨씬 많은 개발효율성을 높일 수 있다.

#### 4. 정리
***

1. 웹팩은 javascript 만을 위한 도구가 아니다.

2. 웹팩을 통해 웹 서비스의 많은 request 를 하나로 줄일 수 있고, 이는 페이지 로딩 속도를 낮출 수 있다.

3. 웹팩은 개발자를 위한 도구이며, 웹 서비스에 필요한 여러 요소(CSS, HTML, Font, Javscript..)들의 사용성을 한층 높힐 수 있다.
