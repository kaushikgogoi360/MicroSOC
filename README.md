# Security Operations Center (SOC) Dashboard — Backend & Frontend (MERN Stack)

## Overview
This project is a full-stack Security Operations Center (SOC) Dashboard built using the MERN stack. It provides functionality for managing alerts, incidents, event logs, users, authentication, and analytics. The backend supplies a secure REST API, and the frontend consumes these APIs to deliver a complete SOC management interface.

## Features
- User authentication using JWT  
- Role-based access control (Admin, Analyst, Viewer)  
- Alert creation, listing, filtering, and management  
- Incident lifecycle management  
- Event log ingestion and storage  
- Asset and activity monitoring  
- Dashboard with analytics and system metrics  
- Secure and scalable API structure  
- Organized folder architecture for maintainability  

## Tech Stack

### Backend
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- JWT Authentication  
- Nodemon (development)  

### Frontend
- React.js  
- Axios for API communication  
- React Router  
- Context API or Redux (optional based on implementation)  
- TailwindCSS or custom CSS  

## Backend Architecture (Summary)
- `server.js` initializes the server and handles MongoDB connection.  
- Routes organized under `/api/*`.  
- Controllers contain business logic for each module.  
- Middleware manages authentication, authorization, and error handling.  
- Models define MongoDB schemas for alerts, incidents, users, and events.  

## API Endpoints (Examples)
- `POST /api/auth/register`  
- `POST /api/auth/login`  
- `GET /api/alerts`  
- `POST /api/incidents`  
- `GET /api/events`  

## Frontend Architecture (Summary)
- Pages for dashboard, alerts, incidents, login, analytics, and assets  
- Reusable components for layout, tables, charts, and form inputs  
- API service layer for communication with backend endpoints  
- State management via Context API or Redux  
- Authentication state stored securely (HTTP-only cookies or local storage)  
