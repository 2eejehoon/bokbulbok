export const moveScrollTo = (top: number, left: number) => {
  window.scrollTo({ top, left, behavior: "smooth" });
};
