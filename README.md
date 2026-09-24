# CloudDeploy — Real-World Project Guide

A bilingual (English / ไทย) step-by-step guide that teaches you to build **CloudDeploy**, a production-shaped platform on AWS, GCP and Azure — Terraform + Terragrunt modules per cloud, managed Kubernetes on each, and ShopMicro deployed with Datadog, Keycloak and GrowthBook wired in.

It is project **#7** of the Learn Hub [Real-World Projects](https://projects.avetavos.com/taskflow/en/introduction/roadmap/) series — each project rebuilds a real application while adapting a different slice of the Learn Hub courses.

**Live:** https://projects.avetavos.com/clouddeploy/en/

## What you build

| Layer | Tech |
|-------|------|
| IaC | Terraform 1.16 · Terragrunt 1.1 · providers aws 6 / google 8 / azurerm 5 |
| Clusters | EKS · GKE · AKS with workload identity |
| Data | managed PostgreSQL 17 on each cloud |
| Platform | Datadog agent + monitors · Keycloak 26 (OIDC at the gateway) · GrowthBook |
| CI/CD | GitHub Actions with OIDC · plan on PR, apply on merge · drift detection |
| Workload | the ShopMicro Helm chart from project #3 |

Features: network, cluster, data and IAM modules for three clouds behind one Terragrunt tree, OIDC-federated pipelines, the ShopMicro chart deployed with cloud-native ingress, observability through Datadog, single sign-on through Keycloak, feature flags through GrowthBook, and a cost-aware teardown.

## The guide itself

This repo is an [Astro Starlight](https://starlight.astro.build/) site. The lessons live in `src/content/docs/en/**` and `src/content/docs/th/**`, grouped into 15 modules (cicd → data → datadog → deploy-shopmicro → growthbook → iam → introduction → keycloak → kubernetes → multi-cloud → networking → setup → terraform → terragrunt → wrap-up). Each lesson follows the same shape: *what we're building → why → pros & cons → build it → verify → recap*, with full copy-pasteable code. Every code block is byte-identical between the two languages (`npm run check` enforces it), and the project has been assembled from the lessons and built/run end to end as part of review.

## Run the guide locally

```bash
npm install
npm run dev      # http://localhost:4321/clouddeploy/
npm run build    # static build to dist/
npm run check    # EN/TH parity check
```

## Deployment

Static site (`output: 'static'`, `base: '/clouddeploy'`) served by its own Cloudflare Worker at `projects.avetavos.com/clouddeploy/*`. `npm run deploy` builds, stages `dist/` under `.cf-assets/clouddeploy/` and runs `wrangler deploy`; the whole series can be redeployed with `learn-hub/tools/deploy-realworld.sh`.
