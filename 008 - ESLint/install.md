一些参考网页：
    https://www.yuque.com/3w/notes/hov5at 是一些技术笔记
    https://www.cnblogs.com/xjnotxj/p/10828183.html 安装过程 关于? How would you like to use ESLint? 
    https://github.com/forthealllight/blog/issues/45 eslint规范ts
    https://zhuanlan.zhihu.com/p/62401626 eslint规范ts *
    https://www.jianshu.com/p/e52372196c9d eslint规范ts
    https://larrylu.blog/improve-code-quality-using-eslint-742cf1f384f1 安装
    https://github.com/forthealllight/blog/issues/45 *

初始化
npm init -y

安装 eslint
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

初始化 eslint
./node_modules/.bin/eslint --init

安装 prettier 依赖
npm i -D prettier eslint-config-prettier eslint-plugin-prettier

```txt
prettier: 格式化规则程序
eslint-config-prettier: 将禁用任何可能干扰现有 prettier 规则的 linting 规则
eslint-plugin-prettier: 将作为ESlint 的一部分运行 Prettier分析。
```

关于全局安装还是局部安装：
ESLint和typescript需要统一，推荐局部安装，但是egret对npm不友好，还需要验证。
