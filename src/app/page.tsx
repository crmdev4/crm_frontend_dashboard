"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="));

    if (token) {
      // If logged in, redirect to dashboard
      router.push("/dashboard");
    } else {
      // If not logged in, redirect to login
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400">Redirecting...</p>
      </div>
    </div>
  );
}
