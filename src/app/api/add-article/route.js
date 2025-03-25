import { db } from "@/firebase/admin";
import { auth } from "firebase-admin";

export async function POST(req) {
  try {
    const token = req.headers.get("authorization")?.split("Bearer ")[1];
    if (!token)
      return Response.json({ error: "Unauthorized" }, { status: 401 });

    // Verify Firebase Auth Token
    const decodedToken = await auth().verifyIdToken(token);
    const userId = decodedToken.uid;

    // Get article data from request
    const { title, excerpt, type, heroImageUrl, body, gallery, externalUrl, publishedDate } =
      await req.json();

    // Validate type
    if (!["internal", "external"].includes(type)) {
      return new Response(JSON.stringify({ error: "Invalid article type" }), {
        status: 400,
      });
    }

    const articleRef = db.collection("articles").doc();

    // Create Firestore document
    const articleData = {
      id: articleRef.id,
      userId,
      title,
      excerpt,
      type,
      heroImageUrl: heroImageUrl && heroImageUrl.trim() !== "" ? heroImageUrl : null,
      publishedDate: publishedDate ? new Date(publishedDate) : new Date(), // If external (published Date present) use that, else use new Date()
      lastEditedDate: new Date(),
    };

    // If it's an internal article, include `body` and `gallery`
    if (type === "internal") {
      articleData.body = body || "";
      articleData.gallery = gallery || [];
    }

    // If it's an external article, include `externalUrl`
    if (type === "external") {
      articleData.externalUrl = externalUrl || "";
    }

    await articleRef.set(articleData);

    return new Response(JSON.stringify({ id: articleRef.id }), { status: 200 });
  } catch (error) {
    console.error("Error adding article:", error);
    return new Response(JSON.stringify({ error: "Failed to add article" }), { status: 500 });
  }
}