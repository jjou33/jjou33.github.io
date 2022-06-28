---
title: "[VUE DEV History] 데이터 전달 방법"
excerpt: " :computer: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다."

categories:
  - devHistory
tags:
  - F/E
  - Vue
  - props
  - Getters
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다.```
<hr>

![image](https://user-images.githubusercontent.com/56063287/174939166-ea900c41-0ac9-48c7-a762-1cb03ab1cc0a.png)

#### 1. 개요

---

개발 프로젝트 진행 중 기존 `props` 가 아닌 `Vuex`를 활용해서 데이터를 `child component`로 전달하는 방법을 간단하게 기술한다.

#### 2.props

---

가장 일반적이고 보통 많이 사용하는 방법이다.

- 상위 컴포넌트 : UserView.vue

```html
<!-- UserView.vue(상위 컴포넌트) -->
<template>
  <div>
    <user-profile :itemInfo="itemInfo"></user-profile>
  </div>
</template>

<script>
  import UserProfile from "../components/UserProfile.vue";
  import { mapGetters } from "vuex";
  export default {
    components: {
      UserProfile,
    },
    computed: {
      ...mapGetters({ itemInfo: "fetchedUsers" }),
    },
    created() {
      const userName = this.$route.params.id;
      this.$store.dispatch("FETCH_USERS", userName);
    },
  };
</script>

<!-- 나머지 생략 -->
----------------------------------------------------
<!-- UserProfile.vue(하위 컴포넌트) -->
<template>
  <div class="user-container">
    <div>
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="user-description">
      <router-link :to="`/user/${itemInfo.user}`">
        {{ itemInfo.id }}
      </router-link>
      <div class="time">{{ itemInfo.created }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      itemInfo: Object,
    },
  };
</script>
<!-- ... 생략 -->
```

먼저 위 상위 컴포넌트에서 `create` 훅에서 `state`에 `user`에 관한 정보를 담았다.

그리고 `mapGetters`를 통해서 가져오고 `UserProfile` 하위 컴포넌트로 바인딩 하여 `ItemInfo` 정보를 전달하였다.

하위 컴포넌트인 `UserProfile.vue`에서는 `props`를 정의하여 받아온다.

#### 3. Getters

---

이번엔 위에서 이미 봤겠지만 `vuex`를 활용하는 관점에서 확인해본다.

위와 같이 설계를 하고 `vuex`를 설계하였다면, `상위 컴포넌트(UserView)`에서 `create`단계에 `fetch`를 통해 이미 `state`에 해당 정보를 넣어 놓았을 것이다.

그러면 해당 정보를 사용하는 `하위 컴포넌트(UserProfile)`에서는 `computed`에 `mapGetters` 혹은 `this.$store.state.XXX` 와 같이 직접 `store`에서 정보를 가져와도 될 것이다.

```html
<!-- UserView.vue(상위 컴포넌트) -->
<template>
  <div>
    <user-profile></user-profile>
  </div>
</template>

<script>
  import UserProfile from "../components/UserProfile.vue";

  export default {
    components: {
      UserProfile,
    },

    created() {
      const userName = this.$route.params.id;
      this.$store.dispatch("FETCH_USERS", userName);
    },
  };
</script>

<!-- 나머지 생략 -->
----------------------------------------------------
<!-- UserProfile.vue(하위 컴포넌트) -->
<template>
  <div class="user-container">
    <div>
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="user-description">
      <router-link :to="`/user/${itemInfo.user}`">
        {{ itemInfo.id }}
      </router-link>
      <div class="time">{{ itemInfo.created }}</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    computed: {
      ...mapGetters({ itemInfo: "fetchedUsers" }),
    },
  };
</script>
<!-- ... 생략 -->
```

이렇게 실제 사용하는 컴포넌트에서 직접 데이터를 가져와 사용할 수 있다.

간단한 부분이지만 개발 과정에서 기록할만한 부분이어 기록하도록 한다.
