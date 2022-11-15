---
title: "React 블로그 스택 및 Layout 설계"
excerpt: " :computer: React 기술에 대한 포스팅입니다.."

categories:
  - reactblog
tags:
  - React
  - blog
toc: true
toc_sticky: true
toc_label: "POST LIST"
classes: wide
---

<hr>
:raising_hand:  ```React 기술에 대한 포스팅입니다.```
<hr>

최근에 많이 바쁜 프로젝트를 진행중이라 블로그 포스팅을 하지 못한부분이 아쉽다.

외적으로 블로그를 이전하고 싶은 마음에 처음부터 블로그를 만들기 시작하였다.

기술 스택은 아래와 같다.


#### 사용 기술 스택
---

|역할|기술명|용도|
|-----------|---------------------------|---|
|Language | Typescripts, GraphQL | 개발언어
|Framework | React, Gatsby(SSR) | 라이브러리 및 프레임워크  
|Style| Emotion | Style 프레임워크
|Build|npm| 빌트 툴

#### 시작

먼저 앞선 `포스트`에서도 설명하였지만 가장 중요한 부분은 `내가 원하는 모든 것을 넣을 수 있는 블로그` 이면 좋겠다에서 부터 시작하였다.

포스팅을 못해서 이미 어느정도 많이 진행된 상황이지만 지금부터라도 조금씩 포스팅을 진행 하고자 한다.

파일 구조는 아래와 같다.

#### Layout

##### 1.1 index

먼저 `gatsby` 를 통해 `서버사이드` 에서 `md` 파일 정보나 기타 정보를 가져와서 렌더링해주는 역할을 담당한다.

##### 1.2 Template 

`Template` 이 실질적인 `index` 페이지 이다.

```html
    <>
      <S.Container>
        <RecoilRoot>
          <GlobalStyle />
          <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={title} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content="@사용자이름" />
            <meta name="twitter:creator" content="@사용자이름" />
          </Helmet>
          <S.NavigationContainer>
            <S.NavigationWrapper>
              <Introduction
                profileImage={imagePathList['superHero']}
                roketImage={imagePathList['rocket']}
              />
              {mount ? (
                <CategoryList
                  categoryList={categoryList}
                  selectedCategory={selectedCategory}
                  categoryCount={categoryCount}
                />
              ) : (
                <CategorySkeleton categoryList={categoryList} />
              )}
            </S.NavigationWrapper>
          </S.NavigationContainer>
          <S.MainContainer>
            <Header backgroundImg={imagePathList['sea']} />
            {children}
          </S.MainContainer>
        </RecoilRoot>
      </S.Container>
      <Footer />
    </>
```

`layout` 의 경우 좌측 `Side Nav Section` 과 우측 `Main Section` 으로 나뉜다.

`Main Section` 에서는 `Header` 를 `Sticky` 로 붙일 예정이고 `React Node` 를 전달하므로써 `Main Container` 안에 `Md` 파일의 내용이 렌더링 될 것이다.

최하단에는 `Footer` 의 레이아웃만 우선 잡아놓았고 추후에 개발 예정이다.

현재까지 완성본은 아래와 같다.

![image](https://user-images.githubusercontent.com/56063287/201806016-6deebc84-667c-4575-88c4-92387b4679ae.png)

각각의 섹션에 대한 내용 및 UI Interaction 과 관련된 내용은 각각 기능별로 정리하도록 할 예정이다.

