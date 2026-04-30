# Dorothy's Massage Studio Website

A business website built for Dorothy's Massage Studio using React, TypeScript, Vite, Mantine UI, and React Router.

This project supports a massage therapy practice by providing a clear, mobile-friendly website where clients can learn about services, view business information, and contact the studio. The frontend has been progressively refactored for maintainability and is now integrated with a Spring Boot backend API for business content and studio hours.

## Overview

The site is structured as a routed single-page application (SPA) with dedicated pages for:

- Home
- About
- Services
- Contact

Its purpose is to present the business clearly, communicate the services offered, provide contact and location details, and make it easy for potential clients to take the next step.

## Current Features

- Multi-page SPA using React Router
- Shared app layout with routed page rendering
- Home, About, Services, and Contact pages
- Responsive services grid
- Reusable UI components
- Shared Mantine theme defaults for more consistent styling
- Embedded Google Maps location
- Mobile-friendly navigation
- Click-to-call contact support
- Responsive image sections and business-hours display
- Business content fetched from a Spring Boot REST API
- Studio hours fetched from a Spring Boot REST API
- Static service and pricing data currently stored separately from UI rendering

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Mantine UI
- React Router

### Backend Integration

- Spring Boot REST API
- PostgreSQL

## Project Structure

    src/
      components/
      pages/
      types/
      service-cards.json
      theme.ts

### Structure Notes

- `components/` contains reusable UI components such as navigation, hero sections, and service cards
- `pages/` contains routed page-level components
- `types/` contains shared TypeScript types for frontend data modeling
- `service-cards.json` stores service and pricing content separately from UI rendering
- `theme.ts` contains shared Mantine theme defaults for consistent UI styling

## Development Focus

This project is being improved in structured phases to make it cleaner, more maintainable, and more useful for the business. Recent work includes:

- cleaning up app shell and route structure
- improving router-aware navigation
- renaming vague components for clarity
- cleaning up service card content data
- fixing service card layout overlap issues
- improving Home, Contact, and About page structure for readability and responsiveness
- adding shared Mantine theme defaults for more consistent styling
- integrating the frontend with a Spring Boot backend API for business information and hours

## Planned Features

The following features are planned for future development and are not fully implemented yet:

- Move services and pricing data into the backend
- Admin panel for updating services, pricing, and business content
- Online booking and appointment scheduling
- Authentication and protected admin routes
- AI assistant for answering common client questions
- Improved SEO and metadata
- Additional mobile polish and UI refinement

## Getting Started

### Install dependencies

```bash
yarn install
```

### Start the development server

```bash
yarn dev
```

### Build for production

```bash
yarn build
```

## Business Purpose

This website is intended to support Dorothy's Massage Studio by improving the business's online presence and making information easier for clients to access. The project is focused on delivering a clean, responsive experience that can evolve over time as business needs grow.

## Future Direction

The long-term direction of the project is to continue evolving from a frontend business website into a more complete full-stack platform with stronger business workflow support, content management capabilities, and scheduling features.

## Author

Built and maintained by Raymond Yu.
