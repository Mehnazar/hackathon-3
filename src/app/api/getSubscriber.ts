import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";

// Initialize Sanity Client
const sanity = createClient({
  projectId: "your_project_id",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Use an environment variable for security
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Fetch subscribers from Sanity
    const query = `*[_type == "signUp"]{ _id, email, password, createdAt }`;
    const subscribers = await sanity.fetch(query);

    return res.status(200).json(subscribers);
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
