# 网络同步

## 笔记

对等锁步(Peer-to-Peer Lockstep):

- 客户端保证确定性
- 源于RTS, 将游戏抽象为一系列回合
- 帧同步, 点对点, 需要等待最滞后的玩家消息才进入下个回合

客户端服务器(Client/Server):

- 状态同步
- 客户端将输入发送到服务器, 根据服务器返回的状态插值显示

客户端预测(Client-Side Prediction):

- 对状态同步的优化
- 发送输入的同时预测自己的状态, 根据服务器返回的状态校正自己的状态

---

扩展

- 航位推测法（Dead Reckoning）
- 位置预测和位置拉扯技术
- 插值算法
- 本地插值平滑
- 腾讯游戏开发精粹

## 参考资料

[What Every Programmer Needs To Know About Game Networking](https://gafferongames.com/post/what_every_programmer_needs_to_know_about_game_networking/) - 一个系列, 看一下系列的其它部分

[MOBA类游戏是如何解决网络延迟同步的？](https://www.zhihu.com/question/36258781)
