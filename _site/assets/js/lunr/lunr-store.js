var store = [{
        "title": "등수 구하기",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 N 명의 점수를 입력한 배열 이 주어지고 그 배열의 등수 구하기 2. 코드 기본 솔루션 function solution(arr) { let n = arr.length // 길이 // 신규배열 생성(등수초기화) 및 1로 초기화 let tarr = Array.from({length: n},...","categories": ["Algorithm"],
        "tags": ["Programming"],
        "url": "/algorithm/%EB%93%B1%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "앞 수들 보다 큰 수만 구하기",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 입력값으로 N X N 행의 배열이 주어지고 해당 배열은 사람의 키를 의미한다. 맨앞에서 볼 때 보이는 사람일경우 즉, 자신의 앞 모든사람보다 키가 큰 사람을 구하라 2. 코드 기본 솔루션 function solution(arr) { let count =...","categories": ["Algorithm"],
        "tags": ["Programming","test","test1"],
        "url": "/algorithm/%EC%95%9E-%EC%88%98%EB%93%A4-%EB%B3%B4%EB%8B%A4-%ED%81%B0-%EC%88%98%EB%A7%8C-%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "최소값 구하기",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 설명 Javascript 알고리즘을 푸는데 최소값을 구하는 방법은 여러가지 모듈을 사용할 수 도 있지만 모듈을 사용하지 않고 사용하는 방법이 있다. 아래와 같이 가장 작은 값을 선언 후 비교값을 돌면서 대체 하는 방식이다. 2. 코드 모듈 미사용 function solution(arr)...","categories": ["Algorithm"],
        "tags": ["Programming"],
        "url": "/algorithm/%EC%B5%9C%EC%86%8C%EA%B0%92-%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "격자판 합 구하기",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 N X N 2차원 배열을 주어지고 행,열,대각선의 합 중 가장 큰 부분을 구하여라 2. 코드 먼저 문제를 보자마자 기억나는 아이디어는 합을 모두 구해서 배열에 담고 비교하자 였다. 그래서 보자마자 아래와 같이 빠르게 작성을 해보았다. 단순...","categories": ["Algorithm"],
        "tags": ["Programming"],
        "url": "/algorithm/%EA%B2%A9%EC%9E%90%ED%8C%90-%ED%95%A9-%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "봉우리 갯수 구하기",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 N X N 길이의 격자판에서 상하좌우 값보다 큰 경우 봉우리로 인정 및 Count 주어진 N X N 배열 가장자리는 0 으로 가정하여 전체 봉우리의 갯수 를 구하라. 2. 코드 먼저 문제를 보자마자 기억나는 아이디어는 합을...","categories": ["Algorithm"],
        "tags": ["Programming"],
        "url": "/algorithm/%EB%B4%89%EC%9A%B0%EB%A6%AC-%EA%B0%AF%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "회문 문자열",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 특정 문자열(String) 이 주어지고 해당 문자열이 회문 문자열에 해당하는지 여부를 판단하라. 2. 코드 기본 솔루션 // 직접비교 function solution(str) { let answerFlag = \"YES\" let length = Math.floor(str.length / 2) // 어차피 짝수,홀수 개일경우에도 중간은...","categories": ["Algorithm"],
        "tags": ["Programming","Palindrome"],
        "url": "/algorithm/%ED%9A%8C%EB%AC%B8-%EB%AC%B8%EC%9E%90%EC%97%B4/",
        "teaser": null
      },{
        "title": "유효한 팰린드룸",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 영문, 숫자, 문자로 섞인 문자열(String) 이 주어지고 이에 대한 회문문자열에 대한 정합성 즉, 유효한 팰린드룸을 확인한다. 2. 코드 //ASCII Code 값 비교를 통한 문자 제거 function solution(str) { let answer = \"YES\" // 정규식 사용...","categories": ["Algorithm"],
        "tags": ["Programming","Valid Palindrome"],
        "url": "/algorithm/%EC%9C%A0%ED%9A%A8%ED%95%9C-%ED%8C%B0%EB%A6%B0%EB%93%9C%EB%A3%B8/",
        "teaser": null
      },{
        "title": "NPM(Node Package Manager)",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. NPM 이란? NPM(Node Package Manager)는 전 세계 자바스크립트 개발자들이 올려놓은 공개된 라이브러리 저장소에 올라와 있는 자바스크립트 라이브러리를 명령어로 설치 및 관리할 수 있는 패키지 매니저 이다. 2. Node.js Node.js 가 나오기 전까지 자바스크립트는 브라우저에서만 동작을 제어하는 용도로 한정적으로 사용되었지만,...","categories": ["webpack"],
        "tags": ["Webpack","NPM(Node Package Manager)"],
        "url": "/webpack/NPM(Node-Package-Manager)/",
        "teaser": null
      },{
        "title": "가장 짧은 거리 구하기",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 문자열(String) 과 특정 문자를 입력받고 String안에서 특정문자와 각각의 이외의 문자와의 차이 중 가장 짧은 거리를 구하자. 2. 코드 //ASCII Code 값 비교를 통한 문자 제거 function solution(str, char) { let answer = [] let checkIdx...","categories": ["Algorithm"],
        "tags": ["Programming"],
        "url": "/algorithm/%EA%B0%80%EC%9E%A5-%EC%A7%A7%EC%9D%80-%EA%B1%B0%EB%A6%AC-%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "Webpack 정리",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. Webpack 이란? 웹팩(Webpack)이란 최신 프런트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러(Module Bundler)입니다. 모듈 번들러란 웹 애플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구를 의미한다. 2. 모듈 번들링 이란? 웹...","categories": ["webpack"],
        "tags": ["Webpack","모듈 번들러(Module Bundler)"],
        "url": "/webpack/Webpack-%EC%A0%95%EB%A6%AC/",
        "teaser": null
      },{
        "title": "자릿수의 합",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 N 개의 숫자가 배열로 주어지고 각 요소의 자릿수의 합 중 큰것 구하기. (같은 경우 실제로 요소값이 큰 값을 리턴) 2. 코드 // 반복문을 통해 직접 자릿수 합 계산 function solution(arr) { let max = Number.MIN_SAFE_INTEGER...","categories": ["Algorithm"],
        "tags": ["Programming"],
        "url": "/algorithm/%EC%9E%90%EB%A6%BF%EC%88%98%EC%9D%98-%ED%95%A9/",
        "teaser": null
      },{
        "title": "소수 구하기",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 주어진 숫자들의 역수를 검사하여 소수임을 확인하라. 2. 코드 // 소수 판별 function isPrime(num) { if (num === 1) return false; for (let i = 2; i &lt;= parseInt(Math.sqrt(num)); i++) { if (num % i ===...","categories": ["Algorithm"],
        "tags": ["Programming"],
        "url": "/algorithm/%EC%86%8C%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "멘토링(완전탐색)",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 M 번의 테스트에 대한 등수값이 주어지고 그안에서 N 명의 멘토, 멘티가 가능한 경우의 수를 구하라 (단, 멘토는 모든 테스트에서 멘티보다 등수가 높아야함) 2. 코드 function solution(test) { let answer = 0 let m = test.length...","categories": ["Algorithm"],
        "tags": ["Programming","Brute Force","완전탐색"],
        "url": "/algorithm/%EB%A9%98%ED%86%A0%EB%A7%81/",
        "teaser": null
      },{
        "title": "졸업선물(완전탐색)",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 M(자본금) 과 학생 선물의 가격(가격, 배송비) 배열을 입력받고 최대로 살 수 있는 갯수 구하기(상품50% 쿠폰1개 존재) 2. 코드 ffunction solution(product, m) { let answer = Number.MIN_SAFE_INTEGER let n = product.length // 할인받은 상품 // 상품가격,...","categories": ["Algorithm"],
        "tags": ["Programming","Brute Force","완전탐색"],
        "url": "/algorithm/%EC%A1%B8%EC%97%85%EC%84%A0%EB%AC%BC/",
        "teaser": null
      },{
        "title": "Two Pointers Algorithm",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 1차원 배열이 주어지면 2개의 가상의 포인터 즉, 각각 다른 원소를 가르키고 있는 포인터를 가지고 조작하며 원하는 비교를 통해 결과값을 얻어낸다. 2. 코드 2-1. 주어진 2개의 배열을 합쳐 오름차순으로 리턴하기 function solution2(arr1, arr2) { let answer...","categories": ["Algorithm"],
        "tags": ["Programming","Two Pointers Algorithm","투포인터 알고리즘"],
        "url": "/algorithm/Two-Pointers-Algorithm/",
        "teaser": null
      },{
        "title": "연속부분수열",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 N 개의 원소를 갖는 배열에서 연속된 수의 합이 6이 되는 경우 구하기 2. 코드 function solution(arr, m) { let lt = sum = 0 let n = arr.length let cnt = 0 for(let rt=0; rt...","categories": ["Algorithm"],
        "tags": ["Programming","Two Pointers Algorithm","투포인터 알고리즘","연속부분수열"],
        "url": "/algorithm/%EC%97%B0%EC%86%8D%EB%B6%80%EB%B6%84%EC%88%98%EC%97%B4/",
        "teaser": null
      },{
        "title": "연속부분수열2",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 N개의 숫자가 주어지면 연속부분수열의 합이 5 이하가 되는 경우를 구하여라 2. 코드 function solution(arr, m) { let sum = 0, lt = 0 let answer = 0 for(let rt=0; rt&lt;arr.length; rt++) { sum += arr[rt]...","categories": ["Algorithm"],
        "tags": ["Programming","Two Pointers Algorithm","투포인터 알고리즘","연속부분수열"],
        "url": "/algorithm/%EC%97%B0%EC%86%8D%EB%B6%80%EB%B6%84%EC%88%98%EC%97%B42/",
        "teaser": null
      },{
        "title": "최대매출(Sliding Window)",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 N 일간의 매출 기록이 주어지고 K 일간의 연속된 매출 중 최대 매출을 구하라 2. 코드 function solution(k, arr) { let answer = sum = 0 for(let i=0; i&lt;k; i++) { sum += arr[i] } answer...","categories": ["Algorithm"],
        "tags": ["Programming","Sliding Window"],
        "url": "/algorithm/%EC%B5%9C%EB%8C%80%EB%A7%A4%EC%B6%9C/",
        "teaser": null
      },{
        "title": "모든 아나그램 찾기(Hash, Sliding Window, 투포인트)",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 두개의 문자열 a,b 가 주어지고 a 에서 b 와 아나그램이 부합하는 경우의 수를 구하여라 2. 코드 function solution(a,b) { let th = new Map() // 기준 Map (b) let sh = new Map() // 비교...","categories": ["Algorithm"],
        "tags": ["Programming","Sliding Window"],
        "url": "/algorithm/%EB%AA%A8%EB%93%A0-%EC%95%84%EB%82%98%EA%B7%B8%EB%9E%A8-%EC%B0%BE%EA%B8%B0/",
        "teaser": null
      }]
