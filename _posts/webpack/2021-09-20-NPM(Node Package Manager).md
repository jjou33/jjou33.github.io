---
title:  "NPM(Node Package Manager)"
excerpt: " :computer: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다."

categories:
  - webpack
tags:
  - Webpack
  - NPM(Node Package Manager)
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다.```
<hr>

#### 1. NPM 이란?
***

**NPM(Node Package Manager)**는 전 세계 자바스크립트 개발자들이 올려놓은 **공개된 라이브러리 저장소**에 올라와 있는
**자바스크립트 라이브러리**를 명령어로 **설치 및 관리**할 수 있는 패키지 매니저 이다.

#### 2. Node.js
***

**Node.js** 가 나오기 전까지 **자바스크립트는 브라우저에서만 동작을 제어하는 용도**로 한정적으로 사용되었지만, 
**Node.js** 가 나온 이후 **브라우저 밖에서도 자바스크립트를 실행**할 수 있게 되었다.

#### 3. NPM 을 왜 사용할까?
***

모든 **프레임워크** 나 **개발도구** 등은 어떠한 **편리함**과 **개발을 함에 있어서 도움을 주는 이유**로 사용하게 된다.

NPM 을 사용하는 이유는 너무나도 많지만 먼저 **라이브러리 관리 측면**에서 기록한다.
 
프론트 개발을 하다보면 **싱글 컴포넌트 파일의 특성상 많은 소스가 페이지 내에 함축**되어 있다.
하지만 우리가 특정 태그에서 특정 라이브러리가 필요하여 해당하는 Line 에서 script 태그를 통해 라이브러리를 가져오는 경우가 있을 수도 있다.

예를들어 우리는 **date-picker 라이브러리**를 사용하고 싶다.

![image](https://user-images.githubusercontent.com/56063287/134016283-83368f2a-e4ef-4c5c-a23e-e6415349ca82.png)

이때 실제로 우리가 사용하는 DOM 에 위치해서 script 태그를 통해 그때그때 사용하고 싶은 라이브러리를 적용할 수 있을 것이다.

하지만 이때의 **문제점**은 소스가 짧거나 사용하는 라이브러리가 적으면 문제가 없을 수 있겠지만 우리가 **실무에 사용하는 소스는 대체적으로 짧지 않고 다양한 라이브러리를 사용하여 개발을 진행하는 경우도 있다.**

우리는 **라이브러리 간의 의존성**을 염두해두어야 하기 때문에 각 **라이브러리 간의 의존성을 관리**해야 한다.


따라서, 이러한 이유는 우리가 다음과 같은 측면에서 NPM 을 사용할 수 있을 것이다.

##### 3-1. 의존성 관리
***

NPM 을 통해 개발을 진행하게 되면 **추가적인 라이브러리를 사용**할 때 우리가 어떤 **라이브러리 , 버전**을 사용하고 있는지 **package.json** 에서 확인할 수 있다.

```bash
npm install jquery-ui
npm i jquery-ui
```
![image](https://user-images.githubusercontent.com/56063287/134018064-145b6021-6fc2-46ce-a568-3ad26273cc04.png)

jquery-ui 라이브러리를 설치 후 우리는 package.json 에서 위 사진과 같이 **관련 정보를 쉽게 볼 수 있다.**

##### 3-2. 사용의 편리성
***

우리는 특정 라이브러리를 사용하고 싶을때 필요한 부분에서 **CDN 스크립트를 이용해 라이브러리를 가져오는 경우**가 있을 수 있다.

이럴경우 우리는 번거롭지만 인터넷을 들어가 cdn 을 검색하고 사이트를 들어가 버전에 맞는 cdn 을 찾아서 가져와야한다.

![image](https://user-images.githubusercontent.com/56063287/134018381-8e36af44-2eaa-40f7-9ee0-75086e8679ac.png)

![image](https://user-images.githubusercontent.com/56063287/134018411-9732e6c7-61aa-4aac-b54d-2a6c02b00e0a.png)

위와 같은 작업을 위한 개발자들의 수고로움을 덜어주는 것이 NPM 이라고 생각하면 될 것이다.

우리는 단 한줄의 Command 로 **위 작업과 동일한 결과를 얻을 수 있다.**
즉, Command 한줄로 **최신버전의 라이브러리**를 가져와 사용할 수 있다.
```
npm install jquery
```

또한, NPM 을 통해서 설치 시 **현재 프로젝트 내 node_modules 아래 패키지가 설치되어 직접 가져다 사용할 수 있다는 장점**이 있다.

#### 4. dependency / devDependencies 차이
***

```
npm install [라이브러리] --save-dev
or
npm i [라이브러리] -D
```

설치 명령어는 위에서 설명한 ```npm install [라이브러리]``` 가 있고 추가로 위에 적힌 ```--save-dev``` **옵션**이 있다.

기존 ```npm install [라이브러리]``` 또한 ```--save-prod``` 가 생략되어 있는것이기 때문에 이점도 알아두면 좋다.

**그럼 왜 나누어서 하게되는가? 그리고 차이는 무엇이 있을까?**
이유는 각 **라이브러리의 역할**에 따라 나누게 된다.

```
* dependecies 는 배포용 라이브러리 즉, Application 로직과 직접적으로 관련되 있는 유틸성 라이브러리
react, angular 등

* devDependencies는 개발용 라이브러리 즉, 
webPack, js-compression, sass 등 개발간 보조로 도움을 주는 라이브러리 등
```

즉, **개인적으로 화면조작이나 실제 개발 빌드에 연관**이 없는 라이브러리는 ```-D ``` 옵션으로 설치하는 것이 좋다.

**빌드를 하고 최종 서버에 배포할때는 devDependecies 에 설치된 라이브러리는 배포되지 않는다.**

설치를 하게되면 package.json 은 아래와 같이 나누어서 작성이 되게 된다.

![image](https://user-images.githubusercontent.com/56063287/134019365-25e6286a-d106-4607-8510-704c37000bbb.png)

#### 5. NPM 관련 Command
***

* NPM 삭제

```
npm uninstall [라이브러리명]
```

* 전역(Global) 설치

```
npm install [라이브러리명] --global
```

설치간 Permission 문제로 설치가 되지 않을때는 ```sudo npm install [라이브러리] --globel``` 로 설치를 진행한다.

**global 옵션**을 붙여서 설치할 경우 **프로젝트 내 node_modules 에 따로 패키지 폴더가 생성되지 않는다.**

대신 시스템 내 **특정 루트에 node_modules 가 생성**되서 설치가된다.

![image](https://user-images.githubusercontent.com/56063287/134019852-90a3d7d8-4ceb-4c12-955c-822245030c96.png)

이처럼 global로 설치하는 이유는 
```
1. 시스템상에서 명령어를 제공할 수 있도록하기 위함
2. CLI 를 사용할 수 있도록 하는 라이브러리들은 우리가 실제 운영배포에 필요한 내용이 아니기 때문에
```
이렇게 정리하면 될 것이며, 본인이 참고하고 강의를 듣는 [강사의 사이트](https://joshua1988.github.io/webpack-guide/build/npm-module-install.html#npm-%EC%A0%84%EC%97%AD-%EC%84%A4%EC%B9%98-%EA%B2%BD%EB%A1%9C)에서 더 자세하게 확인 할 수 있다.

