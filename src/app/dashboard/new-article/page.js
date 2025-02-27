"use client";
import React from "react";
import { useState } from "react";
import ArticleForm from "./form";
import ArticlePreview from "./preview";

export default function Page() {
  const [preview, setPreview] = useState({});

  return (
    <div className="flex gap-8 p-8">
      <div className="w-1/2">
        <h2 className="text-xl font-bold mb-4">Create Article</h2>
        <ArticleForm onPreview={setPreview} />
      </div>
      <div className="w-1/2">
        <h2 className="text-xl font-bold mb-4">Live Preview</h2>
        <ArticlePreview article={preview} />
      </div>
    </div>
  );
}
