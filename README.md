# Kakao Postcode Typings

> [카카오 우편번호 서비스](https://postcode.map.daum.net/guide)를 위한 타입스크립트 타입 선언을 제공합니다.

## 📦 설치

```bash
npm install -D kakao-postcode
# Or using yarn
yarn add -D kakao-postcode
```

패키지를 설치합니다.

---

## PR은 언제나 환영합니다~ 🙌

---

## 🚀 사용 방법

```tsx
const { daum } = window; // kako라고는 하지만 아직은 daum으로...
```

`Window` 인터페이스를 확장하기 때문에, 기존처럼 위와 같이 바로 사용할 수 있답니다! 👍 👍

```tsx
import { Embed, IParamsConstructor, Open, KakaoInstance } from 'kakao-postcode';

const kakaoPostcode: KakaoInstance = new window.daum.Postcode({
    oncomplete(data: IParamsConstructor) { ... }
    ...
 });

 ...

 kakaoPostcode.open({ ... })

 Or

 kakaoPostcode.embed({ ... })
```

위와 같이 각각의 인터페이스를 가져와 사용하는 것도 가능합니다.

---

| 인터페이스 이름 |          설명          |
| :-------------: | :--------------------: |
| `KakaoInstance` | 카카오 포스트코드 객체 |
