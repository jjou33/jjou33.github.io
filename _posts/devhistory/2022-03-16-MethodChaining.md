---
title: "메서드 체이닝(Method Chaining)"
excerpt: " :computer: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다."

categories:
  - tdz
tags:
  - F/E
  - Method Chaining
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다.```
<hr>

#### 1. 개요

---

`Javascript`로 구현 과제를 공부하던 도중 `Method Chaining`에 관한 부분을 알게 되었다.

유용한 구현법인 만큼 짧지만 기록해두어야 겠다는 생각이 들어 기록해본다.

#### 2. 메서드 체이닝(Method Chaining)이란?

---

```
Method Chaing 이란?

메서드가 객체를 반환하게 되면, 메서드의 반환 값인 객체를 통해 또 다른 메서드를 호출할 수 있다.
이러한 프로그래밍 패턴을 메서드 체이닝(Method Chaining)이라 부른다.
```

#### 예제

---

먼저 `DOM` 이벤트를 듣고 `트리거` 될 때 사전에 정의한 `핸들러(기능)`을 실행하게 해주는 `on`이란 메서드가 있다. 이는 `Vue` 에서는 `v-on` 디렉티브와 같은 역할을 한다고 생각하면 될 것같다. 일종의 `이벤트 리스너` 역할로 생각하면 될 것이다.

```js
// View.js

  on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;
  }

// helper.js

export function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
}

```

여기서 의문점이 드는 부분은 `on`함수 안에 또 `on`함수를 넣어 놓았다는 점이다.

실제로 내부 `on`함수의 경우 다른 `helper.js` 파일에서 `import`를 통해 가져온 실제 `on`기능을 하는 함수이다.

코드를 보면 단순히 전달받은 `target Element`에 이벤트 리스너를 붙여 전달받은 `handler` 함수를 실행해 주는 역할이다.

본론으로 돌아가 `View.js`에서 `on` 함수를 통해 `eventName, handler`를 받아 `helper.js`의 `on`함수를 호출하여 기능을 실행하고 `this`를 `return` 하게 된다.

**여기서 this 를 return 하는 것이 이 글의 핵심이다!**

앞서 개요에도 말했듯이 `Method Chaining`이란 **메서드가 객체를 반환하여 해당 객체를 통해 또 다른 함수를 실행하는 패턴**이라고 알고 있다.

따라서 이는 아래와 같이 활용할 수 있다.

```js
export default class Controller {
 // ... 셍략

  subscribeViewEvents() {
    this.searchFormView
      .on("@submit", (event) => this.search(event.detail.value))
      .on("@reset", () => this.reset());
  }

```

`this.searchFormView`는 `View.js`를 상속(extends) 받아 첫번째 `@submit` 이벤트에 대한 메소드를 실행하게 되면 `eventListener`가 실행되고 `this` 객체를 리턴하게 된다.

이어서 `reset`이라는 또 다른 리스닝이 필요할 경우 이어서 실행할 수 있다.

오늘도 또 새로운걸 알게 되어 신나는 밤이다. :sunglasses:

#### 참고 사이트

---

1. [https://jeonghwan-kim.github.io/](https://jeonghwan-kim.github.io/)
