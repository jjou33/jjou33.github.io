---
title: "preventDefault"
excerpt: " :computer: JavaScript 문법과 관련 공부내용을 기록하는 포스트 입니다."

categories:
  - JavaScript
tags:
  - JavaScript
  - preventDefault
  - Event
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```JavaScript 문법 내용을 기록하기 위한 포스트입니다.```
<hr>

#### 1. 개요

---

공부를 하다가 리마인드할겸 간단하게 적어본다.
이벤트 코드 관련 동작에서 많이 사용되는 `preventDefault`에 대하여 기록해본다.

#### 2. e.preventDefault() 는 무엇인가?

---

해당 메서드는 태그에서 기본적으로 정의된 이벤트를 작동하지 못하게 하는 메서드이다.
`submit` 혹은 `<a>, <input>, <textarea> ..Tag` 등의 태그를 통한 이벤트가 발생할 경우 새로고침 되는것을 막아준다.

`a Tag` 의 경우 정의한 `url` 로 페이지를 이동해주는 기능을 가지고 있으나, `preventDefault` 메서드를 실행시키면 이동하지 않는것과 같다.

#### 3. 실행 예

---

우선 첫번째로 `a Tag` 를 사용하되, 사용자가 클릭하였을때 실제로 동작하지 않게 하기 위해서 위 메서드를 사용할 수 있다.

```html
<div class="container">
  <form>
    <input type="text" placeholder="검색어를 입력하세요" autofocus />
    <button type="reset" class="btn-reset"></button>
  </form>
</div>
```

```js
FormView.bindEvents = function () {
  this.on("submit", (e) => e.preventDefault());
  this.inputEl.addEventListener("keyup", (e) => this.onKeyup(e));
  this.resetEl.addEventListener("click", (e) => this.onClick(e));
};
```

위 코드에서 **네이버 이동** 태그를 누르면 네이버로 이동하지만 preventDefault 메서드로 인하여 이동하지 않는다.

두번째로는 `submit` 의 활용이다.
보통 `submit` 이벤트를 호출하는 순간 페이지가 깜빡이며 `Reload` 되는데 `preventDefault` 를 통해 이를 막아준다.
