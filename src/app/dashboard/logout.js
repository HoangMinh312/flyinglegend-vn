import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "../../firebase/index";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const auth = getAuth(app);
    await signOut(auth);

    // Clear the token cookie
    document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";

    router.push("/"); // Redirect to home after logout
  };

  return <button onClick={handleLogout}>Logout</button>;
}
