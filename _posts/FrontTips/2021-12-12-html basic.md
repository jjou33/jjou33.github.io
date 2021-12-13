---
title: "html 기본 개념 및 공부정리"
excerpt: " :computer: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다."

categories:
  - front
tags:
  - F/E
  - HTML Basic
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다.```
<hr>

#### 1. HTML 5 기본 템플릿 분석

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Document</title>
  </head>
  <body></body>
</html>
```

##### 1-1.DOCTYPE

---

**DOCTYPE** 은 브라우저에게 해당 페이지가 HTML 로 작성된 문서임을 알려준다. 즉, 이 문서가 HTML 임을 브라우저에게 알려준다.

##### 1-2. HTML

---

**HTML** 문서에서 html 태그를 통해 html **시작과 끝**을 알려준다.

속성 **lang** 은 언어를 의미하며 **en, ko** 등 변경 가능하다.

##### 1-3. META

---

**meta Tag** 의 경우 문서에 대한 정보를 알려주기 위해 사용한다.

주요 속성값으로 **keywords, charset, name, author, description** 등 여러가지가 있다.

브라우저에서 검색을 할때 이 meta tag 를 보고 노출시켜 주기도 한다.

description, keywords, author 는 렌더링 엔진에서 검색 시 도움을 주는 name

- http-equiv

종종 IE 는 다른 브라우저에서 제공하는 렌더링 모드와는 다르게 적용이되어 IE 만 동작하지 않는 일이 발생한다.

이런 일을 방지 하기 위해 http-equiv 메타 Tag 사용하면 표준모드로 IE 에서도 동작하게 한다.

```html
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
```

- viewport

사용자의 화면에 노출되는 크기, 초기설정을 정의

##### 1-4. link

---

```html
<link rel="stylesheet" href="css/styles.css" />
```

외부 css 혹은 img 파일들을 해당 페이지와 연결 즉, 가져와서 사용하기 위해 사용

- rel : 가져오려는 파일과 현재 파일과의 Relation 정의

- href : 파일경로 지정

##### 1-5. script

---

```html
<script src="main.js"></script>

<script>
  function hw() {
    		...
     }
</script>
```

외부 스크립트를 가져와서 사용할 수도 있고 실제로 script 태그 내 js 를 작성할 수도 있다.

##### 1-6. Body

---

- h1 ~ h6 제목 태그

제목 태그는 1 -> 6 으로 갈수록 폰트 사이즈 차이가 존재한다.

![image](https://user-images.githubusercontent.com/56063287/145716623-e76aa1b8-2f36-443a-91ee-da8c9c8ed3e5.png)

- a : 하이퍼링크 태그

```html
<a href="https://www.naver.com" target="_black">hippo test</a>
```

여기서 target 에 기능이 두가지가 있다.

1.  \_blank : 새로운 브라우저 창을 띄어 Open

2.  \_self : 현재 브라우저에 띄움

- p : 문단 표시

- Img

```html
<img src="" alt="검색엔진 찾기 설명" />
```

이미지는 src 에 파일경로 를 작성하여 이미지를 넣는 태그이다.

검색엔진 SEO 에서 alt 를 권장하기 때문에 alt 로 해당 이미지 desc 를 잘 설명해주는게 좋다.

- div : 영역을 지정하는 용도

- table

테이블을 그릴때 작성되는 용도이다.

html 5 에서는 기존과 다르게 table 내 thead / tbody / tfoot 을 통해 구간을 정의해서 작성하게 된다.

```html
<table>
  <thead>
    <tr>
      <th>head1</th>
      <th>head2</th>
      <th>head3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>body1-1</td>
      <td>body1-2</td>
      <td>body1-3</td>
    </tr>
    <tr>
      <td>body2-1</td>
      <td>body2-2</td>
      <td>body2-3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>foot1</td>
      <td>foot2</td>
    </tr>
  </tfoot>
</table>
```

이 외 기본적인 태그들이 많으나 작성은 하지 않는다.

#### 2. Semantic Web

---

시맨틱 웹(Semantic Web)은 "의미론적인 웹"이라는 뜻으로, 기계가 이해할 수 있는 형태로 제작된 웹을 의미합니다. (물론 사람도 이해할 수 있습니다.)

header : 헤더 부분

nav : 네비게이션 부분

aside : 옆 사이드 부분

section : 본문의 내용(article)을 포함하는 부분

article : 본문 주 내용 들어가는 부분

footer : 하단(footer) 부분

우리가 사이트를 만들고 사용자에게 노출 시키기 위해서는 검색엔진에서 잘 검색이 되어야한다.

html 5 즉, 모던 웹의 경우 위에서 말한 meta 태그는 물론 semantic web 의 영역 요소 또한 검색엔진이 찾는데 도움이 될 것이다.

#### 참고 사이트

---

[https://blog.cordelia273.space/21](https://blog.cordelia273.space/21)

[https://www.w3schools.com/tags/default.asp](https://www.w3schools.com/tags/default.asp)
