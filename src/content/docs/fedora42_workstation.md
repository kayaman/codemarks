---
title: Fedora 42 Workstation
description: new box setup
---

## First things first

```sh
sudo dnf update
```

## GitHub

- [instructions](https://www.codemarks.dev/fedora_github/)

### CLI

```sh
sudo dnf install gh
```

## zsh

```sh
sudo dnf install zsh

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# syntax highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# Powerleve10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```
### `~/.zshrc`

```sh
plugins=(
    git
    zsh-autosuggestions
    zsh-syntax-highlighting
    history
    command-not-found
)
```

## dotfiles

- [VSCode](https://code.visualstudio.com/docs/setup/linux)
- [Warp Terminal](https://app.warp.dev/get_warp?package=rpm))
- [nvm](https://github.com/nvm-sh/nvm)
- [Helm](https://helm.sh/)


## Docker / Podman / Podman Desktop

```sh
sudo dnf install docker-cli containerd
sudo dnf install docker-compose
sudo dnf install docker-switch
sudo dnf install podman-docker
sudo dnf install podman docker-compose
sudo dnf install podman docker-switch
flatpak install flathub io.podman_desktop.PodmanDesktop
```

## Terraform


