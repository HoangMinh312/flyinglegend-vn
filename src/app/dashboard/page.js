"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase/index";
import LogoutButton from "./logout";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // User is authenticated
      } else {
        // Token may have expired or user logged out
        document.cookie =
          "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC"; // Clear the cookie
        router.push("/login"); // Redirect to login
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [router]);

  if (!user) {
    return <p>Loading...</p>; // Show a loading state while checking auth
  }

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <p>Dashboard content goes here.</p>
      <LogoutButton />
    </div>
  );
}
