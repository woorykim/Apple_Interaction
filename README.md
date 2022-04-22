# **알아볼 주제** : CSS Apple Interaction <br/>
# **참고 강의**
- 1분 코딩 (애플 웹사이트 인터랙션 클론!) 참고할 예정
  ![image](https://user-images.githubusercontent.com/89957988/163922129-4880f463-97fa-4427-8759-9b3a0d2d2e41.png)
<br/>
<br/>

## 1. 생각

- **1-1. 작업 시작**
  - **(22/04/21)** html구조 짜는것부터 시작해 천천히 svg, canvas 처리 하는법을 배운다.
    아직까지는 따라할만하다! 😎
  - **(22/04/22)**
    - **rem / em 사용?** 
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
      ### Q) font-size만 rem 사용하고, 나머지 값들은 em을 사용하는 이유?
      ### A) 
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
      ---
     - **반응형 순서?** 
        - mobile -> desktop (@media문으로 반응형 처리) 
        - @media 반응형 처리 시 root font-size기준이 아닌 view port 기준으로 작업 진행 
          (화면 늘어났다 줄어들었다에 맞춰 폰트사이즈 자동 처리 )

          ```css
          @media (min-width: 1024px) {
            #scroll-section-0 {
              font-size: 9vw;
            }
          }
          ```
        ---
    - **인터랙션 구현 컨셉 (Scroll animation timeline) ?** 
      1. timeline : 시간의 흐름을 나타내는 선 (animation이 재생되는 구간) <br>
          자동 재생이 아닌 Scroll에 의해 재생
      2. image 참고 
        2-1. 각 섹션을 [ scroll-section-0 , scroll-section-1 , scroll-section-2 , scroll-section-3 ] 나눈다.
          - 첫 번째 구간 : 4개의 텍스트 애니메이션, 컵을 잡은 손이 돌아가는 구간
          - 두 번째 구간 : 그냥 텍스트들 올라가는 구간
          - 세 번째 구간 : 다시 컵 등장 후 컵에대한 설명이 나오는 구간
          - 네 번째 구간 : 이미지가 크게 나오며 스크롤되면서 커지며 다른 이미지로 블렌딩 처리되는 구간 
          - ![image](https://user-images.githubusercontent.com/89957988/164593553-189286cd-708e-4352-8e6d-efa75cf195a9.png)

<br/>
<br/>
<br/>

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
