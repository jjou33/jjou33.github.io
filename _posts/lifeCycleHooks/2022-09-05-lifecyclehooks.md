---
title: "[Composition API] Life Cycle Hooks 정리"
excerpt: " :computer: Vue 개발간 학습 내용들에 대한 정리를 기록하는 포스트 입니다."

categories:
  - lifecyclehooks
tags:
  - Vue3
  - Composition API
  - Life Cycle Hooks
toc: true
toc_sticky: true
toc_label: "POST LIST"
classes: wide
---

<hr>
:raising_hand:  ```Vue 개발간 학습 내용들에 대한 정리를 기록하는 포스트 입니다.```
<hr>

#### 개요

---

**Vue3** 를 개발하면서 기존 **Vue2** 에서의 **Life Cycle** 과 달라진점 및 **Composition API** 에 적용 시 개념을 정리한다.

#### Life Cycle Hooks

**Vue** 라는 프레임워크를 사용하기 위해서는 **Vue** 의 **Life Cycle** 생태계 즉, 프레임워크의 동작 방식을 고려하여 개발해야 한다.

기존 **Vue2** 와 크게 다른점은 없지만, **Composition API** 에서 **Setup** 을 사용하므로써, 기존과 다른 점이 있다.

![image](https://user-images.githubusercontent.com/56063287/188341295-deff9451-6c7f-4438-b7b0-d1a46168181f.png)

위와 같이 사용 **메서드 명** 이 변경되었고, **beforeCreate , created** 훅은 **setup** 을 사용함으로써 대체된다.

나머지는 **Vue2** 에서 사용하는 **Hook** 들의 명칭이 변경되어 실제 자세한 설명은 공식 홈페이지를 참고하면 된다.

- [공식 홈페이지](https://vuejs.org/api/options-lifecycle.html#beforemount)

바뀐 명칭은 아래 표와 같다.

|Options API|Composition API (Setup 사용)|용도|
|-----------|---------------------------|---|
|beforeCreate | X |
|created | X|
|beforeMount | onBeforeMount|
|mounted|onMounted|
|beforeUpdate|onBeforeUpdate|
|updated|onUpdated|
|beforeUnmount|onBeforeUnmount|
|unmounted|onUnmounted|
|errorCaptured|onErrorCaptured|
|renderTracked|onRenderTracked| DEV Only
|renderTriggered|onRenderTriggered| DEV Only 
|activated|onActivated| 
|deactivated|onDeactivated|
|serverPrefetch|onServerPrefetch| SSR Only

실제로 렌더링 순서를 보여주는 코드를 작성해보겠다.

#### Created Hook

**Vue3** 에서는 **setup()** 으로 대체할 수 있다.

**Vue2** 에서 **Data** 선언을 이 **Hook** 에서 하면되고, 반응형으로 선언할 수도 있다.

#### onMounted Hook

**Mounted** 훅의 경우 **DOM** 에 컴포넌트가 주입되는 단계이다

실제 **DOM**을 조작할 수 있으며, 자식 **컴포넌트** 가 모두 **Mounted** 된 후 실행된다.

#### onUpdated Hook

**Update** 훅 또한 자식 **컴포넌트** 의 훅이 모두 호출 된 이후에 실행된다.

실제 **반응형 데이터** 가 변경되거나, 재 랜더링되었을때 호출된다.

특정 상태변경 이후 업데이트 된 **DOM** 에 접근할 경우는 **nextTick()** 을 사용한다.

#### Destruction

이전 **Vue2** 의 **Destory** 해체 단계ㅇ는 **unMounted**, **beforeUnmount** 로 변경되어 사용하면 된다.

#### 최종 정리

기본적인 **Vue** 라이프 사이클은 비슷하다.

다만, 사용하는 **Hook** 의 메서드 명과 **Composition API** 를 활용함에 따라서 추가적인 요소(setup) 등을 확인이 필요할 것 같다.

더불어, 공식 사이트에보면 각 **Hook** 마다 **SSR** 에서는 호출되지 않는 것들이 있는데 이부분은 실제 적용 시 잘 고려해서 구성해야 할 것이다.

#### 참고 사이트

- [Vue 공식 사이트](https://vuejs.org/api/composition-api-lifecycle.html#onrendertracked)