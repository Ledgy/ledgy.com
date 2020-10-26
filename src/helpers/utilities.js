// @flow

export const track = (event: string, properties?: Object): void => {
  if (window.analytics) window.analytics.track(event, properties);
};

export const animateLaptop = () => {
  let scrolling = false;
  window.onscroll = () => {
    scrolling = true;
  };
  setInterval(() => {
    if (scrolling) {
      scrolling = false;
      const laptop = document.getElementById('laptop-ledgy');
      const banner = document.querySelector('header');
      const { scrollY } = window;
      if (laptop && banner && scrollY <= banner.clientHeight) {
        laptop.style.transform = `translateY(${scrollY / 50}%)`;
      }
    }
  }, 50);
};

export const isFieldMissing = (object: Object) => Object.values(object).some((field) => !field);

export const shuffleArray = (array: any[]) => {
  const arrayCopy = array;
  let index = arrayCopy.length - 1;
  // eslint-disable-next-line no-plusplus
  for (index; index > 0; index--) {
    const random = Math.floor(Math.random() * (index + 1));
    const temp = arrayCopy[index];
    arrayCopy[index] = arrayCopy[random];
    arrayCopy[random] = temp;
  }
  return arrayCopy;
};
