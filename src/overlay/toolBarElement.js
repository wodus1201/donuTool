export function createToolBarElement() {
  const toolBarElement = document.createElement("img");

  toolBarElement.id = "donuTool-toolBar";
  toolBarElement.src = chrome.runtime.getURL("assets/donuToolBar.png");
  toolBarElement.setAttribute("draggable", "false");

  Object.assign(toolBarElement.style, {
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
  return toolBarElement;
}
