import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase/index";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);

    // Clear the token cookie
    document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";

    router.push("/"); // Redirect to home after logout
  };

  return <button onClick={handleLogout}>Logout</button>;
}
