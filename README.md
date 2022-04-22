# \* **알아볼 주제** : CSS Apple Interaction

# \* **참고 강의**

- 1분 코딩 (애플 웹사이트 인터랙션 클론!) 참고할 예정
  ![image](https://user-images.githubusercontent.com/89957988/163922129-4880f463-97fa-4427-8759-9b3a0d2d2e41.png)

---

## 1. 생각

- **1-1. 작업 시작 **

* (22/04/21)
  - html구조 짜는것부터 시작해 천천히 svg, canvas 처리 하는법을 배운다.
    아직까지는 따라할만하다! 😎
* (22/04/22) rem / em
  - 소스코드
  ```CSS
  html {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 14px;
  }
  .main {
    font-size: 2.5rem;
    height: 3em;
  }
  ```
  ## 질문 ) font-size만 rem 사용하고, 나머지 값들은 em을 사용하는 이유?
  1. REM : height를 rem으로 사용하게되면 rem 특성상
     root element (부모 엘리먼트)font-size 기준 \* 입력숫자로 처리 된다.
     ```Javascript
     root 14px * 3배 = 56px
     ```
  2. EM : em 특성상 현재 내 블럭 font-size 기준으로 처리되기 때문에,
     내 폰트 사이즈 처리가 용이하다.
     ```Javascript
       (root 14px * 2.4배) * 3배 = 105px
     ```

- **1-2. 혹시?**

*

- **1-3. 성공?**

*

## 2. 안 된 이유 ( + 추가 설명 )

- 소스코드

```javascript

```

## 3. 전체 코드

- 소스코드

```javascript

```
