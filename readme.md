# Next.js Application

## Overview

This Next.js application is a web application with authentication and real-time communication features, utilizing LiveKit for video/audio calling functionality.

## Setup Instructions for Frontend (Next.js)

1. **Navigate to the frontend directory:**

    ```bash
    cd front-end
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the frontend server:**

    ```bash
    npm run dev
    ```

4. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

## Application Structure

### Pages

- **`src/app/layout.tsx`**: Defines the main layout of the application, managing navigation and global state.
- **`src/app/page.tsx`**: Home page of the application displaying a welcome message.
- **`src/app/register/page.tsx`**: Page for user registration.
- **`src/app/login/page.tsx`**: Page for user login.
- **`src/app/main/page.tsx`**: Main page that users access after authentication, wrapped with an authentication Higher-Order Component (HOC).
- **`src/app/call/page.tsx`**: Page for initiating and managing calls using LiveKit.

### Components

- **`src/components/Call.tsx`**: Manages the LiveKit room, including audio rendering and participant management.
- **`src/components/Main.tsx`**: Displays a list of users and provides navigation to call pages.
- **`src/components/Navbar.tsx`**: A navigation bar with links to different pages of the application.
- **`src/components/Register.tsx`**: A component for user registration.
- **`src/components/SignIn.tsx`**: A component for user login.

### Authentication

- **`src/app/auth.ts`**: Utility functions for checking if a user is authenticated.
- **`src/app/withAuth.tsx`**: HOC that protects routes by redirecting unauthenticated users to the login page.
- **`src/hoc/withAuth.tsx`**: Another file (possibly misplaced) with similar HOC functionality.
- **`src/utils/auth.ts`**: Utility functions related to authentication, such as checking local storage for authentication tokens.

### API Routes

- **`src/app/api/token/route.ts`**: Handles the generation and retrieval of access tokens for LiveKit.

### Styles

- **`src/app/globals.css`**: Global CSS styles using Tailwind CSS.
- **`src/styles/globals.css`**: Another global CSS file, also using Tailwind CSS.

### Static Assets

- **`src/app/favicon.ico`**: Favicon for the application.

## Key Functionalities

- **Authentication**: The application uses local storage to manage authentication state and protect routes with HOCs.
- **LiveKit Integration**: Implements real-time video/audio calling using the LiveKit SDK.
- **Routing**: Utilizes Next.js routing for navigation between different pages (register, login, main, call).
