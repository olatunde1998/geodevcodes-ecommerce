import { createClient } from "next-sanity";
import  imageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    projectId: "eha8dv4z",
    dataset: "production",
    apiVersion: "2024-03-08",
    useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source);
}