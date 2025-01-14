import { createClient } from "next-sanity";
import imageUrlBuider from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: 'xxd8j9g3',
    useCdn: false,
});

const builder = imageUrlBuider(client)

export function urlFor(soure: SanityImageSource) {
    return builder.image(soure);

}
