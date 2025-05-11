---
title: 'Initial setup of an OpenSUSE box'
description: 'Initial setup of an OpenSUSE box'
---

## ZSH and Oh-my-ZSH


## Git, GitHub and GH

See [this](https://www.codemarks.dev/fedora_github/).

```bash
sudo zypper addrepo https://cli.github.com/packages/rpm/gh-cli.repo
sudo zypper ref
sudo zypper install gh
```

## VS Code

```bash
sudo zypper addrepo https://packages.microsoft.com/yumrepos/vscode vscode
sudo zypper refresh
sudo zypper install code
```
