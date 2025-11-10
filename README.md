# n8n + Express Coding Challenge

> Choose **one** setup: **Local (Docker Desktop)** or **GitHub Codespaces**.

## 🚀 Goals
- Build an **n8n workflow** that receives a webhook, transforms data, and **POSTs to the Express endpoint** with HMAC.
- Implement or extend the **Express API** (already scaffolded) and prove **idempotency** + a **status** check.

---

## 🧰 Prereqs
- **Option A: Local**
  - Docker Desktop (Windows requires WSL2)
- **Option B: Cloud**
  - GitHub account with Codespaces quota

---

## 🟢 Quick start

### A) Run locally
```bash
cp .env.example .env
# put the HMAC_SECRET we sent you privately
docker compose up --build
