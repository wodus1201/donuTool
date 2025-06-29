const follower = document.createElement("div");
follower.style.position = "absolute";
follower.style.left = "0px";
follower.style.top = "0px";
follower.style.width = "30px";
follower.style.height = "30px";
follower.style.background = "rgba(79, 42, 225, 0.5)";
follower.style.borderRadius = "50%";
follower.style.pointerEvents = "none";
follower.style.zIndex = "9999";
document.body.appendChild(follower);

window.addEventListener("mousemove", (e) => {
  follower.style.left = e.pageX - 15 + "px";
  follower.style.top = e.pageY - 15 + "px";
  console.log(document.elementFromPoint(e.clientX, e.clientY));
});
