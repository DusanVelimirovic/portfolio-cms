/*
  Connect Sanity Client with React

*/
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Fetch real data from Sanity Dashboard
export const client = sanityClient({
  projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-06-23",
  useCdn: true,
  token: process.env.REACT_APP__SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
