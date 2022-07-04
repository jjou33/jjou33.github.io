---
title: "컴포넌트 디자인 패턴"
excerpt: " :computer: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다."

categories:
  - devHistory
tags:
  - Vue
  - 디자인 패턴
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```Vue 개발 중 공부내용을 기록하는 포스트 입니다.```
<hr>

#### 1. 개요

---

`Vue` 프로젝트를 진행하면서 적용할 수 있는 몇가지 `디자인 패턴`에 대하여 포스팅한다.

다뤄볼 경우는 아래의 4가지 이다.

1. Common - 기본적인 컴포넌트 등록과 컴포넌트 통신
2. Slot - 마크업 확장이 가능한 컴포넌트
3. Controlled - 결합력이 높은 컴포넌트
4. Renderless - 데이터 처리 컴포넌트
5. HOC

#### 2. Common

---

일반적으로 `Container` 컴포넌트가 `End Point` 에 있는 `Presentational` 컴포넌트로 데이터를 넘겨주고 `emit` 을 통하여 상위 컴포넌트로 이벤트를 전달하는 방식이다.

```html
<!-- Container Component -->
<!-- 컨테이너에서 props 를 통해 아래로 데이터를 내리는 형태 -->
<template>
  <div>
    <app-header :title="appTitle"></app-header>
    <app-content :items="items" @renew="renewItems"></app-content>
  </div>
</template>

<!-- Presentational Component -->
<!-- 상위 컴포넌트로 부터 데이터 혹은 이벤트를 받아 그려주는 컴포넌트 -->

<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
  export default {
    props: {
      title: String,
    },
  };
</script>
```

위 코드와 같은 일반적인 방식으로 할 수 있다.

#### 3. slot

---

`slot`에 대해서는 앞서 포스팅한 부분이 있기 때문에 자세한 부분은 [참조](https://jjou33.github.io/vuedev/slot/) 하면 될 것 같다.

#### 3-1. Common 방식이 아닌 Slot 을 사용하는 이유?

---

먼저 아래와 같은 코드를 확인해보자

```html
<!-- Container App.vue-->
<template>
  <div>
    <ul>
      <item v-for="item in items"> {{ item }} </item>
    </ul>
  </div>
</template>

<script>
  import Item from "./Item.vue";

  export default {
    components: {
      Item,
    },
    data() {
      return {
        items: ["아이템1", "아이템2", "아이템3", "아이템4"],
      };
    },
  };
</script>

<!-- Presentational item.vue -->
<template>
  <li>
    <slot>
      <!-- NOTE: 등록하는 곳에서 정의할 화면 영역 -->
    </slot>
  </li>
</template>
```

기존 `Common`한 방식으로 데이터를 전달하게 되면 데이터의 의존성 즉 생성되는 `Item` 컴포넌트에서 전달받은 데이터의 `의존성`을 가지고 있다.

하지만, 위와 같은 방식으로 구성할 경우 `Container` 컴포넌트에만 `데이터 의존성`을 가지고 있다.

즉, 결과적으로 `Container` 컴포넌트에서 가지고 있는 `데이터`에 따라서 같은 `Presentational` 컴포넌트를 활용하여 다르게 표현할 수 있다는 것이다.

```html
<!-- Container -->
<template>
  <div>
    <ul>
      <item> 아이템 1 </item>
      <item>
        아이템 2
        <button>Click</button>
      </item>
      <item>
        아이템 3
        <img src="./assets/testImg.jpg" alt="테스트 이미지" width="50px" />
      </item>
    </ul>
  </div>
</template>

<script>
  import Item from "./Item.vue";

  export default {
    components: {
      Item,
    },
  };
</script>
```

위는 단순한 예지만 실제 `프로젝트`를 진행할 때 위와 같이 요구사항에 따라 가지고 있는 데이터로 다르게 `DOM 구조`와 `스타일링`을 다르게 하여 `Presentational` 컴포넌트를 재사용 할 수 있다는 장점이 있다.

#### 4. Controlled

---

만약 가벼운 `CheckBox`를 분리하기 위해 구성한다고 하자.

```html
<!-- Container -->
<template>
  <check-box :checked="checked"></check-box>
</template>

<script>
  import CheckBox from "./components/CheckBox.vue";

  export default {
    components: {
      CheckBox,
    },
    data() {
      return {
        checked: false,
      };
    },
    methods() {
      fetchCheckBox().then((result) => (this.checked = result.checked));
    },
  };
</script>

<!-- Presentational -->
<template>
  <input type="checkbox" v-model="checked" />
</template>

<script>
  export default {
    props: ["checked"],
  };
</script>
```

위에서 하위 컴포넌트로 `checked`라는 `value`를 내려보내고 하위 컴포넌트 에서는 그 값을 `v-model`로 연결하여 이벤트를 실행한다.

그러나, 실행하면 아래와 같은 에러가 발생한다.

```
vue.runtime.esm.js?2b0e:619 [Vue warn]: Avoid mutating a prop directly
since the value will be overwritten whenever the parent component re-renders.
Instead, use a data or computed property based on the prop's value.
Prop being mutated: "checked"
```

이는 `Props`로 받은 데이터가 `v-model`로 연결해놓아 `체크`를 진행하면 바뀌기 떄문에 `Props`로 받은 데이터를 변경하지 말라는 에러이다.

이럴때 아래의 변경된 코드와 같이 `Controlled` 구조화를 사용한다.

```html
<!-- Container -->
<template>
  <check-box v-model="checked"></check-box>
</template>

<script>
  import CheckBox from "./components/CheckBox.vue";

  export default {
    components: {
      CheckBox,
    },
    data() {
      return {
        checked: false,
      };
    },
    methods() {
      fetchCheckBox().then((result) => (this.checked = result.checked));
    },
  };
</script>

<!-- Presentational -->
<template>
  <input type="checkbox" :value="value" @click="toggleCheckBox" />
</template>

<script>
  export default {
    props: ["value"],
    methods: {
      toggleCheckBox() {
        this.$emit("input", !this.value);
      },
    },
  };
</script>
```

먼저 `Container` 컴포넌트를 살펴본다.

기존 `Props`로 내렸던 데이터르 `v-model` 로 바꾸었다.

`v-model` 로 전달하게 되면 선택 이벤트는 `input` 이고 값은 `value` 로 하위 컴포넌트에 전달된다.

그렇다면 `Presentaional` 컴포넌트를 보면 `Props` 에 받은 데이터는 바인드를 통해 `value`로 받는다.

그렇게 되면 내려온 값인 `false`로 인해서 처음은 빈 체크박스이고 클릭하게 되면 `toggleCheckBox` 메서드를 통해 `input` 이벤트에 현재의 `value` 값의 반대인 `true` 를 상위 컴포넌트로 전달하게 된다.

이렇게 되면 기존 `Presentational` 컴포넌트에서 관리하던 `데이터`가 상위 컴포넌트에서 관리가 된다는 점의 차이가 있다.

**보통 세부적인 컴포넌트를 분리할 때 유용하다**

#### 5. Renderless

---

`Renderless` 방법은 `하위 컴포넌트`에서 `데이터`를 요청해서 받은 뒤 실제 `DOM`을 그리는 즉 `렌더링`을 하는 방식이 아닌 `상위 컴포넌트`로 전달받은 `데이터`만 넘겨서 실제로 그리리는 건 `상위 컴포넌트`에서 그리는 방법을 말한다.

```html
<!-- 상위 컴포넌트 -->
<template>
  <div>
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
      <!-- ... -->
      <div slot-scope="{ response, loading }">
        <div v-if="!loading">{{ response }}</div>
        <div v-if="loading">Loading...</div>
      </div>
    </fetch-data>
  </div>
</template>

<script>
  import FetchData from "./components/FetchData.vue";

  export default {
    components: {
      FetchData,
    },
  };
</script>

<!-- 하위 컴포넌트 -->
<script>
  import axios from "axios";

  export default {
    props: ["url"],
    data() {
      return {
        response: null,
        loading: true,
      };
    },
    created() {
      axios
        .get(this.url)
        .then((response) => {
          this.response = response.data;
          console.log(this.response);
          this.loading = false;
        })
        .catch((error) => {
          alert("[ERROR] fetching the data", error);
          console.log(error);
        });
    },
    render() {
      return this.$scopedSlots.default({
        response: this.response,
        loading: this.loading,
      });
    },
  };
</script>

<style></style>

<style></style>
```

위 코드와 같이 `render` 함수에서 `scopedSlots` 를 통해 상위로 `axios`를 통해 전달받은 데이터만 넘기는 방식을 볼 수 있다.

이 방식의 골자는 실제 `하위 컴포넌트`는 렌더하는 방식이 아닌 `slot-scope`를 이용해서 `상위 컴포넌트`에 렌더하는 방식이다.

실제 `Data` 를 호출하는 부분과 그려주는 부분을 구분하고자 할때 이러한 `디자인`방식을 사용하면 된다.

#### 참고 사이트

---

- [https://www.inflearn.com/course/vue-js/dashboard](https://www.inflearn.com/course/vue-js/dashboard)
