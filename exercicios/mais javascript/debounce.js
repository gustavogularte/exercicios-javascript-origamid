function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

function teste() {
  console.log('teste');
}

const sla = debounce(teste, 50);

addEventListener('scroll', sla);
