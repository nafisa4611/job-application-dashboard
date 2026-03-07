🚀 QuickHire - Simple Job Board Application
QuickHire is a modern, mini job board platform built as a technical assessment. It allows users to browse, search, and apply for startup jobs while providing a streamlined interface for admins to manage listings.

📋 Project Overview
This project consists of a Next.js 15 frontend and a Node.js/Express backend, integrated with MongoDB Atlas for data persistence. The UI is strictly implemented based on the provided Figma design, focusing on clean typography, responsive layouts, and professional UX.

✨ Features
Frontend (Next.js)
Job Listings: Real-time search and filtering by category (Design, Engineering, Marketing) and location.

Auto-Reset Search: The listing automatically resets to show all jobs when the search query is deleted.

Job Details: Dynamic routing to display full job descriptions.

Application Form: "Apply Now" functionality with validation for Email and Resume URLs.

Admin Dashboard: Dedicated view to post new jobs and delete existing listings.

Responsive UI: Mobile-first design using Tailwind CSS.

Backend (Node.js/Express)
RESTful API: Endpoints for job management and application submissions.

Validation: Server-side checks for mandatory fields and data formats.

CORS Enabled: Configured to allow secure communication with the Vercel deployment.

🛠️ Tech Stack
Frontend: Next.js 15 (App Router), Tailwind CSS, Axios, React Icons.

Backend: Node.js, Express.js, Mongoose, Dotenv, Cors.

Database: MongoDB Atlas.

Deployment: Vercel (Frontend), Render (Backend).

📂 Project Structure

/quickhire-task
├── /backend
│   ├── /config         # Database connection
│   ├── /models         # Mongoose Schemas (Job, Application)
│   ├── /routes         # API Route definitions
│   └── server.js       # Entry point
└── /frontend
    ├── /app            # Next.js App Router (Jobs, Admin, Details)
    ├── /components     # Reusable UI (JobCard, Navbar, Footer, Banner)
    └── /public         # Static assets (Hero images, Logos)


⚙️ Installation & Setup
1. Backend Setup
Navigate to the backend directory.

Install dependencies:

Bash
npm install
Create a .env file in the root of the backend folder:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
Start the server:

Bash
npm run dev
2. Frontend Setup
Navigate to the frontend directory.

Install dependencies:

Bash
npm install
Create a .env.local file in the root of the frontend folder:

Code snippet
NEXT_PUBLIC_API_URL=http://localhost:5000/api
Run the development server:

Bash
npm run dev

Method,Endpoint,Description
GET,/api/jobs,Fetch all job listings
GET,/api/jobs/:id,Get details for a specific job
POST,/api/jobs,Create a new job listing (Admin)
DELETE,/api/jobs/:id,Delete a job listing (Admin)
POST,/api/applications,Submit a job application