---
title: "requireConfigFile /  ␍ 에러 정리"
excerpt: " :computer: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다."

categories:
  - devEnv
tags:
  - requireConfigFile 에러
  - ␍ 에러
toc: true
toc_sticky: true
toc_label: "POST LIST"
classes: wide
---

<hr>
:raising_hand:  ```개발환경 에러에 대한 내용 및 해결방안을 기록하는 포스트 입니다.```
<hr>

#### 1. 개요

---

개인적인 프로젝트를 진행하면서 발생했던 에러 모음

#### 2. requireConfigFile 에러

---≈≈

![image](https://user-images.githubusercontent.com/56063287/176060049-99679efc-42b6-4110-9b1f-a258a4e831d7.png)

발생시

`Setting.json` 에

`"eslint.workingDirectories": [{ "mode": "auto" }],` 설정 추가

#### 3. Visual studio Delete ␍ prettier/prettier 에러 해결 방법
---

`Vue` 파일을 생성하면 `Delete ␍ ~!@%%@` 이런 에러가 계속해서 `eslint`가 알려준다.

![image](https://user-images.githubusercontent.com/56063287/176377324-0ae84e52-7804-449a-a8e0-85d7a45d5623.png)

해결방법은 아래와 같다.

`eslintrc` 일수도 있고 어쨋든 `eslint` 설정한 `rules` 부분에 설정을 추가한다.

```
...생략
rules: {
		'no-console': 'off',
		// "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		// "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		'prettier/prettier': [
			'error',
			{
                ...생략
				endOfLine: 'auto',
			},
		],
...생략
```

