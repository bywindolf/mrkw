# Portfolio Project

This is the final assignment for the **Frontend Developer** course. This project is a personal portfolio website built with Next.js, Tailwind CSS, and TypeScript, integrating FireCMS for content management and deployed.

https://kristoffer.windolf.se

## Technologies Used

- [x] **Next.js (App Router)** – React framework for server-side rendering and API routes.
- [x] **Tailwind CSS** – Utility-first CSS framework for styling.
- [x] **TypeScript** – Static typing for maintainability.
- [x] **FireCMS** – Headless CMS for managing portfolio content.
- [x] **Vercel and Google Cloud** – Hosting and deployment platform.

## Project Structure

This portfolio follows a structured approach using **BEM class naming** and component-based architecture. Each component has a default className for global styling and is broken into modular CSS files for maintainability.

## Feature Branch Workflow

- **Feature branches**: Each feature is developed in its own branch.
- **Development branch**: Feature branches are merged into `dev`.
- **Main branch**: Once tested, dev **is merged into** main for production deployment.

## Deployment

The project is deployed on **Google Cloud**. The deployment workflow ensures:

1. **Feature branches** → Merged into `dev `for staging.
2. **Dev branch** → Merged into `main` for production.
3. **CI/CD** automates the deployment process.
