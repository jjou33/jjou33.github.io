---
title: "[Typescript] 타입제한, enum, 타입 추론"
excerpt: " :computer: Typescript 개발관련 공부내용을 기록하는 포스트 입니다."

categories:
  - typescript
tags:
  - typescript
  - 타입 제한
  - enum
  - 타입 추론
  - generic
  - extends
  - keyof
toc: true
toc_sticky: true
toc_label: "POST LIST"
---

<hr>
:raising_hand:  ```typescript 공부내용을 기록하는 포스트 입니다.```
<hr>

#### 1. 개요

---

**typescript** 에 대한 학습 내용을 포스팅한다.

#### 2. 제네릭을 통한 타입 제한
---

```js
function logTextLength<T>(text: T): T {
  console.log(text.length); // 타입스크립트 입장에서는 어떤 타입이 들어올지 알 수 없기 떄문에 오류가 발생
  return text;
}

logTextLength('hi');
```
위 소스에서 볼 수 있듯이 우리는 `T`를 통해 타입을 먼저 정의해놓지 않고 사용하는 측에서 정의하게끔 함수를 만들었다.

다만, `ts`는 들어오는 타입이 `string`인지 알수 없기 떄문에 `text.length`는 사용할 수 없어 오류가 발생한다.

이를 해결하기 위해서 첫번째는 아래와 같이 타입을 배열로 줄 수 있다.

```js
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length); // 이런식으로 배열 타입으로 받겟다고 명시가 필요하다.
  text.forEach(text => {
    console.log(text);
  }); 
  return text;
}

logTextLength<string>(['hi']);
```

위 방법으로 진행하게 되면 오류는 나지않고 위와 같은 상황에서 사용할 수는 있지만 옳은 방법은 아닌것 같다.

`두번째 방법`은 제네릭의 `extends`를 활용한 타입 제한이다.

```js
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}

logTextLength2('a'); // 오류 없음
logTextLength2({ length: 10 }); // 이렇게 length 라는 타입만 정의되어 있으면 오류가 발생하지 않는다.
logTextLength2(10); // 10은 length 를 제공하지 않기 떄문에 오류 발생

```
`LengthType` 을 `extends` 받기 때문에 `T` 는 항상 `length` 라는 타입을 알고 있을 것이다.

`extends` 는 기존에 정의되어 있는 `인터페이스` 혹은 `타입` 들을 확장하려 할때 사용된다

#### 3. keyof
---

`keyof` 를 활용해서 `extends` 된 `인터페이스` 혹은 `타입` 안의 하나만 들어갈 수 있도록 제약을 할 수 있다.

```js
// keyof 를 활용해서 shoppingItem 인터페이스 중 하나만 들어갈 수 있도록 제약
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// ShoppingItem 의 내부 타입중 한가지가 사용되어야 하기 떄문에 오류 발생
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');

getShoppingItemOption('name');
```
#### 4. enum 사용 예
---

`enum` 의 자세한 정의는 스킵하고 유용한 예를 하나 작성해본다.

```js
findContactByAddress(address: string): Contact[] {
  return this.contacts.filter(contact => contact.address === address);
}

findContactByAddress(PhoneType.Home)// 오류로 넣을 수 있는 스트링을 방지한다.

enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}
```
위 코드는 `findContactByAddress` 라는 함수를 실행하기 위해서 `address` 라는 `string` 타입의 값을 넘겨야 한다.

이때, 정확한 값을 넘기면 문제없지만 개발하는 중 발생할 수 있는 `오기입` 은 문제가 될 수 있다.

가령, `home`을 넣어야 하지만, `homee`을 넣는다던지? 이러한 부분을 `enum` 으로 예방할 수 있다.

`PhoneType` 을 정의하고 우리는 `string` 문자열이 아닌 정의된 객체의 프로터티 `value` 를 전달할 것이다.

이는 자동완성이 될 뿐더러, 간헐적으로 발생할 수 있는 `오류` 를 잡아내기 좋다.


#### 5. 타입 추론
---

```js
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
  //   value, 상속을 받아서 들어오게 된다.
  //   title
}
// DetailedDropdown 에서 Dropdown 인터페이스를 상속받았기 떄문에 아래와 같이 타입 정의가 가능하다.
let detailedItem: DetailedDropdown<number> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'a',
};
```

위 코드에서 보면 `DetailDropdown` 에서 `Dropdown` 인터페이스를 상속받아 사용하기 때문에 문제없이 추론 및 정의가 가능하다.

#### 6. 타입 가드
---

`Union` 을 사용해서 타입을 정한다고 생각해보자.

```js
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' };
}

```

위와 같이 정의한 뒤 사용을 하게되면 한가지 문제점이 발생한다.

```js
// Union 타입의 경우 공통된 속성에만 접근할 수 있다.
// 따라서, name 까지만 접근할 수 있다.
let tony1 = introduce();
console.log(tony1.name);
```

`Developer` 와 `Person` 두가지 인터페이스의 공통된 `name`만 사용이 가능하다는 문제이다.

이러한 부분은 아래와 같이 `as`를 활용해서 개선할 수 있지만 코드가 복잡해지면 점점 가독성이 낮아지게 된다.

```js
if ((tony as Developer3).skill) {
  console.log((tony as Developer3).skill);
} else if ((tony as Person3).age) {
  console.log((tony as Person3).age);
}
```

이러한 상황을 해결할 수 있는 부분이 `type 가드` 이다.

```js
// Type 가드 정의
// Developer 타입인지를 걸러주는 함수
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

// Type 가드 함수를 활용하면 아래와 같이 타입을 분기해서 적용할 수
if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
```

위와 같이 `isDeveloper` 함수를 통해 `Developer` 타입 여부를 리턴받는 가드함수를 만들어준다.

이후에 조건을 통해서 분기를 치게되면 훨씬 간단하게 코드가 작성될 수 있다.


#### 7. 타입 호환
---

타입 호환은 기본적으로 작은 범위의 타입이 큰 범위의 타입을 호환할 수 없다는 골자를 가지고 있다.

예를들면 아래와 같다.

```js
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  skill: string;
}

let developer: Developer;
let person: Person;

// 타입 호환은 오른쪽의 타입이 왼쪽 타입보다 클때 호환이 된다.
// 즉, 큰 타입에서는 작은 타입을 호환할 수 없다.
developer = person; // error
person = developer; // success
```

함수로 보면 

```js
// 함수

let add1 = function (a: number) {
  // console.log();
};
let sum1 = function (a: number, b: number) {
  //   return a + b;
};

sum1 = add1; // Success
add1 = sum1; // Error

```

`sum1` 이 더 큰 범위이기 때문에 `add1`의 타입을 호환할 수 있지만, 반대로 `add1` 이 `sum1`을 호환할 수는 없다.

제네릭은 아래와 같다.

```js
// 제네릭

interface Empty<T> {}
let empty1: Empty<string>;
let empty2: Empty<number>;

empty1 = empty2; 
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2; // error
notEmpty2 = notEmpty1; // error
```

#### 7. Utility 타입
---

기존 `interface` 혹은 `type` 으로 정의할 수 있지만, `typescript` 에서 제공하는 `utility` 로 더욱 간결하게 작성할 수 있다.

예를 들어 `Pick` 을 사용한 아래의 코드를 보자.

```js
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}


// Product 의 일부만 가져온 인터페이스
// 중복이 발생한다.
interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

// 상세정보를 조회했을 때
// 하나의 프로덕트 정보를 뿌리는 함수
function displayProductDetail(
  // pick 은 Pick<가져올 전체 타입, 사용할 타입> 으로 사용한다.
  shoppingItem: Pick<Product, 'id' | 'name' | 'price'>
) {
  //
```

`Product` 인터페이스를 정의했고, 추가로 `ProductDetail` 이 가진 타입만 필요한 경우가 있다고 하자.

위와 같이 작성하면 중복이 발생한다.

따라서, `displayProductDetail` 함수에 `Pick` 을 사용해서 `Product` 인터페이스 내에 `id, name, price` 만 사용하는 타입으로 정의하겠다는 의미로 작성이된다.

이와는 반대로 아래와 같이 `Omit` 유틸리티를 사용할 수도 있다.

```js
function omitProductDetail(shoppingItem: Omit<Product, 'id' | 'name'>) {

}
```

`Omit` 은 반대로 `Product` 인터페이스 내 `id` 와 `name` 만을 제외한 타입을 가져가겠다는 의미이다.

이밖에도 여러가지 `Utility` 관련 함수가 많으며 자세한 정보는 [공식 사이트](https://www.typescriptlang.org/docs/handbook/utility-types.html)에서 확인이 가능하다.

아래 `Partial` 유틸리티 타입을 완성해가는 과정을 확인할 수 있는 코드를 참고한다.

```js
// 4. 유틸리티 타입 구현 - Partial

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

//  #1
type userProfileudpate = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
};

// #2

type userProfileUpdate2 = {
  // 아래와 같이 접근하는 방식을 mapped 타입이라고 한다.
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
};

// #3

type userProfileUpdate3 = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// 최종 partial

type UserProfileUpdateFinal<T> = {
  [P in keyof T]?: T[P];
};
```
#### 최종정리
---




