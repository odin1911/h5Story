# lockstep (帧同步/锁定步进算法/锁步同步)

## 笔记

和时间无关, 只和动作一致性有关, 保证多台机器表现出完全一致的游戏状态

一个逻辑周期, 与表现层分开, 基于操作和对操作的一致性计算

收集完每个回合所有玩家的操作指令后, 才向前扮演一步; 表现层做足够平滑的动画拟合

超时机制是客户端用来解决如何确定当前回合要提交多少操作面设定的; 模拟层的心跳周期影响了表现层如何把离散状态拟合成连续状态

2种同步方案:

1. 基于操作一致性演算(每个客户端计算)
2. 权威主机计算结果(单个权威服务器运算)

判断状态不一致: 每个客户端同时计算出每个回合的所有单位的状态的一个hash值, 进行比较

## 参考资料

[lockstep 网络游戏同步方案](https://blog.codingnow.com/2018/08/lockstep.html)

[游戏中的网络同步机制——Lockstep](http://bindog.github.io/blog/2015/03/10/synchronization-in-multiplayer-networked-game-lockstep/)

[帧锁定同步(frame lock sync)按帧同步（frame sync）状态同步(state sync)](https://zentia.github.io/2019/04/22/frame-sync/)

[再谈网游同步技术](http://www.skywind.me/blog/archives/1343)

[影子跟随算法](http://www.skywind.me/blog/archives/1145), 附DEMO: Shadow.rar
