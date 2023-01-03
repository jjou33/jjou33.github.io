---
title: "Yarn Berry 로 전환 시 Vscode 에서 TypeScript Error"
excerpt: " :computer: yarn Berry 기술에 대한 포스팅입니다.."

categories:
  - yarn
tags:
  - error
  - typescript
toc: true
toc_sticky: true
toc_label: "POST LIST"
classes: wide
---

<hr>
:raising_hand:  ```React 기술에 대한 포스팅입니다.```
<hr>

#### 1. 개요
---

바쁜 나날동안 블로그 만들기를 꾸준히 진행을하다가 이번에 `npm` -> `yarn Berry` 로 `Package Manager` 를 변경하려고 한다.

일단은 크게 문제되는 부분은 없었지만, 실제 동작과는 별개로 `import` 시 `module` 을 찾지 못하는 이슈가 발생하였다.

즉, `Typescript` 에서 이부분을 오류로 보고 있는 것이다.

`yarn Berry` 의 `git issue` 탭에서 확인해보니 `typescript` 버전업으로 인해서 이부분에 대한 나와 동일한 증상을 올리는 사람이 많이 있는것을 확인했다.

관련 URL : [[Bug?]: yarn isn't loading @types packages after upgrading TS to 4.8.3](https://github.com/yarnpkg/berry/issues/4872)

그에 대한 `contributor` 의 답변은 있지만, 많은 질문자들은 `TypeScript` 를 `Downgrade` 하는 방향으로 진행을 한다고 한다.

물론 이는 시간이 좀 된 글이었고 블로그를 통해 해결방법을 찾는 중 아래와 같은 방법으로 해결을 하였기에, 간단히 작성한다.

#### 2. 해결방안
----




우선 공식문서에 나와있는 요점은 이렇다.

Smart IDE(VSCode, intelliJ) 등은 `yarn Berry` 에서 사용하는 `Plug'n'Play` 를 설치하여 사용할때 `Typescript` 가 이를 잘 해석할 수 있도록 설정은 해줘야 한다는 것이다.

따라서, 별도의 `sdk`를 추가하여 사용한다는 의미이다.

자세한 부분은 [공식문서](https://yarnpkg.com/getting-started/editor-sdks) 를 참조하면 된다.

결과적으로 아래 커멘드를 통해 `yarnpkg` 의 `sdk` 관련 모듈을 설치한다.

```
yarn add @yarnpkg/sdks -D
yarn dlx @yarnpkg/sdks vscode
```

 `.yarn` 폴더를 확인하면 아래 사진과 같이 `vscode` 가 명시되어 있을 것이다.

<img width="1283" alt="image" src="https://user-images.githubusercontent.com/56063287/209284417-27022611-b2aa-45bf-b03b-ca554586f0be.png">


이후 각 페이지에서 typescript 에 대한 `tslint` 가 정상적으로 작동하는 것을 볼 수 있다.

#### 참고 사이트

---

1. [yarn berry cannot find module 해결](https://jerrynim.dev/post/yarn-berry-typescript-cannot-find-module)
2. [공식문서](https://yarnpkg.com/getting-started/editor-sdks)
