// script.js

// 1. 하나의 언더바와 모든 메뉴(a 태그)를 선택합니다.
const underLine = document.getElementById("underline");
const allMenus = document.querySelectorAll("nav a");

// 2. 모든 메뉴에 대해 클릭 이벤트를 추가합니다.
//    어떤 메뉴를 클릭하든 moveIndicator 함수가 실행됩니다.
allMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => moveIndicator(e))
);

// 3. 언더바를 움직이는 단일 함수
function moveIndicator(e) {
  // e.currentTarget은 클릭된 바로 그 'a' 태그를 가리킵니다.
  const clickedMenu = e.currentTarget;

  underLine.style.left = clickedMenu.offsetLeft + "px";
  underLine.style.width = clickedMenu.offsetWidth + "px";
  underLine.style.top = clickedMenu.offsetTop + clickedMenu.offsetHeight + "px";
}
