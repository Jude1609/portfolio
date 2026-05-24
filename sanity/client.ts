import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

function getClient() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (!projectId) return null;

  return createClient({
    projectId,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
    useCdn: true,
    token: process.env.SANITY_API_READ_TOKEN,
  });
}

export const client = getClient();

let builder: ReturnType<typeof imageUrlBuilder> | null = null;
if (client) {
  builder = imageUrlBuilder(client);
}

export function urlFor(source: SanityImageSource) {
  if (!builder) return null;
  return builder.image(source);
}
