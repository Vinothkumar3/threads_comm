# Deploying Your Next.js Application

This is a server-rendered Next.js application and requires a hosting provider that supports Next.js features like Server Components, API Routes, and Middleware.

## Recommended Deployment: Firebase App Hosting

The `classic_firebase_hosting_deploy` tool is not suitable for this project as it's designed for static sites. The recommended deployment method on Firebase for this application is **Firebase App Hosting**.

### Steps to Deploy with Firebase App Hosting:

1.  **Push to a Git Repository:** Make sure your project code is pushed to a GitHub repository.

2.  **Create a Firebase Project:** If you haven't already, create a new project on the [Firebase Console](https://console.firebase.google.com/).

3.  **Set Up App Hosting:**
    *   In your Firebase project, go to the **Build** section and select **App Hosting**.
    *   Click "Get started".
    *   Connect your GitHub account and select the repository for this project.

4.  **Configure Deployment:**
    *   Follow the on-screen instructions to configure your deployment settings. App Hosting will typically detect that you are using Next.js and configure the build and start commands automatically.
    *   You will also need to set up any required environment variables (e.g., database connection strings, Clerk API keys) in the App Hosting settings.

5.  **Deploy:**
    *   Once configured, App Hosting will automatically build and deploy your application. Future deployments will be triggered automatically when you push new commits to your connected branch.

For more detailed information, please refer to the [official Firebase App Hosting documentation](https://firebase.google.com/docs/app-hosting).
