# web audio 使用麦克风

## 笔记

在`getUserMedia`返回前创建`AudioContext`, `state`为`suspended`, 造成收集不到麦克风数据

在`getUserMedia`返回后`AudioContext`, `state`为`running`

## 参考

[使用float](https://github.com/mdn/voice-change-o-matic-float-data)

[使用byte](https://github.com/mdn/voice-change-o-matic)
