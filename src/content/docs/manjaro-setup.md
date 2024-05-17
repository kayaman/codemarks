---
title: 'Setting  up a new Manjaro box'
description: ''
---

## Google Chrome

```sh
pamac build google-chrome
```

## VS Code

```sh
curl -L -O https://aur.archlinux.org/cgit/aur.git/snapshot/visual-studio-code-bin.tar.gz
tar -xvf visual-studio-code-bin.tar.gz
cd visual-studio-code-bin
makepkg -si
```
## Docker

```sh

```

## Flutter

```sh
curl -L -O https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.19.5-stable.tar.xz
tar -xvf flutter_linux_3.19.5-stable.tar.xz
sudo mv fllutter /usr/bin
echo 'export PATH="/usr/bin/flutter/bin:$PATH"' >> ~/.zshrc
```

## ZSH

```sh
sudo pacman -Syu zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

Configure `~/.zshrc` to:

```sh
...
plugins=(
    git
    zsh-autosuggestions
    zsh-syntax-highlighting
)
...
```

Then

```sh
source ~/.zshrc
chsh -s $(which zsh)
```

## GH

```sh
curl -L -O https://github.com/cli/cli/releases/download/v2.46.0/gh_2.46.0_linux_amd64.tar.gz
tar -zxvf gh_2.46.0_linux_amd64.tar.gz
mv gh_2.46.0_linux_amd64 gh
echo 'export PATH="/home/kayaman/lib/gh/bin:$PATH"' >> ~/.zshrc
gh --version
```

## Android Studio

```sh
sudo pacman -Syu
sudo pacman -S --needed --noconfirm base-devel git
sudo pacman -S yay
yay -S android-studio --noconfirm
```


