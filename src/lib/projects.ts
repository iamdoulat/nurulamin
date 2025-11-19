import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a modern UI and a robust backend.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Stripe'],
    githubUrl: 'https://github.com/johndoe/ecommerce-platform',
    liveUrl: 'https://ecommerce.example.com',
    image: 'project-1-thumb',
    content: `
### Overview
This project is a comprehensive e-commerce solution designed for scalability and performance. It features a customer-facing storefront, an admin dashboard for managing products and orders, and secure payment processing.

### Key Features
- **Product Catalog:** Browse products by category, search, and filter.
- **Shopping Cart:** Add products to a cart with persistent storage.
- **Checkout:** Secure checkout process powered by Stripe.
- **User Authentication:** Sign up, log in, and manage user profiles.
- **Admin Dashboard:** Manage products, inventory, orders, and customers.

### Technical Details
The frontend is built with Next.js and styled with Tailwind CSS, providing a fast and responsive user experience. Firebase is used for the backend, handling authentication, database (Firestore), and storage. Stripe integration allows for secure and reliable payment processing.
`
  },
  {
    slug: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management application to boost team productivity.',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
    githubUrl: 'https://github.com/johndoe/task-management-app',
    image: 'project-2-thumb',
    content: `
### Overview
This is a real-time, collaborative task management app designed to help teams organize their work and communicate effectively. Users can create projects, assign tasks, and track progress in a shared workspace.

### Key Features
- **Project Boards:** Organize tasks using Kanban-style boards.
- **Real-time Updates:** Changes are instantly synced across all team members using Socket.io.
- **Task Management:** Create, assign, and set due dates for tasks.
- **Comments & Attachments:** Collaborate on tasks with comments and file attachments.
- **Notifications:** Receive notifications for important updates.

### Technical Details
The application is a single-page application built with React. The backend is a Node.js/Express server connected to a PostgreSQL database for data persistence. Real-time functionality is achieved using WebSockets with Socket.io.
`
  },
  {
    slug: 'portfolio-analytics',
    title: 'Portfolio Analytics Dashboard',
    description: 'A data visualization dashboard for analyzing stock market data.',
    techStack: ['Python', 'Flask', 'React', 'D3.js', 'Docker'],
    githubUrl: 'https://github.com/johndoe/portfolio-analytics',
    liveUrl: 'https://analytics.example.com',
    image: 'project-3-thumb',
    content: `
### Overview
A powerful analytics dashboard for visualizing and analyzing financial data. It allows users to track their investment portfolios, analyze stock performance, and identify market trends.

### Key Features
- **Data Visualization:** Interactive charts and graphs built with D3.js.
- **Portfolio Tracking:** Connect brokerage accounts to track investment performance.
- **Market Data:** Access real-time and historical stock market data.
- **Customizable Dashboards:** Users can create and customize their own dashboard layouts.

### Technical Details
The backend is a Python Flask application that serves a REST API for financial data. The frontend is a React application that consumes the API and renders interactive visualizations using D3.js. The entire application is containerized using Docker for easy deployment.
`
  }
];

export const getProjects = () => projects;

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
