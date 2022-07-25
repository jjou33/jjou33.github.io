---
title: "[프로젝트 일기] 1. 프로젝트 구성 및 시작"
excerpt: " :computer: 프로젝트 구성 및 진행 내용을 업데이트 합니다."

categories:
  - projectdesign
tags:
  - 고도화 프로젝트
  - Vue3
  - Vite
  - Typescript
  - Composition API
toc: true
toc_sticky: true
toc_label: "POST LIST"
classes: wide
---

<hr>
:raising_hand:  ******프로젝트 구성 및 진행 내용을 기록하기 위한 포스트입니다.******
<hr>

![image](https://user-images.githubusercontent.com/56063287/180797356-0891f0f4-f52a-4f92-8e45-202fe8c0ce5b.png)


#### 시작
---

현재 다니고 있는 회사의 **Application** 에 대한 **차세대 프로젝트** 가 진행되고 있다.

올해 초부터 이야기가 나오고 **Back End** 부터 **Front End** 까지 모두 변경을 진행하고 있다.

좋은 기회로 이번 프로젝트의 **Front End 공통 개발** 에 참여하게 되어 관련되어 차근차근 일기형식으로 남기기로 한다.

#### 기술 스택
---

현재까지의 **기술 스택**은 아래와 같다

|구분|명칭|	Version|
|---|-----|--------|
|Vue Ecosystem|	Vue Router|	4.3.3|
||Pinia	|2.0.14|
||	Vue	|3.2.37|
||	Vue-Tsc|	0.34.7|
||	node|	>=16|
Build Tools|	vite|	2.9.9|
Utility	|Lodash	|4.17.21|
CSS Precompiler|	Sass|	4.3.3|
Code Style|	ESLint	|8.19.0|
Language	|TypeScript	|4.7.1|


현재 기존 **Application** 은 **Vue2** 로 개발되었으나, 올해 초부터 **Vue3** 가 **default version** 으로 자리매김 함에 따라 **프레임워크**의 고도화가 필요하게 되었다.

이에 많은 회사에서 사용하는 **React** 와 **Vue3** 중 하나를 선택해야 하였고, 결과적으로 **Vue3** 로 진행하게 되었다.

**React** 와 **Vue3** 의 장단점은 분명하였다.

장단점을 고려하였고 회사 내부 사정으로 **React** 보다는 **Vue3** 로 먼저 가닥을 잡게 되었다.

이후 6개월간 **POC** 형식으로 **프로토타입** 형태의 **Mobile Web Application** 을 제작하여 **성능 측정** 을 진행 할 예정이다.

다만, 기존 **Vue2** 의 기본 구성인 **Optional API** 대신 **Vue2** 에서 **외부 Library** 를 통해 사용하였지만, **Vue3** 에서 지원이 가능해진 **Composition API** 를 사용 할 예정이다.

또한, **Vue2** 에서 미약했던 **Typescript** 의 지원이 **Vue3** 에서 개선되었기 때문에 **Typescript** 를 기반으로 개발을 진행할 예정이다.

**신규 기술**에 대해 많은 **위험부담**은 있지만, 새로운 기술을 알아가고 도전한다는 부분이 기대되기도 한다.

앞으로 **기술적인 부분**은 조금씩 일기 형태로 포스팅을 진행할 예정이다.






