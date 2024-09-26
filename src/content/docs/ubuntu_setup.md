---
title: 'Setting up a new Ubuntu box'
description: ''
---

## update & upgrade

```sh
sudo apt update && sudo apt upgrade
```

## Node (Using nvm)

```sh
wget -q -O- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
. ~/.zshrc
```

```sh
nvm --version
```

```sh
nvm install node
```

##  Docker

### Setup APT´s repoitory:

```sh
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

### Installl binaries:

```sh
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### Post-install

```sh
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```

## GDebi

```sh
sudo apt install gdebi -y
```

## ZSH & oh-my-zsh

```sh
sudo apt update
sudo apt install zsh curl git
```


```sh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

```sh
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
```

```sh
reboot
```
