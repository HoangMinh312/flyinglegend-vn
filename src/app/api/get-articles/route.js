import { db } from "@/firebase/admin";

export async function GET() {
  try {
    const articlesRef = db.collection("articles").orderBy("publishedDate", "desc");
    const snapshot = await articlesRef.get();

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
