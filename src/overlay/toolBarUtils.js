export function updateToolBarUIPosition(element, position) {
  element.style.left = position.x - 83 + "px";
  element.style.top = position.y - 73 + "px";
}

export function checkCursorEvent(element) {
  while (element && element !== document.body) {
    const style = window.getComputedStyle(element);
    if (style.cursor !== "auto" && style.cursor !== "default" && style.cursor !== "grabbing") return true;
    element = element.parentElement;
  }
  return false;
}

export function getRotationAngle(x, y, width, height) {
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
