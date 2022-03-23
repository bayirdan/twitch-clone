export const mobileSlide = (box) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  box.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = box.scrollLeft;
  });

  box.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    let newX = startX - e.pageX;
    box.scrollLeft = scrollLeft + newX;
  });

  box.addEventListener("mouseup", () => {
    return (isDown = false);
  });

  box.addEventListener("mouseleave", () => {
    return (isDown = false);
  });
};
