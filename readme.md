# 项目参数

1. 整体是一个大盒子, 小盒子( 箱子 角色 位置 墙)

2. 规格参数:  10*10的大小的盒子(每一个小盒子的大小, 70px )
3. 操作,
   1.  上下左右, 小人的移动(键盘事件)
   2. 按钮, 鼠标进行操作, 选择关卡等操作
4. 流程(): 
   1. 游戏开始前, 关卡选择,准备信息,按键介绍,
   2. 开始的准备阶段(?)
   3. 游戏正式开始( 主要内容 )
   4. 游戏的获胜()
5. HTML(DIV) CSS 原生JS
   1. 面向对象的方法解决问题.
6. 对象, 类: 
   1. 游戏类(主要是整个游戏及参数的把控)(干干净净,只有一个map)
      1. 设计游戏进程流程
   2. 场景: (游戏状态的推进, 游戏中对象的交互...箱子和人之间推动关系)
      1. 角色,关系, 行为表现
   3. 箱子, 小人, 墙体, 地板, 获胜点(布局, ), 按钮类, 步数的记录, 撤回退回到上一步.... 神秘代码( 上上下下左右左右 ABAB ,无敌模式(...发射子弹...)), 
      1. 共同的block基类(存储了盒子的尺寸等信息, 移动等功能)
   4. 皮肤功能, ...
   5. 地图的系统(JSON格式)
      1. 箱子
      2. 角色
      3. 墙等
7. 事件, window document



位置的参数信息: {x: 0,y: 0}

需要完善的东西:

1. 不同方向和转身
2. 碰撞和推
3. 结构上的进一步优化
4. 场景切换,以及交由GAME状态完成
5. 游戏获胜判断....
6. ....

# 辅助命令
git push失败unable to access ‘https://github.com/...‘的解决办法
git config --global --unset http.proxy
git config --global --unset https.proxy
