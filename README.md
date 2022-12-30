[![GitHub release](https://img.shields.io/github/release/nucleuscloud/deploy-action.svg?style=flat-square)](https://github.com/nucleuscloud/deploy-action/releases/latest)
[![GitHub marketplace](https://img.shields.io/badge/marketplace-deploy--action-blue?logo=github&style=flat-square)](https://github.com/marketplace/actions/deploy-action)
[![Test workflow](https://img.shields.io/github/actions/workflow/status/nucleuscloud/deploy-action/test.yml?branch=main&label=test&logo=github&style=flat-square)](https://github.com/nucleuscloud/deploy-action/actions?workflow=test)

# deploy-action

The `nucleuscloud/deploy-action` is a Typescript action that deploys your service to Nucleus in your GitHub Actions workflow.

Must be used with [nucleuscloud/setup-nucleus-cli-action@v1](https://github.com/marketplace/actions/setup-nucleus-cli).
Service account credentials are required to deploy a service.

## Usage

### Deploy

Set up a Nucleus service account in order to authenticate against Nucleus CLI.

```yaml
name: ci

on:
  push:
    branches: main

jobs:
  login:
    runs-on: ubuntu-latest
    steps:
      - name: Download Nucleus CLI & Login
        uses: nucleuscloud/setup-nucleus-cli-action@v1
        with:
          client_id: ${{ secrets.CLIENT_ID }}
          client_secret: ${{ secrets.CLIENT_SECRET }}
      - name: Deploy service to Nucleus
        uses: nucleuscloud/deploy-action@v1
        with:
          environment: nucleus-env
```

## Customizing

### inputs

| Name          | Type   | Required | Description                           |
| ------------- | ------ | -------- | ------------------------------------- |
| `environment` | String | true     | Nucleus environment to deploy service |
