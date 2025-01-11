

import { urlFor } from "@/sanity/lib/image";

import Image from "next/image";
import { PortableText } from "@portabletext/react"; // Import the PortableText component
import { client } from "@/app/fonts/sanity";

async function getData(slug: string) {
    const query = `*[_type == "blog" && slug.current == $slug]{
        "currentslug": slug.current,
        title,
        content,
        titleImage
    }[0]`;

    const data = await client.fetch(query, { slug });
    return data;
}

export default async function BlogArtical({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getData(slug);

    return (
        <div className="mt-10">
            <h1>
                <span className="block text-base text-center font-semibold tracking-wide uppercase font-serif sm:text-4xl text-primary">
                    AH blogs
                </span>
                <span className="mt-4 block text-3xl text-center leading-8 font-bold font-serif text-black dark:text-white">
                    {data.title}
                </span>
            </h1>
            <Image src={urlFor(data.titleImage).url()} 
         width={1200} 
        height={1200}
        alt="Title image"
        priority
        className="rounded-lg mt-8 border"/>
          
            <div className="mt-16 prose prose-blue prose-xl dark:prose-invert prose-headings:underline prose-li:marker:text-[#4B5945]
            prose-a:text-[#5f7158]  prose-headings:text-gray-900 ">
                {/* Render the Portable Text content */}
                <PortableText   value={data.content}    />
            </div>
        </div>
    );
}








// import { fullBlog } from "@/app/lib/interface";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { PortableText } from "next-sanity";
// import Image from "next/image"

// async function getData(slug: string){
//     const query = `*[_type == "blog" && slug.current == $slug]{
//   "currentSlug": slug.current,
//     title,
//     content,
//     titleImage
// }[0]`;
// const data = await client.fetch(query, { slug });
// return data;
// }
// export default async function BlogArticle ({ params }: { params: { slug: string } }){
//     const data: fullBlog = await getData(params.slug);
//     console.log(data);
    

//     return(
//      <div className="mt-6">
//         <h1>
//             <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">AH Car - Blog</span>
//             <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
//            {data.title}
//                 </span>
//         </h1>
//         <Image src={urlFor(data.titleImage).url()} 
//         width={1200} 
//         height={1200}
//         alt="Title image"
//         priority
//         className="rounded-lg mt-8 border"/>
//         <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:markertext-primary prose-a:text-primary">
//             <PortableText value={data.content}/>
//         </div>  
//      </div>
//     )
// }