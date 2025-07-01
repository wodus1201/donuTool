(() => {
  chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "requestFullscreen") {
      document.documentElement.requestFullscreen();
    }
  });

  chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "removeToolbar") {
      const element = document.getElementById("donuTool-toolBar");
      if (element) element.remove();
    }
  });

  let isElementInteractive = false;
  let isMouseDown = false;
  let lastCursorPosition = { x: 0, y: 0 };
  let lastScrollYPosition = window.scrollY;

  const toolBarUI = document.createElement("img");
  toolBarUI.id = "donuTool-toolBar";
  toolBarUI.src = chrome.runtime.getURL("assets/donuToolBar.png");

  toolBarUI.setAttribute("draggable", "false");
  Object.assign(toolBarUI.style, {
    position: "absolute",
    width: "180px",
    height: "180px",
    filter: "brightness(1.15)",
    pointerEvents: "none",
    webkitUserDrag: "none",
    userSelect: "none",
    zIndex: 9999,
    transition: "opacity 0.3s ease, transform 0.3s ease",
  });
  document.body.appendChild(toolBarUI);

  window.addEventListener("mousedown", () => {
    if (!isElementInteractive) {
      isMouseDown = true;
      updateToolBarUIPosition();
      toolBarUI.style.pointerEvents = "auto";
      document.body.style.pointerEvents = "none";
      document.body.style.webkitUserDrag = "none";
      document.body.style.userSelect = "none";
    }
  });

  window.addEventListener("mouseup", (e) => {
    isMouseDown = false;
    lastCursorPosition = {
      x: e.pageX,
      y: e.pageY,
    };

    toolBarUI.style.transition = "left 0.3s ease, top 0.3s ease";
    updateToolBarUIPosition();
    toolBarUI.style.pointerEvents = "none";
    document.body.style.pointerEvents = "auto";
    document.body.style.webkitUserDrag = "auto";
    document.body.style.userSelect = "auto";

    setTimeout(() => {
      toolBarUI.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    }, 200);
  });

  window.addEventListener("mousemove", (e) => {
    if (!isMouseDown || isElementInteractive) {
      lastCursorPosition = {
        x: e.pageX,
        y: e.pageY,
      };
      updateToolBarUIPosition();
      toolBarUI.style.transform = getRotationAngle(e.clientX, e.clientY, window.innerWidth, window.innerHeight);
    }

    const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
    isElementInteractive = checkCursorEvent(elementUnderCursor);
    toolBarUI.style.opacity = isElementInteractive ? 0.3 : 1;
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
    toolBarUI.style.left = lastCursorPosition.x - 83 + "px";
    toolBarUI.style.top = lastCursorPosition.y - 73 + "px";
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
    if (x < MARGIN && y > height - MARGIN) return "rotate(-90deg)";
    if (y < MARGIN && x > width - MARGIN) return "rotate(90deg)";
    if (x > width - MARGIN && y > height - MARGIN) return "rotate(180deg)";
    if (x < MARGIN) return "rotate(-45deg)";
    if (x > width - MARGIN) return "rotate(135deg)";
    if (y < MARGIN) return "rotate(45deg)";
    if (y > height - MARGIN) return "rotate(225deg)";
    return "rotate(0deg)";
  }
})();
