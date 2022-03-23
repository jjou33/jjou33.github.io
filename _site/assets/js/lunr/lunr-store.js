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
        "tags": ["Programming","Sliding Window","해쉬(Hash)","Two Pointers Algorithm"],
        "url": "/algorithm/%EB%AA%A8%EB%93%A0-%EC%95%84%EB%82%98%EA%B7%B8%EB%9E%A8-%EC%B0%BE%EA%B8%B0/",
        "teaser": null
      },{
        "title": "괄호문자제거(스택)",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 괄호와문자로 이루어진 문자열을 입력받고 괄호 사이에 들어가있는 단어를 모두 제거하라 2. 코드 function solution(s) { let stack = [] for(let x of s) { if(x === \")\") { while(stack.pop()!==\"(\"); } else { stack.push(x); } }...","categories": ["Algorithm"],
        "tags": ["Programming","Stack"],
        "url": "/algorithm/%EA%B4%84%ED%98%B8%EB%AC%B8%EC%9E%90%EC%A0%9C%EA%B1%B0(%EC%8A%A4%ED%83%9D)/",
        "teaser": null
      },{
        "title": "후위식 연산(post fix)",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 후위식 연산값을 입력받고 결과값을 리턴하여라 2. 코드 function solution(s) { let result = lv = rv = 0 let operator = ['+','-','*','/'] let stack = [] for(let x of s) { if(!isNaN(x)) { stack.push(Number(x)) }...","categories": ["Algorithm"],
        "tags": ["Programming","Stack","Post Fix"],
        "url": "/algorithm/%ED%9B%84%EC%9C%84%EC%8B%9D-%EC%97%B0%EC%82%B0(post-fix)/",
        "teaser": null
      },{
        "title": "쇠막대기(Stack)",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 괄호의 조합(ex. ()(())()()) 을 입력받으며, ’(‘ 문자는 쇠막대기가 추가된다고 가정하고 ’()’ 의 경우 해당 시점의 막대기를 자른다고 생각한다. 입력받은 조합에서 몇개의 막대기가 나오는지 구한다. 2. 코드 function solution(a) { let stack = [] let answer...","categories": ["Algorithm"],
        "tags": ["Programming","Stack"],
        "url": "/algorithm/%EC%87%A0%EB%A7%89%EB%8C%80%EA%B8%B0(Stack)/",
        "teaser": null
      },{
        "title": "Webpack 시작하기",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. Webpack Start!! 앞선 작업물에서 WebPack 프로젝트를 만들고 NPM 을 통해 환경을 구축하였다. 이제 실제 Webpack을 시작해보도록 한다. 1.1. index.js import _ from 'lodash'; function component() { var element = document.createElement('div'); /* lodash is required for the next line to...","categories": ["webpack"],
        "tags": ["Webpack","NPM(Node Package Manager)"],
        "url": "/webpack/%EC%9B%B9%ED%8C%A9-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "Script 설정 관리 (webpack.config.js)",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. webpack.config.js { \"name\": \"webpack-start\", \"version\": \"1.0.0\", \"description\": \"\", \"main\": \"index.js\", \"scripts\": { \"test\": \"echo \\\"Error: no test specified\\\" &amp;&amp; exit 1\", \"build\": \"webpack --mode=none\" }, \"keywords\": [], \"author\": \"\", \"license\": \"ISC\", \"devDependencies\": { \"webpack\": \"^5.44.0\", \"webpack-cli\": \"^4.7.2\" }, \"dependencies\":...","categories": ["webpack"],
        "tags": ["Webpack","config","lodash"],
        "url": "/webpack/Script-%EC%84%A4%EC%A0%95-%EA%B4%80%EB%A6%AC-(webpack.config.js)/",
        "teaser": null
      },{
        "title": "Webpack 변환 전/후 성능비교",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. 변환 전 소스 및 성능 1-1. index.html &lt;!-- index.html --&gt; &lt;html&gt; &lt;head&gt; &lt;title&gt;Webpack Demo&lt;/title&gt; &lt;script src=\"https://unpkg.com/lodash@4.16.6\"&gt;&lt;/script&gt; &lt;/head&gt; &lt;body&gt; &lt;script src=\"src/index.js\"&gt;&lt;/script&gt; &lt;!-- &lt;script src=\"dist/main.js\"&gt;&lt;/script&gt; --&gt; &lt;/body&gt; &lt;/html&gt; 1-2. index.js function component() { var element = document.createElement('div'); /* lodash is required...","categories": ["webpack"],
        "tags": ["Webpack","성능비교"],
        "url": "/webpack/Webpack-%EB%B3%80%ED%99%98-%EC%A0%84%ED%9B%84%EC%84%B1%EB%8A%A5%EB%B9%84%EA%B5%90/",
        "teaser": null
      },{
        "title": "Webpack First Principle 영상 리뷰",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. Webpack First Principle 현재 공부하고 있는 강의에서 webpack 에 대한 유투브 분석 강의를 보았다. 유투브 링크 이 영상의 초기에는 특정 Application 을 만들어 놓고 집에서 쾌적한 인터넷 환경에서 할 경우와 어딘가 굉장히 느린 환경에서 웹 페이지 속도를 크롬 개발자...","categories": ["webpack"],
        "tags": ["Webpack","Webpack from firstprinciples","youtude"],
        "url": "/webpack/Webpack-First-Principle-%EC%98%81%EC%83%81-%EB%A6%AC%EB%B7%B0/",
        "teaser": null
      },{
        "title": "JavaScript 문법 중 기억할 것",
        "excerpt":":raising_hand: JavaScript 문법 내용을 기록하기 위한 포스트입니다. 1. NULL VS undefined NULL : 값이 없음을 나타낸다. undefined : 값이 할당되지 않았음을 나타낸다. 1-1. 예제 let value1; let value2 = null; console.log(typeof value1, value1); console.log(typeof value2, value2); 1-1. 결과 ** undefined 의 경우는 타입과 값이 모두 ‘undefined’ 로 나오지만 null 의...","categories": ["JavaScript"],
        "tags": ["JavaScript"],
        "url": "/javascript/basic-language-skill/",
        "teaser": null
      },{
        "title": "MAC 에서 사용중인 Port 죽이기",
        "excerpt":":raising_hand: 개인적인 MAC OS 설정 내용을 기록하기 위한 포스트입니다. MAC 사용중인 포트의 PID 찾기 sudo lsof -i:포트번호 사용중인 포트 종료하기 // PID 조회 sudo lsof -i:4000 COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME ruby 4020 root 11u IPv4 0x7c07039bcf2cf1b7 0t0 TCP localhost:terabase (LISTEN) **강제 종료 커맨드** sudo kill...","categories": ["mac"],
        "tags": ["MAC OS","Port Kill"],
        "url": "/mac/Port-Kill/",
        "teaser": null
      },{
        "title": "Webpack 에 대한 정의와 배경, 사용이유",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. 모듈(Module)이란? 모듈이란 프로그래밍 관점에서 특정 기능을 갖는 작은 코드 단위를 의미한다. // math.js // 함수 function sum(a, b) { return a + b; } // 함수 function substract(a, b) { return a - b; } // 상수 const pi...","categories": ["webpack"],
        "tags": ["Webpack","Webpack Definition"],
        "url": "/webpack/webpack-definition/",
        "teaser": null
      },{
        "title": "ES6 Arrow Function",
        "excerpt":":raising_hand: JavaScript 문법 내용을 기록하기 위한 포스트입니다. 1. ES6 화살표 함수 (Arrow Function, ‘=&gt;’) 선언 함수 선언을 보다 간단하게 하기 위해 고안되었다. 화살표 함수는 익명 함수이다. 따라서 호출하기 위해 변수에 대입하는 경우가 많다. let function = (함수인자) =&gt; { expression } let function = (함수인자) =&gt; { statements } let...","categories": ["JavaScript"],
        "tags": ["JavaScript","Arrow Function"],
        "url": "/javascript/Arrow-Function/",
        "teaser": null
      },{
        "title": "JavaScript 객체 / Prototype",
        "excerpt":":raising_hand: JavaScript 문법 내용을 기록하기 위한 포스트입니다. 1. 객체 javscript 객체는 Property 와 Method(함수) 로 이루어져있고,Property 는 보통 Key, Value 로 이루어져 있다. 1-1. 객체 생성 방법 객체 리터럴 방식 new Object() 생성 방식 생성자 함수로 생성 ES6 기반 객체생성 2. Property 와 Method Property 는 Key, Value 로 이루어져...","categories": ["JavaScript"],
        "tags": ["JavaScript","Arrow Function","prototype","property","Object"],
        "url": "/javascript/javascript-Object/",
        "teaser": null
      },{
        "title": "ES6 Class 객체",
        "excerpt":":raising_hand: JavaScript 문법 내용을 기록하기 위한 포스트입니다. 1. 클레스(Class) Class명 {} 로 함수와 같이 정의 가능 Class 내부에 Constructor() 를 통해 프로퍼티 및 값을 정의한다. Method 는 Class 안에 정의하면 된다. class myClass { constructor() { this.v1 = 1; this.v2 = \"string\"; } getMydate() { return \"hello\"; } } const...","categories": ["JavaScript"],
        "tags": ["JavaScript","ES6","Class"],
        "url": "/javascript/ES6-Class/",
        "teaser": null
      },{
        "title": "ES6 Array 배열",
        "excerpt":":raising_hand: JavaScript 문법 내용을 기록하기 위한 포스트입니다. 1. 배열 선언 및 사용 1-1. 객체처럼 생성 const arrObject = new Array(); arrObject[0] = 1; arrObject[1] = \"hi\"; 1-2. 다양한 배열 사용법 cconst arr1 = [1, 2, \"String\", null]; // 배열 안에 객체 저장 const arr2 = [ { value1: 1, value2:...","categories": ["JavaScript"],
        "tags": ["JavaScript","ES6","Array"],
        "url": "/javascript/ES6-Array/",
        "teaser": null
      },{
        "title": "ES6에서 추가된 문법",
        "excerpt":":raising_hand: JavaScript 문법 내용을 기록하기 위한 포스트입니다. 1. 삼항 연산자 조건문을 좀 더 간결하게 사용할 수 있다. const data = 3; if(data === 3) { console.log(\"S\"); } else { console.log(\"F\"); } 위 조건문을 삼항연산자를 통해 작성하면 아래와 같다 data === 3 ? console.log(\"S\") : console.log(\"F\"); 2. 함수 Default 값 설정...","categories": ["JavaScript"],
        "tags": ["JavaScript","ES6 추가 문법"],
        "url": "/javascript/ES6-javascript/",
        "teaser": null
      },{
        "title": "Javascript Hoisting(호이스팅)에 관하여",
        "excerpt":":raising_hand: JavaScript 문법 내용을 기록하기 위한 포스트입니다. 1. 호이스팅이란? 호이스팅이란 끌어 올리다 의 뜻으로 이해하면 된다. 우리가 알고 있는 여러 언어들은 통상 일반적으로 함수 또는 변수를 선언한 후에 아래 라인에서 선언한 것들을 사용 가능 하지만 Javascript 의 경우에는 함수 또는 변수를 선언하기 전에 사용해도 에러가 나지 않는 현상을 말한다. 2....","categories": ["JavaScript"],
        "tags": ["JavaScript","Hoisting(호이스팅)"],
        "url": "/javascript/Hoisting/",
        "teaser": null
      },{
        "title": "Scope 에 대하여",
        "excerpt":":raising_hand: JavaScript 문법 내용을 기록하기 위한 포스트입니다. 1. Scope 란? javascript 변수 또는 함수 선언 시 해당 변수가 유효한 범위를 의미한다. 3가지 전역(Global) , 함수(Function), Block(블록) Scope 가 있으며 선언에 따라 유효범위가 다르기 때문에 이해가 필요함 { } , 함수안에서 사용되지 않아 전역으로 범위가 설정된다. let a = 3 //...","categories": ["JavaScript"],
        "tags": ["JavaScript","Scope"],
        "url": "/javascript/Scope/",
        "teaser": null
      },{
        "title": "동기 / 비동기 처리에 대한 이해",
        "excerpt":":raising_hand: JavaScript 문법 내용을 기록하기 위한 포스트입니다. 1. 동기 / 비동기란? Syncronous(동기) : 요청을 보낸 후, 해당 요청을 기다렸다가 응답을 받은 다음 동작을 실행하는것 즉, 순차적으로 코드가 진행된다. Asyncronous(비동기) : 요청을 보낸 후, 응답을 기다리지 않고 다음 코드를 실행한다. Javascript 는 다른 언어와 마찬가지로 동기적 처리가 기본이지만, 일부 기능은 비동기로...","categories": ["JavaScript"],
        "tags": ["JavaScript","Syncronous","Asyncronous"],
        "url": "/javascript/Syncronous/",
        "teaser": null
      },{
        "title": "Promise",
        "excerpt":":raising_hand: JavaScript 문법 내용을 기록하기 위한 포스트입니다. 1. Promise 란? 비동기 처리를 위한 콜백함수의 단점을 보완하기 위해 제안됨 Promise 객체 생성 Promise 객체에서는 executor 라는 함수가 자동으로 실행되고, executor 라는 함수는 resolve 와 reject 라는 두 개의 함수를 인자로 받아서 비동기 처리 함수를 실행 executor 를 통해 비동기 처리 함수를...","categories": ["JavaScript"],
        "tags": ["JavaScript","Promise"],
        "url": "/javascript/Promise/",
        "teaser": null
      },{
        "title": "웹 브라우저 동작 과정",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. DOM(Document Object Model) &amp; Window Document : 우리가 알고 있는 HTML 의 전체 코드로 이해하면 되고 각 태그들을 객체로 이해하면 된다. DOM tree 의 최상위 객체이다. 위 이미지에서 보이 듯이 우리는 Document 라는 모든 HTML 코드를 가지고 있는 요소아래 각 태그들을 객체로...","categories": ["browserProcess"],
        "tags": ["F/E","DOM","BOM","Render"],
        "url": "/browserprocess/Web-Browser-Process/",
        "teaser": null
      },{
        "title": "Prettier 적용 안될때 해결",
        "excerpt":":raising_hand: 개발환경 설정과 관련된 설정을 기록하는 포스트 입니다. 1. Prettier 설치 Prettier 는 VS Code 에서 사용자의 코드를 정리해주는 확장 프로그램이 있다. 왼쪽 바에서 마켓 플레이스 진입 후 Prettier 설치한다. 2. 적용 후 설정 필요 2-1. Format on Save 확인 cmd + , 로 설정 진입 후 format on save...","categories": ["devEnv"],
        "tags": ["VS Code","Prettier"],
        "url": "/devenv/Prettier/",
        "teaser": null
      },{
        "title": "Modules",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. import &amp; export 기본 문법 export : 특정 파일에서 쓸 변수, 함수 등을 내보내는 문법 익스포트한 대상은 다른 파일에서 import 를 통해 사용 가능 export 변수, 함수 import : export 된 변수 혹은 함수를 사용할 경우 import { export...","categories": ["webpack"],
        "tags": ["Webpack","Modules"],
        "url": "/webpack/Modules/",
        "teaser": null
      },{
        "title": "Webpack 의 주요 속성 소개",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. 실습코드 module.exports = { mode: \"production\", entry: \"./js/app.js\", output: { path: path.resolve(__dirname, \"build\"), filename: \"main.bundle.js\", }, module: { rules: [ { test: /\\.m?js$/, exclude: /(node_modules|bower_components)/, use: { loader: \"babel-loader\", options: { presets: [\"@babel/preset-env\"], }, }, }, ], }, stats:...","categories": ["webpack"],
        "tags": ["Webpack","속성"],
        "url": "/webpack/Webpack-%EC%86%8D%EC%84%B1/",
        "teaser": null
      },{
        "title": "Plugin 사용",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. 플로그인 설정 우리는 다양한 플러그인들을 다양한 방법으로 개발에 사용하고 있다. 대부분의 플러그인들은 우리가 하는 개발을 조금 더 편하게하고 기본기능은 보존한채 추가적인 방향으로 바꿔서 편리하게 사용할 수 있게 하고 있다 이처럼 플러그인을 사용하는 방법도 알아두면 좋을것 같다. 이전에 modules 에서...","categories": ["webpack"],
        "tags": ["Webpack","Plugin"],
        "url": "/webpack/plugin/",
        "teaser": null
      },{
        "title": "웹 브라우저 동작 과정 2차",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. Browser 요소(Elements) 사용자 인터페이스 : 우리가 브라우저에서 볼수 있는 주소표시줄, 버튼 등 사용자가 컨트롤 할 수 있는 부분 브라우저 엔진 : 사용자 인터페이스와 렌더링 엔진 사이 동작을 제어 렌더링 엔진 사용자가 요청한 URI 를 브라우저 엔진 으로부터 받아 서버에 요청한다. 서버로 URI...","categories": ["browserProcess"],
        "tags": ["F/E","Browser Element","Rendering Process"],
        "url": "/browserprocess/Web-Browser-Process2/",
        "teaser": null
      },{
        "title": "Webpack Bundling",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. 실습내용 웹팩을 구축하고 실제 html 파일에서 bundle.js 내용을 그려주면 아래와 같이 적용이 되는 실습을 하였다. 실습 결과 페이지 이때 우리는 글자 색을 바꾸기 위해 base.css 에 p 태그 색을 지정하였고 index.js 에서 import 하여 build 하였다. 최종적으로 bundle.js 에...","categories": ["webpack"],
        "tags": ["Webpack","Bundling 실습"],
        "url": "/webpack/bundle/",
        "teaser": null
      },{
        "title": "Webpack Dev Server",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. Webpack DEV 서버란? 실제 빌드 전 개발 서버로 실제 파일 시스템에 build 가 완료된 파일을 만들지 않고 인메모리 상에만 올려놓아 개발하는 기능 2. 실습내용 2-1. 프로젝트 내 신규 폴더 새야성 후 npm 설정 시작 npm init -y package.json 생성...","categories": ["webpack"],
        "tags": ["Webpack","Bundling 실습"],
        "url": "/webpack/webpack-dev-server/",
        "teaser": null
      },{
        "title": "html webpack plugin(플러그인 사용법)",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. html-webpack-plugin 사용법 기록 앞서 플러그인 사용법을 봤지만 이번에 새로 사용하는 겸 기록해둔다. var path = require(\"path\"); var HtmlWebpackPlugin = require(\"html-webpack-plugin\"); module.exports = { mode: \"none\", entry: \"./index.js\", output: { filename: \"bundle.js\", path: path.resolve(__dirname, \"dist\"), }, devServer: { port: 9000,...","categories": ["webpack"],
        "tags": ["Webpack","html Webpack Plugin"],
        "url": "/webpack/html-webpack-plugin/",
        "teaser": null
      },{
        "title": "html 기본 개념 및 공부정리",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. HTML 5 기본 템플릿 분석 &lt;!DOCTYPE html&gt; &lt;html lang=\"en\"&gt; &lt;head&gt; &lt;meta charset=\"UTF-8\" /&gt; &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /&gt; &lt;title&gt;Document&lt;/title&gt; &lt;/head&gt; &lt;body&gt;&lt;/body&gt; &lt;/html&gt; 1-1.DOCTYPE DOCTYPE 은 브라우저에게 해당 페이지가 HTML 로 작성된 문서임을 알려준다. 즉, 이 문서가 HTML 임을 브라우저에게 알려준다. 1-2. HTML...","categories": ["htmlcss"],
        "tags": ["F/E","HTML Basic"],
        "url": "/htmlcss/html-basic/",
        "teaser": null
      },{
        "title": "CSS 관련 링크",
        "excerpt":"  :raising_hand:  프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다.    1. 관련링크     Javscript 혹은 css 로 특정 값에 대한 이벤트를 먹이는 경우가 많다.   이때 정규식을 쓰면 좋은데 자주쓰는 것들을 익히기 좋은 사이트가 있어 기록해논다.   http://www.w3bai.com/ko/tags/att_input_pattern.html   2. CSS Color 관련 링크        https://www.w3schools.com/colors/colors_names.asp   https://material.io/design/color/the-color-system.html#tools-for-picking-colors   https://color.adobe.com/ko/explore   위 세가지 사이트에서 색상을 찾기 유용하다.  ","categories": ["htmlcss"],
        "tags": ["F/E","CSS Reference"],
        "url": "/htmlcss/css-reference-copy/",
        "teaser": null
      },{
        "title": "Git Password -> Token 변경 이슈",
        "excerpt":":raising_hand: Git 과 관련된 내용을 기록하기 위한 포스트입니다. 1. 오류사항 어느날 여느때와 같이 알고리즘을 풀고 깃에 올리려는 순간?? 에러가 발생한다. remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead. remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information. fatal: unable to access 'https://github.com/*****/*******.git/':...","categories": ["git"],
        "tags": ["Git","Git Token","Git Password"],
        "url": "/git/gitissue/",
        "teaser": null
      },{
        "title": "Vanilla Javscript 구현팁(dataset)",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. render 함수 구현 아래는 공부하고 있는 프로젝트에서 만든 render 함수이다. 여기서 기록해노을 내용은 dataset 함수를 통한 태그 특정하는 기능이다. const render = (menu) =&gt; { const template = menu .map((item, index) =&gt; { return `&lt;li data-menu-id=\"${index}\" class=\"menu-list-item d-flex items-center py-2\"&gt; &lt;span class=\"w-100...","categories": ["devhistory"],
        "tags": ["Vanilla Javscript","dataset"],
        "url": "/devhistory/render-%EA%B5%AC%ED%98%84-%EC%84%A4%EB%AA%85/",
        "teaser": null
      },{
        "title": "Vanilla Javscript 구현팁(Closest)",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. Closest 전달받은 타겟 정보(클라이언트에서 받은 이벤트정보)가 발생 시 가장 가까운 특정 태그를 찾는방법 render 를 통해서 아래와 같이 태그가 추가된다. const render = (menu) =&gt; { const template = menu .map((item, index) =&gt; { return `&lt;li data-menu-id=\"${index}\" class=\"menu-list-item d-flex items-center py-2\"&gt; &lt;span...","categories": ["devhistory"],
        "tags": ["Vanilla Javscript","closest"],
        "url": "/devhistory/closest-%ED%95%A8%EC%88%98/",
        "teaser": null
      },{
        "title": "forEach, map, filter, reduce",
        "excerpt":":raising_hand: JavaScript 문법 내용을 기록하기 위한 포스트입니다. forEach, map, filter, reduce 네개의 메서드에 관해서 간략하게 기록한다. 4개의 메서드는 모두 함수값을 전달 받는 고차함수이다. 1. foreach forEach 문은 배열에 접근할 때 for 반복문 대신 접근할 수 있는 내장 메서드 이다. let a = [10, 11, 12, 13, 14, 15]; a.forEach( function...","categories": ["JavaScript"],
        "tags": ["JavaScript","foreach","map","filter","reduce"],
        "url": "/javascript/forEach,-map,-filter,-reduce/",
        "teaser": null
      },{
        "title": "Vanilla Javscript 구현 - 좋아요 갯수증감 버튼",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. 문제 내용 코딜리티를 구경하던 중 간단한 구현과제 문제가 보여서 바닐라로 구현해보았다. 문제는 간단하게 “LIKE | { 좋아요갯수 }” 버튼을 생성하고 누를때마다 좋아요 갯수를 증/감 하는 문제이다. 특별한건 없지만 최대한 깔끔하게 짜도록 노력해보았고, 조금씩 다른사람 코드도 보면서 배우도록 해야겠다. 문제의 조건보다는 실제 기능...","categories": ["devhistory"],
        "tags": ["Vanilla Javscript","dataset"],
        "url": "/devhistory/likeCount-%EA%B5%AC%ED%98%84/",
        "teaser": null
      },{
        "title": "SPA 개념 및 구현내용",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. SPA(Single Page Application) 이란 무엇일까? 현 회사에서는 VUE.js 로 모바일 프론트를 개발하고 운영하고 있다. 나름 SPA 시스템을 운영하고 있다고 생각하던 찰나, Vanilla JS 로 SPA 페이지를 구현하는 과제 문제를 풀게되었다. 풀어나가는 도중 스스로 SPA 에 대한 정확한 지식 없이 그냥저냥 운영하고 개발만...","categories": ["spa"],
        "tags": ["F/E","SPA"],
        "url": "/spa/SPA%EA%B0%9C%EB%85%90/",
        "teaser": null
      },{
        "title": "배열 내 특정값 삭제",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 주어진 배열 내 특정값을 찾아 제거한다. 2. 코드 function solution(arr) { let testArr = arr; // reduce 를 통한 arr 배열의 합 구하기 let sum = arr.reduce((a, b) =&gt; a + b, 0); // 이중...","categories": ["Algorithm"],
        "tags": ["Programming","Array","reduce"],
        "url": "/algorithm/%EB%B0%B0%EC%97%B4-%EB%82%B4-%ED%8A%B9%EC%A0%95-%EC%A1%B0%EA%B1%B4%EC%97%90-%EB%A7%9E%EB%8A%94-%EA%B0%92-%EC%A0%9C%EA%B1%B0/",
        "teaser": null
      },{
        "title": "이벤트 루프에 관하여",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. 개요 우리가 사용하는 자바스크립트 엔진은 단일 호출 스텍을 사용한다. 즉, 웹 브라우저에서 요청한 작업들을 동시에 하나만 처리할 수 있다는 개념이다. 그러나 우리는 웹 브라우저에서 여러가지 작업들이 동시에 동작하는 것, 동시성을 보장하는 것을 볼 수 있다. 실제 자바 스크립트가 구동되는 환경(브라우저, Node.js 등)...","categories": ["eventLoop"],
        "tags": ["F/E","Event Loop"],
        "url": "/eventloop/eventloop/",
        "teaser": null
      },{
        "title": "Javascript Engine(Heap, Call stack)",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 개요 앞선 포스트에서 이벤트 루프 에 대하여 공부해봤다. 공부를 하다보니 Javascript Engine 에 대하여 궁금증 이 생겨 추가로 공부하여 기록한다. 1. JavaScript Engine 자바스크립트 엔진은 각 브라우저 별로 상이하다. SpiderMonkey : 파이어 폭스 V8 : Crome Webkit : 사파리 Chakra : 익스플로러, 엣지...","categories": ["eventLoop"],
        "tags": ["F/E","Javascript Engine","Heap","Call stack"],
        "url": "/eventloop/Javascript-Engine/",
        "teaser": null
      },{
        "title": "MAC Operation not permitted 에러",
        "excerpt":"  :raising_hand:  개인적인 MAC OS 설정 내용을 기록하기 위한 포스트입니다.    맥 오류 증상        위와 같이 터미널에서 명령어를 치면 권한관련 ‘Operation not permitted’ 에러 메시지가 나오게 된다.   해결방법     [설정]-[보안 및 개인 정보 보호]-[개인정보 보호]-전체 디스크 접근 권한]-[터미널]에 대한 보안을 해제 하면 된다.     ","categories": ["mac"],
        "tags": ["MAC OS","권한오류"],
        "url": "/mac/mac-error/",
        "teaser": null
      },{
        "title": "Webpack 실습 (1) - 패키지 설치 및 버전관리",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. npm init() 프로젝트 폴더 이동 후 npm init 실행 npm init() init 후 config 설정 command 로 설정이 완료된 후 실제 프로젝트 폴더 내 package.json 파일 확인 { \"name\": \"webpackstudy\", \"version\": \"1.0.0\", \"description\": \"my webpack study\", \"main\": \"index.js\", \"scripts\":...","categories": ["webpack"],
        "tags": ["Webpack","npm","유의적 버전","버전 관리","틸트(~)","캐럿(^)"],
        "url": "/webpack/webpack-%EC%8B%A4%EC%8A%B5-day1/",
        "teaser": null
      },{
        "title": "Webpack 실습 (2) - 개념정리",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. import/Export 없는 이전의 함수 사용법 및 문제점 ES2015 부터 모듈을 지원했기 때문에 이전에는 script 를 html 에서 불러와 로딩하여 사용하였다. // math.js function sum(a, b) { return a + b; } // app.js console.log(sum(1, 2)); &lt;!DOCTYPE html&gt; &lt;html lang=\"en\"&gt;...","categories": ["webpack"],
        "tags": ["Webpack","사용배경","IIFE"],
        "url": "/webpack/webpack-%EC%8B%A4%EC%8A%B5-day2/",
        "teaser": null
      },{
        "title": "Webpack 실습 (3) - 초기설치 및 설정",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. webpack / webpack-cli 설치 // webpack 4 버전 설치 npm install -D webpack@4 webpack-cli // package.json \"author\": \"\", \"license\": \"ISC\", \"bugs\": { \"url\": \"https://github.com/jjou33/webpackStudy/issues\" }, \"homepage\": \"https://github.com/jjou33/webpackStudy#readme\", \"dependencies\": { \"webpack\": \"^4.46.0\", \"webpack-cli\": \"^4.9.1\" } package.json 에 devDependencies 확인 2....","categories": ["webpack"],
        "tags": ["Webpack","초기설정","npm 설치"],
        "url": "/webpack/webpack-%EC%8B%A4%EC%8A%B5-day3/",
        "teaser": null
      },{
        "title": "Webpack 실습 (4) - Loader & Module",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 1. Loader 웹팩은 자바스크립트, 스타일시트, 이미지, 폰트 등 모든 소스를 각각의 모듈로 바라보기 때문에 import 구문을 사용하여 외부 소스를 활용한다. 이는 웹팩의 로더(Loader)의 존재 때문인데 로더는 여러가지 언어들을 javascript 문법으로 변환해 주거나 image를 data URL 형식의 문자열로 변환하거나 CSS 파일을...","categories": ["webpack"],
        "tags": ["Webpack","Loader","Module"],
        "url": "/webpack/webpack-%EC%8B%A4%EC%8A%B5-day4/",
        "teaser": null
      },{
        "title": "Webpack 실습 (5) - 주요 Loader 실습",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 실무에서 주로 사용하는 대표적인 로더들에 대한 실습을 진행해본다. 1. CSS Loader CSS-Loader : css 코드를 javascript 로 가져와서 사용 가능 // app.js import \"./app.css\"; 위 코드와 같이 import css 구문을 자바스크립트에서 실행해 주는 것이 CSS Loader 의 역할이다. npm install...","categories": ["webpack"],
        "tags": ["Webpack","css-loader","style-loader","file-loader"],
        "url": "/webpack/webpack-%EC%8B%A4%EC%8A%B5-day5/",
        "teaser": null
      },{
        "title": "Git ignore 생성 및 적용",
        "excerpt":":raising_hand: Git 과 관련된 내용을 기록하기 위한 포스트입니다. 1. git ignore 파일 생성 webpack 과 관련되어 설정 후 git 에 올리려는 순간 VS Code 소스제어에 이상한 표시가 뜬다. 흠…너무 많다 저걸 다 올릴 필요없이 설정 파일만 올려야겠다…라는 생각이 들어서 node_modules 경로를 제외시키기로 한다. node_modules 는 npm 을 설치하면 생성되는 관련...","categories": ["git"],
        "tags": ["Git","Git ignore"],
        "url": "/git/git-ignore-add/",
        "teaser": null
      },{
        "title": "Webpack 실습 (6) - Plugin 기본 개념정리",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 실무에서 주로 사용하는 대표적인 로더들에 대한 실습을 진행해본다. 1. Plugin 이란 무엇이며 역할은 무엇일까? loader 를 통해서 파일단위로 다양한 처리를 하였다면 plugin 을 통해서는 bundling 된 결과물을 처리한다. 예를 들면 bundling 된 javascript 를 난독화하거나 특정 텍스트를 추출 하는 용도이다....","categories": ["webpack"],
        "tags": ["Webpack","Plugin","기본개념"],
        "url": "/webpack/webpack-%EC%8B%A4%EC%8A%B5-day6/",
        "teaser": null
      },{
        "title": "Webpack 실습 (7) - 주요 Plugin 실습",
        "excerpt":":raising_hand: 개인적인 Webpack 학습 및 공부 내용을 기록하기 위한 포스트입니다. 대표적으로 많이 사용하는 Plugin 에 대한 개념 설명 및 실습을 정리하는 포스팅이다. loader 와 같이 custom 으로 작성하는 일은 거의 없으며 웹펙에서 제공하는 플러그인을 알아본다. 1. BannerPlugin 위 플러그인은 결과물에 대해 원하는 정보를 함께 결과물에 노출 시킬 수 있다. 즉,...","categories": ["webpack"],
        "tags": ["Webpack","Plugin","주요 Plugin"],
        "url": "/webpack/webpack-%EC%8B%A4%EC%8A%B5-day7/",
        "teaser": null
      },{
        "title": "에라토스테네스의 체(소수구하기)",
        "excerpt":"ㅃ :raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 소수 먼저 소수에 대한 정의를 살펴볼 필요가 있다. 소수는 1과 자기 자신으로만 나누어지는 수 이다. 1은 소수가 아니다. 모든 자연수는 소수들의 곱으로 표현된다. 위 개념을 통해 에라토스테네스의 체 알고리즘을 알아보도록 한다. 2. 에라토스테네스의 체란? 그럼 에라토스테네스의...","categories": ["Algorithm"],
        "tags": ["Programming","에라토스테네스의 체","소수"],
        "url": "/algorithm/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98-%EC%B2%B4/",
        "teaser": null
      },{
        "title": "Cookie & Session 개념 및 정리",
        "excerpt":"ㅃ :raising_hand: 개발간 기술개념 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 개요 실제 현업에서 Cookie 와 Session 의 사용은 매우 빈번한것 같다. 로그인, 팝업 등 다양한 서비스에 사용되는 기술인 만큼 기록을 해두는것이 좋을것 같다. 2. HTTP의 특징 및 쿠키와 세션을 사용하는 이유 쿠키를 발급받고 사용하는 과정 HTTP 프로토콜...","categories": ["cookiesession"],
        "tags": ["Cookie(쿠키)","Session(세션)"],
        "url": "/cookiesession/cookiesession/",
        "teaser": null
      },{
        "title": "VirtualDOM(가상돔)",
        "excerpt":"ㅃ :raising_hand: 개발간 기술개념 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 개요 실무에서 Vue.js 라는 SPA 개념의 프레임워크를 사용하면서 가상돔에 대한 궁금증이 생겼다. 가상돔은 무엇이며 왜 사용해야할까? 간단하게만 정리해 보았다. 2. Virtual DOM 은 무엇일까? 앞선 포스팅에서 브라우저가 그려지는 과정에 대해서 공부한적이 있다. 간단하게 복기하자면 브라우저는 아래와 같은...","categories": ["virtualdom"],
        "tags": ["VirtualDOM","SPA"],
        "url": "/virtualdom/VirtualDOM/",
        "teaser": null
      },{
        "title": "Vue Life Cycle",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. 개요 Vue 에는 인스턴스생명주기 가 존재한다. 이는 Vue Component 가 생성되고 최종 소멸될떄까지의 주기를 말한다. 이런 라이프사이클을 이해해야지 Hook 의 사용도 좀 더 이해력있게 사용할 수 있을것이다. 또한, 각 시점에 해야하는 로직과 작업이 있기 때문에 그부분을 알기 위해서라도 이해는 필수 일 것...","categories": ["vuelife"],
        "tags": ["F/E","Vue","instance life Cycle"],
        "url": "/vuelife/Vue-%EB%9D%BC%EC%9D%B4%ED%94%84-%EC%82%AC%EC%9D%B4%ED%81%B4/",
        "teaser": null
      },{
        "title": "클로저(Closure)",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. 개요 클로저(Closure) 는 Javascript 에서 꾀나 기본적인 개념이다. Scope 와도 많이 관련되어 있고 코드를 짜는데 있어서 변수의 어휘적 범위(Lexical Scoping) 를 잘 고려해야 실수 없는 소스를 짤 수 있을것 같다. 완벽하지는 않지만 MDN 을 참고하여 클로저(Closure) 에 대해 알아보고 기록을 해봐야 겠다는...","categories": ["closure"],
        "tags": ["F/E","클로저(closure)","Lexical Scoping"],
        "url": "/closure/closure/",
        "teaser": null
      },{
        "title": "VSCode 유용한 플러그인 목록",
        "excerpt":":raising_hand: 개발환경 설정과 관련된 설정을 기록하는 포스트 입니다. VSCode 유용한 플러그인 목록 VSCode 설정할때 유용한 플러그인들 정리 색 테마 : Night Owl 파일 아이콘 테마 : Material Icon Theme 문법 검사 : ESLint, TSLint 실습 환경 보조 : Live Server 기타 : Prettier, Project Manager, Auto Close Tag, GitLens, Atom...","categories": ["devEnv"],
        "tags": ["VS Code","Plugin","유용한 플러그인 모음"],
        "url": "/devenv/vscodePlugIn/",
        "teaser": null
      },{
        "title": "바벨(Babel) 기초 개념",
        "excerpt":":raising_hand: 바벨(Babel) 학습 및 공부 내용을 기록하기 위한 포스트입니다. 각기 다른 환경을 일원화 시켜주는 바벨에 대해 공부해본다. 해당 포스팅은 김정환님의 강의를 보며 정리하였다. 하단 참조 사이트 참고 1. 바벨(Babel)은 왜 사용하는 것일까? 모던 웹 프론트엔드 환경이 거듭할수록 각 브라우저별로 같은 javascript라도 각기 다르게 지원하는 함수 혹은 메서드들이 생겨나기 시작하였다. 그래서...","categories": ["babel"],
        "tags": ["F/E","Babel","바벨 기초개념"],
        "url": "/babel/Babel/",
        "teaser": null
      },{
        "title": "Javascript HTML 접근 및 조작",
        "excerpt":":raising_hand: JavaScript 문법 내용을 기록하기 위한 포스트입니다. Javascript로 HTML 데이터를 파싱하고 핸들링하는 방법 기록 1. HTML 태그 정보 접근 예를 들어 아래와 같은 HTML의 XML 데이터가 있다고 하자. Javascript 를 통해서 이 값에 접근해본다. &lt;button data-category-name=\"espresso\" class=\"cafe-category-name btn bg-white shadow mx-1\" &gt; 에스프레소 &lt;/button&gt; &lt;button data-category-name=\"frappuccino\" class=\"cafe-category-name btn bg-white shadow...","categories": ["JavaScript"],
        "tags": ["JavaScript","html","parsing","childNodes"],
        "url": "/javascript/htmlhandling/",
        "teaser": null
      },{
        "title": "바벨(Babel) 기초 개념 - Preset",
        "excerpt":":raising_hand: 바벨(Babel) 학습 및 공부 내용을 기록하기 위한 포스트입니다. 각기 다른 환경을 일원화 시켜주는 바벨에 대해 공부해본다. 해당 포스팅은 김정환님의 강의를 보며 정리하였다. 하단 참조 사이트 참고 1. 실무에서 자주 쓰이는 preset 앞서 공부했던것 같이 플러그인을 모아서 따로 preset 을 만들어서 하는것 보다 현재는 바벨에서 제공하는 프리셋을 사용한다고 한다. 1-1....","categories": ["babel"],
        "tags": ["F/E","Babel","Preset","폴리필","babel-loader","sass-loader"],
        "url": "/babel/BabelPreset/",
        "teaser": null
      },{
        "title": "공주구하기(Queue)",
        "excerpt":":raising_hand: 알고리즘 공부 간 기록이 필요한 문제들에 대한 정리를 기록하는 포스트 입니다. 1. 문제 요건 주어진 n 명의 인원을 순서대로 세워놓고 각자의 번호를 부여받으며, k 번째마다 탈락하며, 탈락한 인원을 제하고 순서는 그대로 이어간다. 마지막 남는 사람이 공주를 구한다. 공주구하는 인원 구하라. 2. 코드 function solution(n, k) { // n 까지의...","categories": ["Algorithm"],
        "tags": ["Programming","Array","Queue"],
        "url": "/algorithm/%EA%B3%B5%EC%A3%BC%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "preventDefault",
        "excerpt":":raising_hand: JavaScript 문법 내용을 기록하기 위한 포스트입니다. 1. 개요 공부를 하다가 리마인드할겸 간단하게 적어본다. 이벤트 코드 관련 동작에서 많이 사용되는 preventDefault에 대하여 기록해본다. 2. e.preventDefault() 는 무엇인가? 해당 메서드는 태그에서 기본적으로 정의된 이벤트를 작동하지 못하게 하는 메서드이다. submit 혹은 &lt;a&gt;, &lt;input&gt;, &lt;textarea&gt; ..Tag 등의 태그를 통한 이벤트가 발생할 경우 새로고침...","categories": ["event"],
        "tags": ["JavaScript","preventDefault","Event"],
        "url": "/event/preventDefault/",
        "teaser": null
      },{
        "title": "실행 컨텍스트(Execution Context)",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. 개요 좋은 기회로 실행컨텍스트(Execution Context) 에 대한 궁금증을 갖게 되었다. 중요한 부분은 이 실행 컨텍스트가 Javascript 에서 굉장히 중요한 역할을 하고 있다는 것이고 아직까지 깊게 공부를 해본적이 없어 이번 기회에 정확히 짚어가고 싶어서 기록을 시작해본다. 여러 기술블로그들을 보며 나름대로 정리해 보았다. 2....","categories": ["executionContext"],
        "tags": ["F/E","Execution Context","Lexical Environment","Variable Environment"],
        "url": "/executioncontext/%EC%8B%A4%ED%96%89%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8/",
        "teaser": null
      },{
        "title": "TDZ(Temporal Dead Zone)",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. 개요 실행 컨텍스트를 공부하던 중 var 와 let,const간의 차이 즉, Variable Environment와 Lexical Environmnet와의 환경 차이에 대해서 궁금증이 생겼다. var의 경우에는 Creation Phase 단계에서 초기화 및 메모리값 할당(undefined)가 일어나지만 let, const의 경우 변수 선언만 하고 실제 할당은 Execution Phase에서 실제 할당이 일어...","categories": ["tdz"],
        "tags": ["F/E","Hoisting","TDZ"],
        "url": "/tdz/tdz/",
        "teaser": null
      },{
        "title": "메서드 체이닝(Method Chaining)",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. 개요 Javascript로 구현 과제를 공부하던 도중 Method Chaining에 관한 부분을 알게 되었다. 유용한 구현법인 만큼 짧지만 기록해두어야 겠다는 생각이 들어 기록해본다. 2. 메서드 체이닝(Method Chaining)이란? Method Chaing 이란? 메서드가 객체를 반환하게 되면, 메서드의 반환 값인 객체를 통해 또 다른 메서드를 호출할 수...","categories": ["devhistory"],
        "tags": ["F/E","Method Chaining","EventListner"],
        "url": "/devhistory/MethodChaining/",
        "teaser": null
      },{
        "title": "Async / Defer 스크립트",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. 개요 프론트엔드는 공부하면 할수록 알고싶어지는게 너무 많은것 같다. 이번엔 브라우저에서 화면이 그려질때 즉, HTML 을 읽어내려갈때 &lt;script&gt; 태그를 만날때 진행되는 과정에 대해서 기록해본다. 우리가 흔히 웹 어플리케이션을 만들고 화면이 렌더링 되는과정에서 동적인 화면을 만들기 위해서 Javascript 호출이 필요하다. 하지만 브라우저가 그려지는 엔진...","categories": ["asyncdefer"],
        "tags": ["F/E","DOM","Async / Defer"],
        "url": "/asyncdefer/asyncdefer/",
        "teaser": null
      },{
        "title": "이벤트 버블링(Event Bubbling)",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. 개요 Javascript를 공부하면서 굉장히 많이 보이는게 Event관련 기능들이다. 이번에는 Event의 전달 과정의 첫번째로 이벤트 버블링을 기록해보고자 한다. 대충은 알고 있지만 모든 정리를 하면 더욱 내것이 되는 기분이라 좀 더 자세히 다뤄봐야 겠다. 2. 이벤트 버블링(Event Bubbling)이란? 이벤트 버블링이란 무엇일까? 이벤트 버블리은 특정...","categories": ["event"],
        "tags": ["F/E","Event Bubbling","이벤트 버블링"],
        "url": "/event/event_bubbling/",
        "teaser": null
      },{
        "title": "이벤트 캡처링(Event Capture)",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. 개요 Javascript를 공부하면서 굉장히 많이 보이는게 Event관련 기능들이다. 이번에는 앞선 이벤트 버블링에 이어 Event의 전달 과정의 두번째로 이벤트 캡쳐을 기록해보고자 한다. 2. 이벤트 캡쳐란? 이벤트 캡처링이란 이벤트 버블링과는 반대로 동작한다고 이해하면 된다. DOM의 최상단 즉, window 로부터 이벤트가 발생한 요소까지 이벤트를 전파한다....","categories": ["event"],
        "tags": ["F/E","Event Capture","이벤트 캡처"],
        "url": "/event/event_capture/",
        "teaser": null
      },{
        "title": "React 상태 끌어올리기",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. 개요 React에 대해서 공부하던 중 컴포넌트 설계 시 State를 어디서 관리해야 해야 하는가? 에 대해서 간략하게 정리해보고자 한다. 우리가 각 기능별 Component를 나누고자 할때 실제 각 기능별 Component에서 state를 관리하게 되면 한가지 문제점이 발생한다. 한가지의 기능 예를들어 검색창에 대한 Component를 만든다고 가정하자....","categories": ["component"],
        "tags": ["F/E","리엑트(React)","컴포넌트 설계","State 설계"],
        "url": "/component/state%EB%81%8C%EC%96%B4%EC%98%AC%EB%A6%AC%EA%B8%B0/",
        "teaser": null
      },{
        "title": "Component 재사용 방법(작성중)",
        "excerpt":":raising_hand: 프론트엔드 개발관련 공부내용을 기록하는 포스트 입니다. 1. 개요 React의 Component를 설계할때 많이 사용하는 재사용에 대해서 알아보자. 공부를 하던 중 관련하여 기억할만한 부분이 있어 한번 포스팅해본다. 먼저 React에서 컴포넌트를 설계할때 방법들 중 아래의 2가지를 살펴보겠다. Class 상속 props 를 활용한 컴포넌트 담기 결과적으로 React의 공식 문서에서 아래와 같이 Class 상속으로...","categories": ["component"],
        "tags": ["F/E","리엑트(React)","컴포넌트 설계","재사용방법","상속, 합성(담기)"],
        "url": "/component/%EC%9E%AC%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95/",
        "teaser": null
      }]
