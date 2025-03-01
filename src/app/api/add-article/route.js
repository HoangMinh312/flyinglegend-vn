import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(request) {
  try {
    const articleData = await request.json();

    if (!articleData.title || !articleData.body || !articleData.excerpt || !articleData.heroImageUrl) {
      return new Response(
        JSON.stringify({ error: "Missing content, please check again before saving!" }),
        { status: 400 }
      );
    }

    const articlesRef = collection(db, "articles");
    const docRef = await addDoc(articlesRef, articleData);

    return new Response(
      JSON.stringify({ message: "Article added successfully", id: docRef.id }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding article:", error);
    return new Response(
      JSON.stringify({ error: "Failed to add article" }),
      { status: 500 }
    );
  }
}
