---
title: Kubernetes cheat sheet
description: Common commands and tricks.
---

### Restart a pod

Scale down to zero

```sh
kubectl scale deployment <deployment_name> --replicas=0
```

Scale back up to the original number of replicas

```sh
kubectl scale deployment <deployment_name> --replicas=<original_number>
```


