---
title: "Reach Router 를 통한 페이지 이동 간 로직 적용"
excerpt: " :computer: Gatsby router 활용에 대한 포스트 입니다."

categories:
  - Gatsby
tags:
  - router
  - removeEventListener
toc: true
toc_sticky: true
toc_label: "POST LIST"
classes: wide
---

<hr>
:raising_hand:  ```Gatsby router 활용에 대한 포스트 입니다.```
<hr>

#### 1. 개요

---

현재 내가 만들고 있는 블로그의 스택은 크게는 React 와 Gatsby Framework 로 구성하였다.

블로그를 만들고 있기 때문에 기존 `jekyll` 을 활용하여 만들었던 정적페이지 렌더링 기능들을 `Gatsby` 에서 제공을 해주기 때문에 선택하였다.

이제 이번 포스팅의 주제는 만들면서 있었던 문제와 이를 해결한 방안에 대하여 포스팅 할 계획이다.

#### 2. 문제점

---

나만의 블로그를 만들다보니 예전부터 내가 넣고 싶었던 다양한 기능들을 모두 넣고 있다.

그 중 하나는 `Interactive` 한 렌딩 페이지를 만드는 것이었다.

클라이언트는 블로그에 진입 시 소개 렌딩페이지를 지나 포스팅된 블로그로 들어가는 구조이다.

따라서, 크게 메인 `Index` 페이지와 포스팅 페이지, 렌딩페이지 3가지의 페이지를 `SSR` 로 렌더링하여 가져오게 된다.

여기서 발생했던 문제는 렌딩 페이지에서 메인 페이지로 이동 시 다양한 이벤트를 위해 걸어 놓았던 `EventListener`들을 remove 해 주는 부분이었다.

실제 블로그페이지로 `Routing` 될 때에는 함수에서 삭제하면 되지만, 문제가 되었던 부분은 브라우저의 `History Back` 을 통해 뒤로가기 했을때는 먹히지 않는다는 부분이었다.

`recoil` 을 통한 전역 상태를 통한 `removeEventListener` 를 진행하는 방법을 해보려 했으나, 서버사이드로 렌더링 하는 페이지이기 때문에 `RecoilRoot` 문제로 실패하였다.

그래서 `routing` 을 통해 해결해 보려고 시도한 끝에 아래와 같은 방법으로 해결을 하였다.

#### 3. 해결방안

---

해결방안은 요약하면 아래와 같다.

먼저 사용자가 페이지를 이동할때 즉, `Routing` 혹은 `Browser History Back` 을 사용하여 페이지가 변경될 경우 `Detect` 할 수 있는 방안을 찾았다.

이를 해결한 방법은 `@reach/router` 를 활용하는 방법이었다.

물론 `React Router` 를 활용했다면 이를 활용해도 되었지만, 찾아보니 `Gatsby` 에서는 `@reach/router` 를 활용하고 있었기에 여기서 해법을 찾을 수 있었다.

##### @reach/router

---

```
yarn add @reach/router // 라이브러리 의존성 추가
yarn add @types/reach__router --dev // Typescript 정의 추가
```

라이브러리 설치 후 제공하는 API 인 `globalHistory` 를 `import` 한다.

```ts
import { globalHistory } from "@reach/router";
```

이후 원하는 페이지에서 `routing` 에 대한 `eventListener` 를 생성하여 이동을 감지한다.

```ts
...
  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      action === 'POP' ? removeEventListeners(eventListener) : ''
    })
  }, [])

```

위와 같이 진행을 하게 되면 `History` 가 `push, pop` 될 경우 해당 시점에 정의한 함수를 동작하게 된다.

위 코드에서는 `action` 에 대한 정보만 받았지만 실제로 API 에서 제공받을 수 있는 정보는 꾀나 다양한다.

<img width="352" alt="image" src="https://user-images.githubusercontent.com/56063287/210711854-431b6fd7-db6e-4e36-9128-a298773a055a.png">

이러한 부분도 새롭게 알게된 부분이기 떄문에 좋은것 같다.

#### 참고 사이트

1. [https://reach.tech/router/typescript](https://reach.tech/router/typescript)
2. [https://stackoverflow.com/questions/61274365/allow-component-to-detect-route-change-in-gatsby](https://stackoverflow.com/questions/61274365/allow-component-to-detect-route-change-in-gatsby)
