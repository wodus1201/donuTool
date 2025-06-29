const follower = document.createElement("div");
Object.assign(follower.style, {
  position: "absolute",
  width: "30px",
  height: "30px",
  background: "rgba(79, 42, 225, 0.5)",
  borderRadius: "50%",
  pointerEvents: "none",
  zIndex: 9999,
});
document.body.appendChild(follower);

let lastCursor = { x: 0, y: 0 };
let lastScrollY = window.scrollY;

window.addEventListener("mousemove", (e) => {
  lastCursor = {
    x: e.pageX,
    y: e.pageY,
  };
  updateFollowerPosition();
});

document.addEventListener(
  "scroll",
  () => {
    const deltaY = window.scrollY - lastScrollY;
    lastCursor.y += deltaY;
    lastScrollY = window.scrollY;
    updateFollowerPosition();
  },
  true
);

function updateFollowerPosition() {
  follower.style.left = lastCursor.x - 15 + "px";
  follower.style.top = lastCursor.y - 15 + "px";
}
