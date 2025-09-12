# Google Authentication with Next.js

This project demonstrates Google OAuth authentication using NextAuth.js v4 and Next.js 15.

## Features

- Google OAuth 2.0 authentication
- Session management
- Protected routes
- Modern UI with Tailwind CSS

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Google OAuth 2.0 Credentials
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here
```

### 3. Get Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set application type to "Web application"
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - `https://yourdomain.com/api/auth/callback/google` (for production)
7. Copy the Client ID and Client Secret to your `.env.local` file

### 4. Generate NextAuth Secret

Generate a random secret for NextAuth:

```bash
openssl rand -base64 32
```

Or use any random string of at least 32 characters.

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## How It Works

1. **Authentication Flow**: Users click "Login with Google" button
2. **OAuth Redirect**: NextAuth redirects to Google's OAuth consent screen
3. **Callback**: After successful authentication, Google redirects back to your app
4. **Session Creation**: NextAuth creates a session and stores user information
5. **Protected Content**: Authenticated users see personalized content and can sign out

## Project Structure

- `src/auth/Auth.ts` - NextAuth configuration
- `src/app/api/auth/[...nextauth]/route.ts` - NextAuth API routes
- `src/app/layout.tsx` - Root layout with SessionProvider
- `src/app/page.tsx` - Main page with authentication UI

## Technologies Used

- Next.js 15
- NextAuth.js v4
- TypeScript
- Tailwind CSS
- React Icons
