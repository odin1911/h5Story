# 总结

## 实现的功能

- 选择输出设备, 并播放声音
- 选择输入设备, 实现录音

## 关于录音

2种方式

- `navigator.mediaDevices.getUserMedia`获取录音权限, 通过`MediaRecorder`读入音频流
- `navigator.mediaDevices.getUserMedia`获取录音权限, 通过`AudioContext.createMediaStreamSource`读入音频流

参考: <https://www.jianshu.com/p/2199939b629d>

`MediaRecorder`可录制视频, 但兼容性不佳

设置输入设备, 使用`getUserMedia`

``` javascript
navigator.mediaDevices
  .getUserMedia({
    audio: {
      deviceId: { exact: this.currentRecordingDevice },
    },
  })
  .then(stream => {
    this.currentStream = stream;
    if (this.m_source) this.m_source.disconnect();
    this.m_source = this.m_context.createMediaStreamSource(stream);
    this.m_source.connect(this.m_analyser);
  })
  .catch(err => { });
```

## 关于播放声音

`setSinkId`用于设置设备
