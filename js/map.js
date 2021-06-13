class Map {
  constructor(json) {
    this.json = JSON.parse(JSON.stringify(json));
    this.createWin();
    this.person = new Person(this.json.person[0]);
    this.createWall(json);
    this.createBox(json);
    this.isWin = false;
  }

  createWall() {
    this.wall = [];
    this.json.wall.forEach((v) => {
      this.wall.push(new Wall(v));
    });
  }

  addTo(traget) {
    this.win.forEach((v) => {
      v.addTo(traget);
    });

    if (this.json.person.length) {
      this.person.addTo(traget);
    }

    this.wall.forEach((v) => {
      v.addTo(traget);
    });

    this.box.forEach((v) => {
      v.addTo(traget);
    });
  }

  createBox() {
    this.box = [];
    this.json.box.forEach((v) => {
      this.box.push(new Box(v));
    });
  }

  createWin() {
    this.win = [];
    this.json.win.forEach((v) => {
      this.win.push(new Win(v));
    });
  }

  // keyJson 变化量
  move(keyJson) {
    // 小人当前位置
    let psnPos = this.person.pos;

    // // 小人将要到的位置
    // let psnTargetPos = {
    //   x: psnPos.x + keyJson.x,
    //   y: psnPos.y + keyJson.y,
    // };

    // // 箱子要到的位置
    // let boxTargetPos = {
    //   x: psnTargetPos.x + keyJson.x,
    //   y: psnTargetPos.y + keyJson.y,
    // };

    // let boll = this.hasBlock(this.box, boxTargetPos) || this.hasBlock(this.wall, boxTargetPos);

    // if (this.hasBlock(this.wall, psnTargetPos)) return;

    // if (this.hasBlock(this.box, psnTargetPos)) {
    //   if (boll) return;
    //   this.getBlock(this.box, psnTargetPos).move(keyJson);
    // }

    this.person.turn(keyJson);
    // this.checkWin();
  }
}
