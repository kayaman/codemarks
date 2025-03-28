---
title: 'Manjaro setup'
description: ''
---

**Enable `AUR` and `Flatpak` support**

## Installing `yay`

```sh
sudo pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

## Warp Terminal

```sh
yay -S warp-terminal
```

## Google Chrome

```sh
pamac build google-chrome
```

## VS Code

```sh
pamac build visual-studio-code-bin
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


