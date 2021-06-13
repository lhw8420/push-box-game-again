class Box extends Block {
  constructor(pos) {
    super();
    this.pos = pos;
    this.pvent['background'] = 'url(./images/box.png) no-repeat center/60px 60px';
    this.setStyle(this.pvent);
    this.renderPos();
  }
}
