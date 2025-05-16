# 🪳 FlakeRadar

FlakeRadar helps QA teams track and resolve flaky tests with Slack alerts and dashboards.

## Features
- Slack notifications for detected flaky tests
- Basic visual dashboard
- Supabase backend to store flake data

## Tech Stack
- Supabase (Postgres + REST API)
- Node.js backend
- Simple JS frontend
- Slack integration

## Getting Started

### 1. Clone and Setup
```bash
git clone https://github.com/ks488/FlakeRadar.git
cd FlakeRadar
cp .env.local.example .env.local



## Run this to test
```
- curl -X POST http://localhost:3001/report-flake \
  -H "Content-Type: application/json" \
  -d '{
    "testName": "Login test",
    "error": "Timeout on button click",
    "repo": "frontend-auth"
  }'
