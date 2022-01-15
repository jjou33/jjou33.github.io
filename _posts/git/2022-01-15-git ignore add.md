---
title: "Git ignore 생성 및 적용"
excerpt: " :computer: Git과 관련된 설정을 기록하는 포스트 입니다."

categories:
  - git
tags:
  - Git
  - Git ignore
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```Git 과 관련된 내용을 기록하기 위한 포스트입니다.```
<hr>

#### 1. git ignore 파일 생성

---

`webpack` 과 관련되어 설정 후 `git` 에 올리려는 순간 `VS Code` 소스제어에 이상한 표시가 뜬다.

![image](https://user-images.githubusercontent.com/56063287/149625813-ec36959e-fcbf-4ded-a98f-5c0e93b29c2f.png)

흠...너무 많다 저걸 다 올릴 필요없이 설정 파일만 올려야겠다...라는 생각이 들어서 `node_modules` 경로를 제외시키기로 한다.

`node_modules` 는 `npm` 을 설치하면 생성되는 관련 파일들인데 무진장 많다.

방법은 이러하다.

1. `.git` 폴더가 있는 경로진입
2. `git ignore` 파일 생성 - `vim .gitignore` 진입 후 `i` 입력하여 `INSERT` 모드로 변경
3. 제외하고 싶은 폴더 경로 작성
4. `ESC(INSERT모드 나가기` 후 `wq(저장 후 종료)` 를 통해 저장후 종료

바로 사라진다.

그다음 `git` 저장소에 `add & commit & Push` 하면 된다.

#### 이미 commit 이 진행된 프로젝트 도중에 생성할 경우

---

본인처럼 진행중이던 프로젝트의 경우 올리기 전에 아래 작업이 필요하다.

```shell
$ git rm -r --cached .

$ git add .

$ git commit -m "git ignore add"

$ git push
```

실제 `.gitignore` 에 대해서 자세한 예시는 구글링통해 확인하자

#### .gitignore 파일 예시

---

- Github 제공 `.gitignore` 예시 링크

  - [https://github.com/github/gitignore](https://github.com/github/gitignore)

- `.gitignore` 파일 생성 사이트 링크
  - [https://www.gitignore.io/](https://www.gitignore.io/)

```js
# Directories #
/build/
/bin/
target/

# OS Files #
.DS_Store

*.class

# Package Files #
*.jar
*.war
*.ear
*.db

# Eclipse #
.project
.metadata
.classpath
.settings/
.loadpath

bin/**
tmp/**
tmp/**/*
*.tmp
*.bak
local.properties
/src/main/resources/rebel.xml
```

#### 참고 사이트

---

[https://gbsb.tistory.com/11](https://gbsb.tistory.com/11)
