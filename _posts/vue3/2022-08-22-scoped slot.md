---
title: "[Vue3] Render Scope 과 Scoped Slot 활용"
excerpt: " :computer: Vue3 개발관련 공부내용을 기록하는 포스트 입니다."

categories:
  - vue3
tags:
  - Vue3
  - Render Scope
  - Scoped Slot
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

`Slot` 을 사용하는데 있어서 데이터 접근 범위와 이를 활용하는 `Scoped Slot` 에 대해 이전 포스팅에 이어서 작성해본다.

#### 2. Render Scope
---

이전 포스팅에서 이어서 `Slot` 을 사용하는데 있어서 **데이터의 접근 범위**는 어떻게 될것인가?

예를들어서 아래와 같은 소스가 있다고 생각해보자.

```html
<template>
    <TheSlot>
        <template #header> 헤더 </template>
        <template #footer> 푸터</template>
        <template #default>디폴트</template>
    </TheSlot>
</template>
<script setup>
  import Theslot from './TheSlot.vue'
  const templateMessage = ref('템플릿 메시지 입니다.')
</script>

// Child Component
<template>
  <div>
    <slot name="header"></slot>
  </div>
  <div>
    <slot></slot>
  </div>
  <div>
    <slot name="footer"></slot>
  </div>
</template>

<script setup>
  const headerMessgae = ref('헤더 메시지 입니다.')
</script>

```

이와 같은 구조의 `Slot` 을 활용하기에 있어서 `Rendering Scope` 는 `templateMessgae` 만 해당될 것이다.

이유는 `Slot` 콘텐츠인 `templateMessage` 는 상위 `ParentComonent` 에서는 활용이 가능하지만 자식 컴포넌트에 정의된 `headerMessgae` 는 접근할 수 없다는 것이다.

이를 해결할 수 있는 방법이 `Scoped Slot` 이다.

#### Scoped Slots
---

아래 소스를 통해 이해해보자.

```html
// Parent Component

<template>
    <TheSlot>
      <!-- Child Component 에서 전달한 데이터를 상위 컴포넌트에서 사용가능 -->
        <!-- 구조분해를 통해 slotProps 생략가능 -->
        <template #header="{ headerMessage }"> {{ headerMessage }} </template>
        <template #footer="slotProps"> {{ slotProps.footerMessage }}</template>
        <template #default>디폴트</template>
    </TheSlot>
</template>
</template>
<script setup>
  const templateMessage = ref('템플릿 메시지 입니다.')
</script>

// Child Component
<template>
  <div>
    <slot name="header" :header-message="headerMessage"></slot>
  </div>
  <div>
    <slot></slot>
  </div>
  <div>
    <slot name="footer" :footer-message="footerMessage"></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const headerMessage = ref('헤더 메시지 입니다.')
const footerMessage = ref('푸터 메시지 입니다.')
</script>

<style lang="scss" scoped></style>

```

주석에서 보앗듯이, 자식 컴포넌트에서 전달한 값들을 상위 컴포넌트에서 받아서 사용할 수 있다.

이를 통해 좀 더 유연하고 넓은 범위의 데이터를 활용할 수 있을 것이다.

#### 원하는 Named Slot 만 사용하기
---

```html
<template>
    <TheSlot>
        그냥 사용
    </TheSlot>
</template>
<script setup>
  import Theslot from './TheSlot.vue'
  const templateMessage = ref('템플릿 메시지 입니다.')
</script>

// Child Component
<template>
  <div>
    <slot name="header"></slot>
  </div>
  <div>
    <slot></slot>
  </div>
  <div>
    <slot name="footer"></slot>
  </div>
</template>

<script setup>
  const headerMessgae = ref('헤더 메시지 입니다.')
</script>
```

위와 같이 사용했을때 이상한 점이 있다.

우리는 그냥 `TheSlot` 에 컨텐츠를 넣었을 뿐인데 `TheSlot` 에 정의된 모든 `Slot` 의 `div` 가 생성되는 것을 볼 수 있다.

이럴때 우리가 원하는 `Slot` 즉 `div` 만 생성할 수 있는 방법이 있다.

```html
<template>
    <TheSlot>
        그냥 사용
    </TheSlot>
</template>
<script setup>
  import Theslot from './TheSlot.vue'
  const templateMessage = ref('템플릿 메시지 입니다.')
</script>

// Child Component
<template>
  <div v-if="hasSlots">
    <slot name="header"></slot>
  </div>
  <div v-if="$slots.default">
    <slot></slot>
  </div>
  <div v-if="$slots.footer">
    <slot name="footer"></slot>
  </div>
</template>

<script setup>
import { ref, useSlots, computed } from 'vue'

const headerMessage = ref('헤더 메시지 입니다.')
const footerMessage = ref('푸터 메시지 입니다.')

const slots = useSlots()
const hasSlots = computed(() => !!slots.header)
</script>
```
위와 같이 자식 컴포넌트에 **Rendering 조건** 을 명시하게 되면 실제로 `div` 가 렌더링되지 않게 할 수 있다.

또한 위와 같이 `useSlots` 와 `computed` 를 활용해서 간단하게 원하는 `div slot` 만 나올 수 있도록 할 수 있다.