# egret引擎使用记录

## 使用全局字体

index.html

``` css
<style>
    @font-face {
        font-family: 'aigeFont';
        src:local("Helvetica"),
            local("Arial"),
            local("PingFang SC"),
            local("Hiragino Sans GB"),
            local("Heiti SC"),
            local("Microsoft YaHei"),
            local("WenQuanYi Micro Hei"),
    }
</style>
```

main.ts

``` typescript
egret.TextField.default_fontFamily = 'aigeFont';
```
