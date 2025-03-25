import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "@/firebase"; // Import from your Firebase client config

export async function POST(req) {
  try {
    // Get maxResults from request body
    const { maxResults } = await req.json();

    // Parse maxResults as an integer if provided
    const parsedMaxResults = maxResults ? parseInt(maxResults, 10) : null;

    // Firestore query
    let articlesQuery = query(collection(db, "articles"), orderBy("publishedDate", "desc"));

    // Apply limit only if maxResults is provided
    if (parsedMaxResults && parsedMaxResults > 0) {
      articlesQuery = query(articlesQuery, limit(Math.min(parsedMaxResults, 100))); // Cap at 100 if provided
    }

    const snapshot = await getDocs(articlesQuery);

    const articles = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return Response.json(articles, { status: 200 });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return Response.json({ error: "Failed to fetch articles" }, { status: 500 });
  }
}
