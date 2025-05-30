# ⚙️ Automation Platform (Zapier-like System)

A powerful, extensible automation platform for connecting apps and triggering workflows. Built with microservices in mind and powered by the **Transactional Outbox Pattern** for reliability and consistency in distributed processing.

---

## 📦 Tech Stack

- **Frontend:** Next.js
- **Backend Services:** Node.js (Express) + TypeScript
- **Database:** PostgreSQL with Prisma ORM
- **Queue System:** Redis with BullMQ
- **Architecture:** Microservices (moving to monorepo)
- **Pattern:** Transactional Outbox Pattern

---

## 🧱 Services Overview

| Service        | Description                                      |
|----------------|--------------------------------------------------|
| `primary-backend` | Handles user APIs, automation logic, DB writes |
| `hooks`         | Sends and receives webhooks                     |
| `processor`     | Scans outbox table and enqueues jobs            |
| `worker`        | Consumes jobs from Redis queues and executes them |
| `frontend`      | User interface for managing automations         |
| _More_          | Planned as platform expands                     |

---

