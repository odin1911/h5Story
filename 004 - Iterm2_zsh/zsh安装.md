安装zsh
brew install zsh zsh-completions

让字体能用 Homebrew 来安装
brew tap homebrew/cask-fonts

下载字体
brew cask install font-sourcecodepro-nerd-font

找字体
brew search nerd

设置默认shell
chsh -s /bin/zsh

安裝 oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
or
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

安裝 powerlevel9k
git clone https://github.com/bhilburn/powerlevel9k.git ~/.oh-my-zsh/custom/themes/powerlevel9k
git clone https://gitee.com/od1911/powerlevel9k.git ~/.oh-my-zsh/custom/themes/powerlevel9k
