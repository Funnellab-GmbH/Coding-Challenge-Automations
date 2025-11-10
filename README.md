# n8n + Express Coding Challenge

Choose **one** setup: **Local (Docker Desktop)** or **GitHub Codespaces**.

## 🚀 Goals
- Build an **n8n workflow** that receives a webhook, transforms data and **POSTs to the Express endpoint** with HMAC.
- Implement or extend the **Express API** (already scaffolded) and prove **idempotency** + a **status** check.

---

## 🧰 Prerequisits
- **Option A: Local**
  - Docker Desktop (Windows requires WSL2)
- **Option B: Cloud**
  - GitHub account with Codespaces quota

---

## 🟢 Quick start

### A) Run locally
```bash
cp .env.example .env
docker compose up --build
```

- API: http://localhost:3000/health
- n8n: http://localhost:5678 (create owner account on first run)

### B) Run in GitHub Codespaces
1. Click Code → Create codespace on main.
1. Wait for the container to build.
1. In the VS Code terminal:
```bash
cp .env.example .env
docker compose up --build
```
If ports don’t auto-forward, forward 3000 and 5678.