export function createToolBarElement() {
  const toolBarElement = document.createElement("div");
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

  const toolBarImage = document.createElement("img");
  toolBarImage.src = chrome.runtime.getURL("assets/donuToolBar.png");
  Object.assign(toolBarImage.style, {
    width: "180px",
    height: "180px",
    filter: "brightness(1.15)",
    pointerEvents: "none",
    webkitUserDrag: "none",
    userSelect: "none",
  });
  toolBarElement.appendChild(toolBarImage);

  const toolBarButtonElement1 = createToolBarButton("donuTool-button1", "18px", "112px", "Bwd", () => {
    window.history.go(-1);
  });
  toolBarElement.appendChild(toolBarButtonElement1);

  const toolBarButtonElement2 = createToolBarButton("donuTool-button2", "64px", "131px", "Fwd", () => {
    window.history.go(1);
  });
  toolBarElement.appendChild(toolBarButtonElement2);

  const toolBarButtonElement3 = createToolBarButton("donuTool-button3", "112px", "112px", "NewT", () => {
    window.open("https://www.google.com", "_blank");
  });
  toolBarElement.appendChild(toolBarButtonElement3);

  const toolBarButtonElement4 = createToolBarButton("donuTool-button4", "131px", "64px", "NextT", () => {
    chrome.runtime.sendMessage({ action: "goToNextTab" });
  });
  toolBarElement.appendChild(toolBarButtonElement4);

  const toolBarButtonElement5 = createToolBarButton("donuTool-button5", "111px", "19px", "PrevT", () => {
    chrome.runtime.sendMessage({ action: "goToPreviousTab" });
  });
  toolBarElement.appendChild(toolBarButtonElement5);

  return toolBarElement;
}

function createToolBarButton(id, top, left, text, onClick) {
  const button = document.createElement("div");
  button.id = id;
  button.addEventListener("mouseup", onClick);
  Object.assign(button.style, {
    position: "absolute",
    top: top,
    left: left,
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "lightgray",
    fontSize: "10px",
    color: "gray",
    cursor: "grabbing",
  });

  const textInButton = document.createElement("div");
  textInButton.textContent = text;
  Object.assign(textInButton.style, {
    fontSize: "10px",
    color: "dimgray",
    textAlign: "center",
    lineHeight: "40px",
    fontWeight: 500,
  });

  button.appendChild(textInButton);

  return button;
}
