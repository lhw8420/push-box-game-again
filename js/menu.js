class Menu extends Block {
  constructor(target) {
    super();
    this.target = target;
    this.addTo(target);
    this.setStyle({ width: '100%', height: '100%', background: 'url(images/box.jpg) no-repeat center/120%' });
    this.menuButton = {
      position: 'absolute',
      left: '50%',
      width: '200px',
      height: '50px',
      marginLeft: '-100px',
      lineHeight: '50px',
      cursor: 'pointer',
      borderRadius: '15px',
      backgroundColor: 'rgba(25, 233, 105, 0.5)',
      transition: '.2s',
    };
    this.menus = [];
    this.getMenu();
  }

  getMenu() {
    const menuList = ['开始游戏', '选择关卡', '编辑地图'];
    menuList.forEach((item, index) => {
      this.menuButton.top = 300 + index * 60 + 'px';
      this.menus[index] = this.create();
      this.menus[index].textContent = item;
      this.setStyle(this.menuButton, this.menus[index]);
      this.addTo(this.el, this.menus[index]);
    });
  }

  home() {
    this.menuButton.top = '420px';
    this.homeButton = this.create();
    this.homeButton.textContent = 'HOME';
    this.setStyle(
      {
        position: 'absolute',
        zIndex: '999',
        right: '0px',
        width: '80px',
        height: '40px',
        lineHeight: '40px',
        cursor: 'pointer',
        backgroundColor: 'rgba(25, 233, 105, 0.3)',
        borderRadius: '15px',
      },
      this.homeButton
    );
    this.addTo(this.target, this.homeButton);
  }
}
