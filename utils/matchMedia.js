export const matchMedia = (setIsReachedIn1200px) => {
  window.addEventListener("resize", () => {
    setIsReachedIn1200px(window.matchMedia("(max-width: 1200px)").matches);
  });
  window.addEventListener("load", () => {
    setIsReachedIn1200px(window.matchMedia("(max-width: 1200px)").matches);
  });
};

export const matchMedia750px = (setIsReachedIn750px) => {
  window.addEventListener("resize", () => {
    setIsReachedIn750px(window.matchMedia("(max-width: 750px)").matches);
  });
  window.addEventListener("load", () => {
    setIsReachedIn750px(window.matchMedia("(max-width: 750px)").matches);
  });
};

export const matchMedia768px = (setIsReachedIn768px) => {
  window.addEventListener("resize", () => {
    setIsReachedIn768px(window.matchMedia("(max-width: 768px)").matches);
  });
  window.addEventListener("load", () => {
    setIsReachedIn768px(window.matchMedia("(max-width: 768px)").matches);
  });
};
