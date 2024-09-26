---
title: PowerShell
description: ''
---

## Become Administrator

```sh
start-process PowerShell -verb runas
```

## Create link

```sh
cmd /c mklink /D "C:\Users\m\Projects" "\\wsl.localhost\Ubuntu-24.04\home\kayaman\Projects"
```
