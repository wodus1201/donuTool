(async () => {
  const { updateToolBarUIPosition, checkCursorEvent, getRotationAngle, getReverseRotationAngle } = await import(chrome.runtime.getURL("overlay/toolBarUtils.js"));
  const { createToolBarElement } = await import(chrome.runtime.getURL("overlay/toolBarElement.js"));
  const { handleMessageFromPopUp } = await import(chrome.runtime.getURL("overlay/messageHandler.js"));

  handleMessageFromPopUp();

  let isElementInteractive = false;
  let isMouseDown = false;
  let lastCursorPosition = { x: 0, y: 0 };
  let lastScrollYPosition = window.scrollY;

  const toolBarUI = createToolBarElement();
  document.body.appendChild(toolBarUI);

  const buttonsInToolBar = [
    document.getElementById("donuTool-button1"),
    document.getElementById("donuTool-button2"),
    document.getElementById("donuTool-button3"),
    document.getElementById("donuTool-button4"),
    document.getElementById("donuTool-button5"),
  ];

  buttonsInToolBar.forEach((button) => {
    button.style.transition = "transform 0.3s ease";
  });

  window.addEventListener("mousedown", () => {
    if (!isElementInteractive) {
      isMouseDown = true;
      updateToolBarUIPosition(toolBarUI, lastCursorPosition);
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
    updateToolBarUIPosition(toolBarUI, lastCursorPosition);
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
      updateToolBarUIPosition(toolBarUI, lastCursorPosition);
      toolBarUI.style.transform = getRotationAngle(e.clientX, e.clientY, window.innerWidth, window.innerHeight);

      buttonsInToolBar.forEach((button) => {
        button.style.transform = getReverseRotationAngle(e.clientX, e.clientY, window.innerWidth, window.innerHeight);
      });
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
      updateToolBarUIPosition(toolBarUI, lastCursorPosition);
    },
    true
  );
})();
