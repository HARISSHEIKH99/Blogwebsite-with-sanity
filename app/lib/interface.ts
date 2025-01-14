import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface simpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: SanityImageSource;
}

export interface fullBlog {
 currentSlug: string;
 title: string;
 content: string;
 titleImage: SanityImageSource;
}


