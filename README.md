# 🪳 FlakeRadar

**FlakeRadar** helps QA teams track and resolve flaky tests by logging test failures and sending real-time alerts to Slack.

---

## 🚀 Features

* 📩 Slack notifications for flaky test alerts
* 📊 Visual dashboard (basic)
* 📂 Supabase backend to store flake data

---

## 🛠️ Tech Stack

* [Supabase](https://supabase.io) (Postgres + REST API)
* Node.js (Express backend)
* Simple HTML/JS frontend
* Slack Incoming Webhooks

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ks488/FlakeRadar.git
cd FlakeRadar
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the `backend` folder with the following contents:

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_or_service_role_key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
```

> 🔒 **Do not share your `.env.local` file**. Keep this file out of version control.

You can use `.env.local.example` as a template.

### 3. Install Dependencies and Run the Server

From the `backend` directory:

```bash
npm install
node server.js
```

---

## ✅ Testing It Works

Use `curl` to simulate a flaky test report:

```bash
curl -X POST http://localhost:3001/report-flake \
  -H "Content-Type: application/json" \
  -d '{
    "testName": "Login test",
    "error": "Timeout on button click",
    "repo": "frontend-auth"
  }'
```

If successful:

* The test gets logged in Supabase.
* A Slack message is sent to the webhook channel.

---

## 💡 Use Cases

* ✅ A test intermittently fails in your CI/CD pipeline → FlakeRadar logs it and instantly alerts the responsible team in Slack.
* 🔔 Developers get Slack alerts when flaky tests are detected in their repo → letting them fix issues before they become blockers.

---

## 👨‍💻 Author

Made with ❤️ by Khalid
Contributions welcome!

---
