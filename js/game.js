class Game {
  constructor(el) {
    this.el = document.querySelector(el);
    this.init();
    this.goHome();
    this.reduce = false;
    this.keyPath = {
      arrowup: { x: 0, y: -1 },
      arrowdown: { x: 0, y: 1 },
      arrowleft: { x: -1, y: 0 },
      arrowright: { x: 1, y: 0 },
    };
  }

  // 初始化
  init() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }

  goHome() {
    this.menu = new Menu(this.el);

    this.menu.menus.forEach((item) => {
      item.onmouseenter = () => {
        item.style.transform = 'scale(1.1)';
      };
      item.onmouseleave = () => {
        item.style.transform = 'scale(1)';
      };
    });

    this.menu.el.addEventListener('click', (e) => {
      if (e.target === this.menu.menus[0]) {
        this.num = 0;
        this.beginGame();
      }
    });
  }

  beginGame() {
    this.gameBeginInit();
    this.el.style.background = 'url(images/land.png) center/60px 60px';
    this.map = new Map(mapCon[this.num]);
    this.map.addTo(this.el);

    this.setEvent();
  }

  setEvent() {
    this.fooKey = (e) => {
      if (this.reduce) return;
      this.reduce = true;
      setTimeout(() => {
        this.reduce = false;
      }, 100);

      // e.preventDefault()
      let keyJson = this.keyPath[e.key.toLocaleLowerCase()];
      if (keyJson) {
        this.map.move(keyJson);

        // this.history.addHistory(this.map);
      }
      // if (this.map.isWin) {
      //   this.section4();
      // }
    };

    window.addEventListener('keydown', this.fooKey);
  }

  gameBeginInit() {
    this.el.textContent = '';
    this.menu.home();

    this.menu.homeButton.addEventListener('click', (e) => {
      this.el.textContent = '';
      this.goHome();
    });
  }
}
