---
title: Fedora 40: new box setup
description: Setup basic software on a new Fedora 40 machine
---

## dnf

```bash
sudo dnf update
sudo systemctl daemon-reload
```

## Google Chrome

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
sudo dnf install ./google-chrome-stable_current_x86_64.rpm
```

## Visual Studio Code

```bash
sudo dnf install ./google-chrome-stable_current_x86_64.rpm
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
dnf check-update
sudo dnf install code
```

## Docker

```bash
sudo dnf -y install dnf-plugins-core
sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
sudo dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

```bash
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

```bash
sudo dnf install docker-compose
```

Managing Docker as non-root

```bash
sudo groupadd docker
sudo usermod -aG docker $USER
```
