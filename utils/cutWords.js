export const cutWord = (text = "", reachedIn750px = false) => {
  if (reachedIn750px) {
    return text.length > 13 ? (text = `${text.slice(0, 13)} ...`) : text;
  }

  return text.length > 19 ? (text = `${text.slice(0, 19)} ...`) : text;
};
