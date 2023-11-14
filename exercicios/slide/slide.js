class Slide {
  constructor(wrapper, slide) {
    this.wrapper = document.querySelector(wrapper);
    this.slide = document.querySelector(slide);
    this.dist = { posicaoFinal: 0, começo: 0, movimento: 0 };
  }

  onStart(e) {
    let type;
    if (e.type === 'touchstart') {
      this.dist.começo = e.changedTouches[0].clientX;
      type = 'touchmove';
    } else {
      e.preventDefault();
      this.dist.começo = e.clientX;
      type = 'mousemove';
    }
    this.wrapper.addEventListener(type, this.onMove);
  }

  onMove(e) {
    const type = e.type === 'mousemove' ? e.clientX : e.changedTouches[0].clientX;
    this.dist.movimento = -(this.dist.começo - type);
    const clientX = (this.dist.posicaoFinal + this.dist.movimento) * 1.5;
    this.slide.style.transform = `translate3d(${clientX}px, 0, 0)`;
  }

  onEnd(e) {
    const type = e.type === 'mouseup' ? 'mousemove' : 'touchmove';
    this.dist.posicaoFinal += this.dist.movimento;
    this.wrapper.removeEventListener(type, this.onMove);
  }

  addEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }

  addBind() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    if (this.wrapper && this.slide) {
      this.addBind();
      this.addEvents();
    }
    return this;
  }
}

const slide = new Slide('.slide-wrapper', '.slide');
slide.init();
