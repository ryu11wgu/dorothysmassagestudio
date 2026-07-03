# Dorothy's Massage Studio Website

Frontend repository for Dorothy's Massage Studio, a client-facing business website developed and maintained for a massage therapy practice.

The website provides a clean, responsive online presence where clients can learn about available massage services, view business information, check studio hours, find the location, and contact the business. The frontend is built as a routed React single-page application and integrates with a Spring Boot REST API for business content and studio hours.

## Project Status

This project is actively maintained and currently supports the public-facing website for Dorothy's Massage Studio.

The application has been progressively refactored from a static frontend into a more maintainable full-stack system with a React frontend, Spring Boot backend API, and PostgreSQL database.

## Live Website

```text
https://dorothysmassagestudio.com
```

## Related Repository

Backend API repository:

```text
https://github.com/ryu11wgu/dorothys-massage-studio-api.git
```

## Overview

Dorothy's Massage Studio Website is structured as a routed single-page application with dedicated pages for:

- Home
- About
- Services
- Contact

The goal of the website is to present the business professionally, make service information easy to find, improve mobile usability, and provide a foundation for future business features such as admin-managed content and online booking.

## Features

- Responsive React single-page application
- Routed pages using React Router
- Shared application layout using Mantine AppShell and reusable navigation components
- Home, About, Services, and Contact pages
- Mobile-friendly navigation
- Responsive service card grid
- Reusable UI components for consistent page structure
- Mantine UI theme configuration for shared styling defaults
- Embedded Google Maps location
- Click-to-call contact support
- Business information fetched from a Spring Boot REST API
- Studio hours fetched from a Spring Boot REST API
- Fallback business data used when backend API data is unavailable
- Static service and pricing data separated from UI rendering for easier maintenance
- Production-oriented frontend structure for continued feature development

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Mantine UI
- React Router
- Yarn

### Backend Integration

- Spring Boot REST API
- PostgreSQL database
- RESTful API endpoints for business information and studio hours

## Architecture

This repository contains the frontend application. The frontend is responsible for routing, page rendering, responsive UI behavior, and displaying business content to users.

The application consumes backend API data for business information and studio hours. Static service and pricing data are currently maintained separately from UI components, with plans to move this content into the backend as the project evolves.

High-level flow:

```text
React Frontend
    ↓
API Request Logic
    ↓
Spring Boot REST API
    ↓
PostgreSQL Database
```

If the backend API is unavailable or the API base URL is not configured, the frontend currently falls back to local business information so the public site can still render basic business content.

## Project Structure

```text
src/
  api/
  components/
  data/
  hooks/
  pages/
  types/
  service-cards.json
  theme.ts
```

## Structure Notes

- `api/` contains frontend API request logic for backend data.
- `components/` contains reusable UI components such as navigation, hero sections, layout sections, and service cards.
- `data/` contains local fallback business data used when API data is unavailable.
- `hooks/` contains reusable React hooks for loading business data.
- `pages/` contains routed page-level components.
- `types/` contains shared TypeScript types for frontend data modeling.
- `service-cards.json` stores service and pricing content separately from UI rendering.
- `theme.ts` contains shared Mantine theme defaults for consistent UI styling.

## Development Highlights

Recent development work includes:

- Refactored the app into a routed single-page application
- Improved page structure for Home, About, Services, and Contact pages
- Added reusable layout and UI components
- Improved router-aware navigation behavior
- Cleaned up service card rendering and content structure
- Fixed responsive layout issues in service sections
- Added shared Mantine theme defaults for consistent styling
- Integrated frontend data fetching with a Spring Boot REST API
- Connected business information and studio hours to backend API responses
- Added fallback business data for improved frontend resilience
- Improved maintainability by separating static data from UI rendering

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- Yarn

### Install Dependencies

```bash
yarn install
```

### Start Development Server

```bash
yarn dev
```

### Build for Production

```bash
yarn build
```

### Preview Production Build

```bash
yarn preview
```

## Environment Configuration

The frontend can use an environment-based API URL to connect to the backend.

Create a local environment file and provide the backend API base URL:

```text
VITE_API_BASE_URL=http://localhost:8080
```

For production, configure the API URL through the hosting provider's environment variable settings.

## Backend API Dependency

This frontend expects the backend API to provide business information and studio hours.

Example backend responsibilities:

- Serve business profile information
- Serve studio hours
- Connect to PostgreSQL
- Provide REST API responses consumed by the React frontend

The frontend can be run locally for UI development, but backend-powered content requires the Spring Boot API to be running and properly configured.

If the backend API is unavailable or the API base URL is missing, the frontend uses local fallback business data so the public site can continue displaying core business information.

## Deployment Notes

The frontend is designed to be deployed as a static production build through a frontend hosting provider.

Typical deployment flow:

```text
GitHub Repository
    ↓
Hosting Provider Build Step
    ↓
Production Static Site
    ↓
API Requests to Spring Boot Backend
```

The production environment should be configured with the correct backend API URL so the frontend can access live business data.

## Planned Improvements

Planned improvements include:

- Move services and pricing data into the backend API
- Add admin-managed content updates
- Add authentication and protected admin routes
- Add online booking or appointment request functionality
- Improve SEO metadata
- Add stronger loading and error states for API-driven content
- Add frontend tests for important UI and data-loading behavior
- Continue mobile UI polish and accessibility improvements

## Business Purpose

This website supports Dorothy's Massage Studio by improving the business's online presence and making important information easier for clients to access. It provides a maintainable foundation that can evolve from a public business website into a fuller business management platform over time.

## Maintainer

Developed and maintained by Raymond Yu.
