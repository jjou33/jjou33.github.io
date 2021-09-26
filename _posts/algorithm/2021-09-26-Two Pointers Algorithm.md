---
title:  "Two Pointers Algorithm"
excerpt: " :computer: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다."

categories:
  - Algorithm
tags:
  - Programming
  - Two Pointers Algorithm
  - 투포인터 알고리즘
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다.```
<hr>

#### 1. 문제 요건
***
**1차원 배열**이 주어지면 2개의 가상의 포인터 즉, **각각 다른 원소를 가르키고 있는 포인터를 가지고 조작하며 원하는 비교**를 통해 결과값을 얻어낸다.

#### 2. 코드
***

##### 2-1. 주어진 2개의 배열을 합쳐 오름차순으로 리턴하기
```javascript
function solution2(arr1, arr2) {
    let answer = [];
    let n = arr1.length;
    let m = arr2.length;
    let p1 = p2 = 0;
    while (p1 < n && p2 < m) {
        if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
        else answer.push(arr2[p2++]);
    }
    while (p1 < n) answer.push(arr1[p1++]);
    while (p2 < m) answer.push(arr2[p2++]);
    return answer;
}
```

##### 2-2. 2개의 배열 중 교집합(공통원소) 구하기
```javascript
// 투포인터 알고리즘 
function solution2(a,b) {
    let sortA = a.sort((a,b) => a-b)
    let sortB = b.sort((a, b) => a-b)
    let p1=p2=0
    let answer = []
    while(p1<sortA.length && p2<sortB.length) {
        if(sortA[p1] === sortB[p2]) {
            answer.push(sortA[p1++])
            p2++
        } else if(sortA[p1] < sortB[p2]) {
            p1++
        } else {
            p2++
        }
    }
    return answer
}

// 반복문

function solution(a,b) {
    let sortA = a.sort((a,b) => a-b)
    let answer = []
    for(let x of sortA) {
        for(let y of b) {
            if(x === y) {
                answer.push(x)
                break
            }
        }
    }
    return answer
}
```

#### 3. 결과정리
***

**두 문제 모두 반복문**을 통해 충분히 풀 수 있지만, **투 포인터 알고리즘의 개념**을 잡기 위해 풀어보면 **p1,p2 2개의 포인터를 가지고 증감**을 통해 주어진 배열을 **비교**하며 로직을 풀어나가는 형태이다.