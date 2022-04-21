---
title: "LRU(카카오 캐시변형)"
excerpt: " :computer: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다."

categories:
  - Algorithm
tags:
  - Programming
  - 삽입정렬변형
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다.```
<hr>

#### 개요
---

카카오 캐시변형 문제를 삽입정렬화 시킨 문제이다.

내장함수들을 이용해서는 간단하게 풀어보았지만, 내장함수를 사용하지 않고 삽입정렬로 풀어보니 조금 생각이 필요했다.


#### 1. 문제 요건

---

- 입력된 배열을 조건에 맞게 추가 및 삭제하여라.(조건은 생략)

#### 2. 코드

---

```javascript
// 내장함수 사용
function solution(arr) {
  // 0으로 된 빈 행렬
  let answer = Array.from({length:5}, ()=> 0);
  
  arr.forEach((v,i) => {
    // hit 한 경우 Index 를 찾는다.
    let hitIndex = answer.findIndex((e) => e === v);
    // hitIndex 가 -1 이 아닌경우 answer 내에 현재 v 값이 존재한다는 뜻
    if(hitIndex > 0) {
      // 맨앞에 hitIndex 값을 넣는다.
      answer.unshift(answer.splice(hitIndex, 1)[0])
    } else {
      // 없을 경우 맨앞에 v 값을 넣는다.
      answer.unshift(v)
      // 길이가 5가 넘어가면 맨 뒤에값 삭제
      if (answer.length > 5) {
        answer.pop()
      } 
    }
  })
  return answer
}

function solution2(arr) {
  // 빈 0으로 초기화된 배열 생성
  let answer = Array.from({length: 5}, () => 0);
  arr.forEach((v,i) => {
    // answer 내에 현재 v 값이 존재하는지 확인
    let hitIndex = answer.findIndex((e) => e === v)
    // 존재하지 않으면
    if(hitIndex < 0) {
      // 맨 마지막 인덱스부터 1번 인덱스까지 값을 한칸씩 뒤로 변경
      for(let j=4; j > 0; j--) {
        answer[j] = answer[j-1]
      }
    } else {
      // 존재하면
      for(let j= hitIndex; j > 0; j--) {
        // 존재하는 인덱스부터 1번 인덱스까지 한칸씩 변경
        answer[j] = answer[j-1]
      }
    }
    // 맨앞에 v 입력
    answer[0] = v
  })
  return answer 
}
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(arr));
```

#### 3. 결과정리

---

자세한 설명은 주석을 확인한다.

이 문제는 내장함수를 이용해서는 간단하게 풀 수 있는 문제였다.
다만, 내장함수 없이 실제 삽입정렬로 작성하면 조금의 생각이 필요한 부분이었다.

중요한 포인트는 맨뒤에서부터 앞으로 수를 밀어내는 아이디어인것 같다.



