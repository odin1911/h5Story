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

- 位置预测和位置拉扯技术
- Time Warp 同步
- 帧间无等待改进
- 本地插值平滑
- 腾讯游戏开发精粹
- 客户端动态预测技术和延时补偿技术
- 脏状态追踪，相关性，优先级，过滤，带宽模型，丢包与确认

## 参考资料

[What Every Programmer Needs To Know About Game Networking](https://gafferongames.com/post/what_every_programmer_needs_to_know_about_game_networking/) - 一个系列, 看一下系列的其它部分

[MOBA类游戏是如何解决网络延迟同步的？](https://www.zhihu.com/question/36258781)

[状态同步笔记](https://blog.csdn.net/a1047120490/article/details/107643707)

[网游同步算法之导航推测（Dead Reckoning）算法](https://blog.csdn.net/czh3642210/article/details/53412875)

[小谈网络游戏同步](https://www.oschina.net/question/565065_64649)

[从《王者荣耀》来聊聊游戏的帧同步](https://mp.weixin.qq.com/s?__biz=MzI3MTQ1NzU2NA==&mid=2247483875&idx=1&sn=215a6d5965fbd578bf06b6c88496612f&chksm=eac0cd90ddb7448657df188a6c78777e66228cff592f61de2959867148a61a9005b80ab7b54f&scene=21#wechat_redirect)

[《守望先锋》回放技术-阵亡镜头、全场最佳和亮眼表现](https://gameinstitute.qq.com/community/detail/115186)
