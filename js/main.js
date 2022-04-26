//IIFE
(() => {
  let YOffset = 0; // window.pageYOffset 대신 쓸 변수
  let prevScrollHeight = 0; // 현재 스크롤 위치(YOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값
  let currentScene = 0; // 현재 활성화된(눈 앞에 보고 있는) 씬(scroll-section)
  let enterNewScene = false; //새로운 씬이 시작되는 순간 true

  const sceneInfo = [
    {
      // 0
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight로 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-0"),
        messageA: document.querySelector("#scroll-section-0 .main-message.a"),
        messageB: document.querySelector("#scroll-section-0 .main-message.b"),
        messageC: document.querySelector("#scroll-section-0 .main-message.c"),
        messageD: document.querySelector("#scroll-section-0 .main-message.d"),
      },
      values: {
        messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
        // messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
        messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],

        messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
        messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
      },
    },
    {
      // 1
      type: "nomal",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-1"),
      },
    },
    {
      // 2
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-2"),
      },
    },
    {
      // 3
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-3"),
      },
    },
  ];

  // 새로고침 체크 후 아이디값 할당
  function setLayout() {
    //각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.container.style.height = `
        ${sceneInfo[i].scrollHeight}px
      `;
    }

    // 현재 스크롤 위치에 맞춰서 쿼런트 신을 셋팅
    YOffset = window.pageYOffset;
    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      //현재 스크롤 위치보다 크거나 같아졌을 때, for문 도는걸 멈춰라
      if (totalScrollHeight >= YOffset) {
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute("id", `show-scene-${currentScene}`);
  }

  // 스크롤 범위 구하기
  function calcValues(values, currentYOffset) {
    let rv;
    // 현재 씬(스크롤섹션)에서 스크롤 된 범위를 0 ~ 1 사이의 비율로 구하기
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    if (values.length === 3) {
      // start ~ end 사이에 애니메이션 실행
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;

      if (
        currentYOffset >= partScrollStart &&
        currentYOffset <= partScrollEnd
      ) {
        rv =
          ((currentYOffset - partScrollStart) / partScrollHeight) *
            (values[1] - values[0]) +
          values[0];
      } else if (currentYOffset < partScrollStart) {
        rv = values[0];
      } else if (currentYOffset > partScrollEnd) {
        rv = values[1];
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }
    return rv;
  }

  // 스크롤 애니메이션 처리
  function playAnimation() {
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    const currentYOffset = YOffset - prevScrollHeight;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    // console.log(currentScene);

    switch (currentScene) {
      case 0:
        const messageA_opacity_in = calcValues(
          values.messageA_opacity_in,
          currentYOffset
        );
        const messageA_opacity_out = calcValues(
          values.messageA_opacity_out,
          currentYOffset
        );
        const messageA_translateY_in = calcValues(
          values.messageA_translateY_in,
          currentYOffset
        );
        const messageA_translateY_out = calcValues(
          values.messageA_translateY_out,
          currentYOffset
        );
        if (scrollRatio <= 0.22) {
          // in
          objs.messageA.style.opacity = messageA_opacity_in;
          objs.messageA.style.transform = `translateY(${messageA_translateY_in}%)`;
        } else {
          // out
          objs.messageA.style.opacity = messageA_opacity_out;
          objs.messageA.style.transform = `translateY(${messageA_translateY_out}%)`;
        }

        break;
      case 1:
        // console.log("1 play");
        break;
      case 2:
        // console.log("2 play");
        break;
      case 3:
        // console.log("3 play");
        break;
    }
  }

  // 스크롤 바뀌는 순간 체크 후 아이디값 할당
  function scrollLoop() {
    enterNewScene;
    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }
    // 증가
    if (YOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      enterNewScene = true;
      currentScene++;
      document.body.setAttribute("id", `show-scene-${currentScene}`);
    }
    // 감소
    if (YOffset < prevScrollHeight) {
      // 바운싱처리로 currentScene가 0보다 더 -처리가 될 때,
      // - 처리 되지말고 그냥 리턴해라.
      if (currentScene === 0) return;
      enterNewScene = true;
      currentScene--;
      document.body.setAttribute("id", `show-scene-${currentScene}`);
    }

    if (enterNewScene) return;
    playAnimation();
  }

  // window 이벤트 처리
  window.addEventListener("scroll", () => {
    YOffset = window.pageYOffset;
    scrollLoop();
  });
  window.addEventListener("load", setLayout);
  window.addEventListener("resize", setLayout);
  // DOM (HTML이 로드가 되면 실행된다.이미지가 로드 되지않았더라도 실행)
  // window.addEventListener("DOMContentLoaded", setLayout);

  setLayout();
})();
