"use client";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import { useState } from "react";

function HomeContent() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Google login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFacebookLogin = () => {
    console.log("Facebook Login");
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (session) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center min-h-[80vh]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome, {session.user?.name}!</h1>
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4"
            />
          )}
          <p className="text-gray-600 mb-4">{session.user?.email}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white p-2 rounded-md cursor-pointer min-w-[300px] hover:bg-red-600 transition-colors"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div>
      <form className="flex flex-col gap-2 justify-center items-center min-h-[80vh]">
        <input 
          type="text" 
          placeholder="Enter your email" 
          className="border-1 border-gray-500 p-2 rounded-md min-w-[300px]" 
        />
        <input 
          type="password" 
          placeholder="Enter your password" 
          className="border-1 border-gray-500 p-2 rounded-md min-w-[300px]" 
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer min-w-[300px] hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
        <button 
          type="button" 
          onClick={handleGoogleLogin} 
          disabled={isLoading}
          className="text-white p-2 rounded-md cursor-pointer min-w-[300px] flex items-center justify-center gap-2 border-1 border-gray-500 hover:bg-gray-100 transition-colors disabled:opacity-50"
        >
          <FcGoogle />
          {isLoading ? "Signing in..." : "Login with Google"}
        </button>
        <button 
          type="button" 
          onClick={handleFacebookLogin} 
          className="text-white p-2 rounded-md cursor-pointer min-w-[300px] flex items-center justify-center gap-2 border-1 border-gray-500 hover:bg-gray-100 transition-colors"
        >
          <FaFacebook />
          Login with Facebook
        </button>
      </form>
    </div>
  );
}

export default function Home() {
  return (
    <SessionProvider>
      <HomeContent />
    </SessionProvider>
  );
}
