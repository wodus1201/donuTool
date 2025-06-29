const follower = document.createElement("div");
Object.assign(follower.style, {
  position: "absolute",
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  pointerEvents: "none",
  zIndex: 9999,
  background: `conic-gradient(
    from -110deg,
    transparent 0deg 130deg,
    rgba(196, 196, 196, 1) 90deg 360deg
  )`,
  maskImage: "radial-gradient(circle at center, transparent 35px, black 11px)",
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
  follower.style.left = lastCursor.x - 85 + "px";
  follower.style.top = lastCursor.y - 75 + "px";
}
