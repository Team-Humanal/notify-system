Notify System – Monorepo (API Gateway Skeleton)

This repository contains a Node.js + TypeScript monorepo with a basic API Gateway service.
It includes a working /v1/notify endpoint and a clean workspace structure for future services.

📦 Monorepo Structure
notify-system/
 ├─ packages/
 │   ├─ api-gateway/      # Express API Gateway (POST /v1/notify)
 │   └─ shared/           # Shared utilities (future expansion)
 ├─ package.json          # Root workspace configuration
 ├─ README.md
 └─ tsconfig.json

🚀 API Gateway

Location: packages/api-gateway

This service exposes the route:

POST /v1/notify


Use this endpoint to accept notification requests (email, SMS, push — future scope).

🛠 Getting Started
1. Install dependencies

From the project root:

npm install


This installs dependencies for all workspace packages.

2. Run the API Gateway

Option 1 — From root:

npm run dev --workspace=api-gateway


Option 2 — Directly inside the folder:

cd packages/api-gateway
npm install
npm run dev


Server will start at:

http://localhost:3000

📮 API Usage
POST /v1/notify

URL

http://localhost:3000/v1/notify


Headers

Content-Type: application/json


Body Example

{
  "to": "test@example.com",
  "message": "Hello, this is a notification!"
}


Response Example

{
  "status": "Message received",
  "to": "test@example.com",
  "message": "Hello, this is a notification!"
}

🧱 Tech Stack

Node.js

TypeScript

Express.js

ts-node-dev

NPM Workspaces

Monorepo architecture

👥 Collaboration

Other team members can clone and start the project:

git clone https://github.com/<organization>/<repository>.git
npm install
npm run dev --workspace=api-gateway
