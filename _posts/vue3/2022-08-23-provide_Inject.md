---
title: "[Vue3] Provide / Inject 를 통한 자식 부모간 데이터공유"
excerpt: " :computer: Vue3 개발관련 공부내용을 기록하는 포스트 입니다."

categories:
  - vue3
tags:
  - Vue3
  - Provide
  - Inject
toc: true
toc_sticky: true
toc_label: "POST LIST"
classes: wide
---

<hr>
:raising_hand:  ```Vue 개발 중 공부내용을 기록하는 포스트 입니다.```
<hr>

![image](https://user-images.githubusercontent.com/56063287/185413077-9423f7fe-02fd-4634-aab4-6c6aa0ea5a9c.png)

#### 1. 개요

---

`Vue2` 의 `GlobalProperty` 를 대신하여 부모 자식 컴포넌트간 데이터 전달을 위한 `Provide / Inject` 를 간단하게 정리한다.

#### 왜 global 이 아닌 Provide/Inject 를 사용하는가?
---

일단 `global` 프로퍼티를 사용한다는 가정은 `Component Instance` 가 생성된 이후라는 가정을 한다.

`Vue Life Cycle` 에 따라서 `Vue2` 에서 `mount` 훅에서 `this` 를 통해서 사용했기 때문에 문제가 없었다.

하지만, `Composition API` 를 사용하게 되면서 `setup` 을 사용하게 되고 `setup` 의 경우 `Component instance` 가 생성되기 전이기 떄문에 `this`에 접근이 불가하다는 이유가 있다.

#### Provide / Inject
---

```html
<!-- parent Component -->

<template>
  <child1></child1>
  <button @click="count++"></button>
</template>

<script setup>
import { provide, inject } from 'vue'

const count = ref(0)
const provideObject = {
message: 'ProvideMessage',
count
}
provide('message', provideObject)
</script>

<style lang="scss" scoped></style>
<!-- child depth 1 Component -->

<template>
  <child2></child2>
</template>

<!-- child depth 2 Component -->

<template>
  <div>last Child</div>
  <p>{{ message }}</p>
  <p>{{ count }}</p>
</template>

<script setup>
import { inject } from 'vue'

const { message, count } = inject('message')
</script>

<style lang="scss" scoped></style>

```

위 소스와 같이 사용법은 간단하다.

`Vue3` 에서 제공하는 `Provide` 를 `import` 하여 `key, value` 쌍으로 값을 넣고 `inject` 로 원하는 자식 컴포넌트에서 빼내어 사용하면 되는 부분이다.

상위 컴포넌트에서 `Object` 로 값을 제공하였고, 한개 `depth` 를 건너뛴 마지막 `Component` 에서 해당 값들은 주입(inject)받아 사용했다.

재밌는 부분은 **reactive 한 값을 넘기면(count) 부모의 값이 변하면 하위 컴포넌트에서 주입받은 값도 변경된다는 점이다.**


