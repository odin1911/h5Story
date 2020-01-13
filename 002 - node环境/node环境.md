NVM
nvm地址：https://github.com/nvm-sh/nvm

在安装nvm之前需要安装Xcode命令工具
xcode-select --install

在线安装失败时，下载install.sh脚本安装

设置淘宝源
# NVM
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
export NVM_IOJS_ORG_MIRROR=https://npm.taobao.org/mirrors/iojs

安装最新版本node
nvm install node

nvm ls


NRM
nrm地址：https://github.com/Pana/nrm

全局安装
npm install -g nrm

查看
nrm ls

切换
nrm use taobao


NPM
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
npm config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/


avn自动切换node版本