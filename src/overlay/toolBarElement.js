export function createToolBarElement() {
  const toolBarElement = document.createElement("div");
  const toolBarImage = document.createElement("img");
  const toolBarButtonElement1 = document.createElement("div");
  const toolBarButtonElement2 = document.createElement("div");
  const toolBarButtonElement3 = document.createElement("div");
  const toolBarButtonElement4 = document.createElement("div");
  const toolBarButtonElement5 = document.createElement("div");

  toolBarElement.id = "donuTool-toolBar";
  toolBarElement.setAttribute("draggable", "false");
  Object.assign(toolBarElement.style, {
    position: "absolute",
    pointerEvents: "none",
    webkitUserDrag: "none",
    userSelect: "none",
    zIndex: 9999,
    transition: "opacity 0.3s ease, transform 0.3s ease",
  });

  toolBarElement.setAttribute("draggable", "false");
  toolBarImage.src = chrome.runtime.getURL("assets/donuToolBar.png");
  Object.assign(toolBarImage.style, {
    width: "180px",
    height: "180px",
    filter: "brightness(1.15)",
    pointerEvents: "none",
    webkitUserDrag: "none",
    userSelect: "none",
  });

  toolBarButtonElement1.id = "donuTool-button1";
  toolBarButtonElement1.setAttribute("draggable", "false");
  Object.assign(toolBarButtonElement1.style, {
    position: "absolute",
    top: "18px",
    left: "112px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "lightslategray",
  });

  toolBarButtonElement2.id = "donuTool-button1";
  toolBarButtonElement2.setAttribute("draggable", "false");
  Object.assign(toolBarButtonElement2.style, {
    position: "absolute",
    top: "64px",
    left: "131px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "lightslategray",
  });

  toolBarButtonElement3.id = "donuTool-button2";
  toolBarButtonElement3.setAttribute("draggable", "false");
  Object.assign(toolBarButtonElement3.style, {
    position: "absolute",
    top: "112px",
    left: "112px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "lightslategray",
  });

  toolBarButtonElement4.id = "donuTool-button2";
  toolBarButtonElement4.setAttribute("draggable", "false");
  Object.assign(toolBarButtonElement4.style, {
    position: "absolute",
    top: "131px",
    left: "64px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "lightslategray",
  });

  toolBarButtonElement5.id = "donuTool-button2";
  toolBarButtonElement5.setAttribute("draggable", "false");
  Object.assign(toolBarButtonElement5.style, {
    position: "absolute",
    top: "111px",
    left: "19px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "lightslategray",
  });

  toolBarElement.appendChild(toolBarImage);
  toolBarElement.appendChild(toolBarButtonElement1);
  toolBarElement.appendChild(toolBarButtonElement2);
  toolBarElement.appendChild(toolBarButtonElement3);
  toolBarElement.appendChild(toolBarButtonElement4);
  toolBarElement.appendChild(toolBarButtonElement5);

  return toolBarElement;
}
