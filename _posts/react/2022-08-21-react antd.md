---
title: "[React] Antd 적용 및 emotion-js 적용 "
excerpt: " :computer: React 개발관련 공부내용을 기록하는 포스트 입니다."

categories:
  - react
tags:
  - react
  - Antd
  - emotion-js
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```React 공부내용을 기록하는 포스트 입니다.```
<hr>

#### 1. 개요

---

개인적으로 구현하고 있는 `React` 프로젝트에서 `ant-design` 을 적용해보려고 하였으나, 계속해서 노출이 되지 않는 문제가 있었다.

간단한 문제였고, 설치 및 적용 방안과 `emotion-js` 까지 적용하는 방법을 작성해둔다.

#### 2. antd 설치
---

`ant-design` 은 많이 사용하는 디자인 시스템인 만큼 개인 프로젝트에 적용해보고 싶었다.

우선 설치 부터 진행한다.

```
npm i antd
```

간단하게 설치가 되었으면 이제 적용해보자.

#### 3. 구현
---

구현하였던 부분은 `lazyLoad` 를 진행할 떄 중간중간 `Loading spinner` 가 노출될 수 있도록 `Suspense` 를 적용하는 것이다.

`React` 최신 버전에서 지원하는 `Suspense` 에 대해서는 `공식문서`를 참조하였다.

구현으로 들어가보면 소스는 아래와 같다.

```js
// error.tsx
// Router 적용 부분

import { RouteObject } from '@/routers/interface'
import lazyLoad from '@/routers/utils/lazyLoad'
import React from 'react'

const signinRouter: Array<RouteObject> = [
  {
    path: '/404',
    element: lazyLoad(React.lazy(() => import('@/components/ErrorMessage/404'))),
    meta: {
      title: 'NotFound',
      key: '404'
    }
  }
]

export default signinRouter


// lazyLoad.tsx
// 함수 정의 부분
import { css } from '@emotion/react'
import { Spin } from 'antd'
import React, { Suspense } from 'react'

const spinStyle = css`
  margin: 20px 0;
  margin-bottom: 20px;
  padding: 30px 50px;
  text-align: center;
  border-radius: 4px;
`
const lazyLoad = (Component: React.LazyExoticComponent<any>): React.ReactNode => {
  return (
    <Suspense fallback={<Spin css={spinStyle} size="large" />}>
      <Component />
    </Suspense>
  )
}

export default lazyLoad

```

먼저 `antd` 에서 제공하는 `Spin` 을 사용하였고 `emotion-js` 를 활용하여 간단한 `css` 를 적용하여 보았다.

`lazyLoad` 는 `Component` 를 `Props` 로 받고 해당 `Component` 가 렌더링 되기 전에 `Suspense` 의 `fallback` 에 정의한 태그가 노출되는 방식이다.

일종의 `Rendering` 의 비동기라고 생각하면 될 것 같다.

순서를 보자면 우선 전체적으로 `Router` 를 통해서 정의되지 않은 `Url` 접근 시 `404` 페이지로 접근하도록 간단하게 설정해 놓았다.

그리고 `lazyLoad` 에 `Component` 를 `lazy` 로 전달하게되면 함수에서는 `Component` 가 `Render` 되기 전에 `Suspense` 안에 작성한 `Spin` 이 돌아가게 된다.

#### 3. 문제 및 해결방안
---

1. 먼저 `antd` 를 적용하였으나, 계속해서 화면에 노출이 되지 않는 현상이 발생하였다.

무엇을 놓쳤는지 확인하다보니 `antd`의 `css` 를 `import` 시켜주지 않은것을 확인하였다.

따라서, `App.tsx` 에 `import` 를 해주고 문제는 해결되었다.

2. `emotion-js` 를 사용하는데 `type Error` 가 발생하게 되었다.

```
Type '{ css: SerializedStyles; size: "large"; }' is not assignable to type 'IntrinsicAttributes & SpinProps'.
  Property 'css' does not exist on type 'IntrinsicAttributes & SpinProps'.ts(2322)
```

`css` 를 사용하였으나, `typescript` 의 `lint` 체크에서 `css` 의 타입을 확인할 수 없다는 대략적인 내용이다.

해결방안은 간단하다.

`node_modules` 에서 `@emotion/react/types` 경로를 따라가가보면 `react` 에서 `typescript` 를 적용할 때 정의된 `type` 정보들을 따로 정의해 둔 파일들이 있다.

![image](https://user-images.githubusercontent.com/56063287/182275799-d152761d-cedb-46f5-86ae-55b934a836d9.png)

이중에 `css-prop` 을 `tsconfig.json` 에 설정해 주면 된다.

```json
// tsconfig.json

{
	"compilerOptions": {
    ...
    "types": ["@emotion/react/types/css-prop"]
  }
}

```

이후 `Spinner` 는 정상적으로 돌아간다.


