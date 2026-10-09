# InterviewIQ.AI – AI Interview Agent

InterviewIQ.AI is a web application designed to help users practise interviews with AI-generated questions and review their answers.

## Features

- AI-powered interview practice
- Resume upload and PDF processing
- Answer evaluation and feedback
- Interview reports and history
- User authentication
- Razorpay payment integration for interview credits

## Tech Stack

**Frontend:** React.js, Vite, Redux Toolkit

**Backend:** Node.js, Express.js

**Database:** MongoDB, Mongoose

**Authentication:** Firebase, JWT

**AI Integration:** OpenRouter API

**Payment Gateway:** Razorpay

**Other Tools:** Axios, Multer, PDF.js

## Live Demo

https://interview-agent-r99k.onrender.com

## Project Structure

- `interviewIQ/client` – Frontend application
- `interviewIQ/server` – Backend application

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Laxmireddy91/Interview_agent.git
cd Interview_agent/interviewIQ
```

### 2. Start the frontend

```bash
cd client
npm install
npm run dev
```

### 3. Start the backend

Open another terminal:

```bash
cd interviewIQ/server
npm install
npm run dev
```

Configure the required environment variables for the frontend and backend before running the application. Never commit API keys, database credentials, or other secrets.

## Learning Goals

This project provides practical exposure to full-stack web development, AI service integration, resume processing, and payment gateway workflows.
