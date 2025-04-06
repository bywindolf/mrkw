import React from "react";
import { getBlogEntry } from "@/common/database";
import { BlogEntryView } from "@/common/components/BlogEntryView";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await getBlogEntry(id);
  if (!data) {
    return <div>Blog entry not found</div>;
  }
  return <BlogEntryView blogEntry={data} />;
}
