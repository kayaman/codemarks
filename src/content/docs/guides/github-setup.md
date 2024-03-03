---
title: GitHub Setup
description: Setup GitHub basics on a new machine
---

## User configuration

```bash
git config --global user.name "Marco Antonio Gonzalez Junior"
git config --global user.email "m@rco.sh"
```

## SSH configuration

```bash
ssh-keygen -t ed25519 -C "m@rco.sh"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
cat ~/.ssh/id_ed25519.pub
```

Using the output above, create new Authentication and Signing keys on [GitHUb](https://github.com/settings/keys)

```bash title="Testing the configuration"
ssh -T git@github.com
```

## GPG configuration

```bash
gpg --full-generate-key
gpg --list-secret-keys --keyid-format=long
gpg --armor --export <GPG key id>
# Prints the GPG key ID, in ASCII armor format
```

Copy your GPG key, beginning with `-----BEGIN PGP PUBLIC KEY BLOCK-----` and ending with `-----END PGP PUBLIC KEY BLOCK-----`

```bash
git config --global gpg.format ssh
git config --global user.signingkey <path to ssh file .pub>
git config --global commit.gpgsign true
```
