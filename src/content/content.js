let isElementInteractive = false;
let lastCursorPosition = { x: 0, y: 0 };
let lastScrollYPosition = window.scrollY;

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "removeToolbar") {
    const element = document.getElementById("donuTool-toolBar");
    if (element) element.remove();
  }
});

const toolBarUI = document.createElement("div");
toolBarUI.id = "donuTool-toolBar";

Object.assign(toolBarUI.style, {
  position: "absolute",
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  pointerEvents: "none",
  zIndex: 9999,
  maskImage: "radial-gradient(circle at center, transparent 35px, black 11px)",
  background: "conic-gradient(from -110deg, transparent 0deg 130deg, rgb(196, 196, 196) 130deg 360deg)",
  transition: "opacity 0.3s ease, transform 0.3s ease",
});
document.body.appendChild(toolBarUI);

window.addEventListener("mousemove", (e) => {
  lastCursorPosition = {
    x: e.pageX,
    y: e.pageY,
  };
  updateToolBarUIPosition();

  const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
  isElementInteractive = checkCursorEvent(elementUnderCursor);
  toolBarUI.style.opacity = isElementInteractive ? 0.1 : 1;

  toolBarUI.style.transform = getRotationAngle(e.clientX, e.clientY, window.innerWidth, window.innerHeight);
});

document.addEventListener(
  "scroll",
  () => {
    const deltaY = window.scrollY - lastScrollYPosition;
    lastCursorPosition.y += deltaY;
    lastScrollYPosition = window.scrollY;
    updateToolBarUIPosition();
  },
  true
);

function updateToolBarUIPosition() {
  toolBarUI.style.left = lastCursorPosition.x - 85 + "px";
  toolBarUI.style.top = lastCursorPosition.y - 75 + "px";
}

function checkCursorEvent(element) {
  while (element && element !== document.body) {
    const style = window.getComputedStyle(element);
    if (style.cursor !== "auto" && style.cursor !== "default") return true;
    element = element.parentElement;
  }
  return false;
}

function getRotationAngle(x, y, width, height) {
  const MARGIN = 90;
  if (x < MARGIN) return "rotate(-43deg)";
  if (x > width - MARGIN) return "rotate(134deg)";
  if (y < MARGIN) return "rotate(45deg)";
  if (y > height - MARGIN) return "rotate(225deg)";
  return "rotate(0deg)";
}
