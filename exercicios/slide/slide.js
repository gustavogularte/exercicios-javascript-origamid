class Slide {
  constructor(wrapper, slide) {
    this.wrapper = document.querySelector(wrapper);
    this.slide = document.querySelector(slide);
    this.dist = { posicaoFinal: 0, começo: 0, movimento: 0 };
  }

  onStart(e, clientX) {
    e.preventDefault();
    console.log(e)
    this.dist.começo = e.clientX;
    this.wrapper.addEventListener('mousemove', this.onMove);
  }

  onMove(e) {
    this.dist.movimento = -(this.dist.começo - e.clientX);
    console.log(this.dist.movimento)
    const clientX = (this.dist.posicaoFinal + this.dist.movimento) * 1.5;
    this.slide.style.transform = `translate3d(${clientX}px, 0, 0)`;
  }

  onEnd() {
    this.dist.posicaoFinal += this.dist.movimento;
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }

  addEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
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
