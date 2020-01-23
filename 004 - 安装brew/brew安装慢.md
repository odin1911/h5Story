下载安装脚本
curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install >> brew_install


github下载慢，国内镜像地址
http://mirrors.ustc.edu.cn/
https://mirrors.ustc.edu.cn/help/homebrew-bottles.html


修改脚本
BREW_REPO = "https://github.com/Homebrew/brew".freeze
改为
BREW_REPO = "https://mirrors.ustc.edu.cn/brew.git".freeze


运行脚本
/usr/bin/ruby brew_install


clone core失败
会卡在Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core'.
手动clone
git clone git://mirrors.ustc.edu.cn/homebrew-core.git/ /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core --depth=1


安装完成
***


更换源
查看git源：git remote -v

cd "$(brew --repo)"
git remote set-url origin git://mirrors.ustc.edu.cn/brew.git

cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin git://mirrors.ustc.edu.cn/homebrew-core.git

cd "$(brew --repo)/Library/Taps/homebrew/homebrew-cask"
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

cd "$(brew --repo)/Library/Taps/homebrew/homebrew-cask-fonts"
git remote set-url origin https://gitee.com/od1911/homebrew-cask-fonts.git

bash设置：
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile
zsh设置：
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc