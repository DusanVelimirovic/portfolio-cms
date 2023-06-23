/*
  Connect Sanity Client with React

*/
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Fetch real data from Sanity Dashboard
export const client = sanityClient({
  projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
  //projectId: "rtcojh8h",
  dataset: "production",
  apiVersion: "2023-06-23",
  useCdn: true,
  token: process.env.REACT_APP__SANITY_TOKEN,
  /*token:
    "skLEfQP0EQtDSyDVfjsNdEBOtAocqerF1sFp1aNnta3zzRTu5nQ0c48CUm5DoKUil15Jv1N46mqpRUvZyC40Y3gfVf5s2NuQpdTdzaLF0QXFk0GP9IxDrmAMnJmtKSJANl0aYyfsXssjU0Sr5rdkAlx3ZbyC9ms0rW9YjWxOBDIaH0ntwtMU",
*/
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
