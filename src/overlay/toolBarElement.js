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
  toolBarButtonElement1.addEventListener("mouseup", () => {
    window.history.go(-1);
  });
  Object.assign(toolBarButtonElement1.style, {
    position: "absolute",
    top: "18px",
    left: "112px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "lightgray",
  });

  toolBarButtonElement2.id = "donuTool-button1";
  toolBarButtonElement2.setAttribute("draggable", "false");
  toolBarButtonElement2.addEventListener("mouseup", () => {
    window.history.go(1);
  });
  Object.assign(toolBarButtonElement2.style, {
    position: "absolute",
    top: "64px",
    left: "131px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "lightgray",
  });

  toolBarButtonElement3.id = "donuTool-button2";
  toolBarButtonElement3.setAttribute("draggable", "false");
  toolBarButtonElement3.addEventListener("mouseup", () => {
    window.open("https://www.google.com", "_blank");
  });
  Object.assign(toolBarButtonElement3.style, {
    position: "absolute",
    top: "112px",
    left: "112px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "lightgray",
  });

  toolBarButtonElement4.id = "donuTool-button2";
  toolBarButtonElement4.setAttribute("draggable", "false");
  toolBarButtonElement4.addEventListener("mouseup", () => {
    alert("네 번째 버튼 클릭됨");
  });
  Object.assign(toolBarButtonElement4.style, {
    position: "absolute",
    top: "131px",
    left: "64px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "lightgray",
  });

  toolBarButtonElement5.id = "donuTool-button2";
  toolBarButtonElement5.setAttribute("draggable", "false");
  toolBarButtonElement5.addEventListener("mouseup", () => {
    alert("다섯 번째 버튼 클릭됨");
  });
  Object.assign(toolBarButtonElement5.style, {
    position: "absolute",
    top: "111px",
    left: "19px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "lightgray",
  });

  toolBarElement.appendChild(toolBarImage);
  toolBarElement.appendChild(toolBarButtonElement1);
  toolBarElement.appendChild(toolBarButtonElement2);
  toolBarElement.appendChild(toolBarButtonElement3);
  toolBarElement.appendChild(toolBarButtonElement4);
  toolBarElement.appendChild(toolBarButtonElement5);

  return toolBarElement;
}
