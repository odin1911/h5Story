NVM
nvm地址：https://github.com/nvm-sh/nvm

在安装nvm之前需要安装Xcode命令工具
xcode-select --install

在线安装失败时，下载install.sh脚本安装

设置淘宝源
# NVM
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node

安装最新版本node
nvm install node

nvm ls


NRM
全局安装
npm install -g nrm

查看
nrm ls

切换
nrm use taobao