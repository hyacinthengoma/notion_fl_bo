import React from "react";
import Link from "next/link";
import {getBlogLink, getDateStr} from "../lib/blog-helpers";

interface ArticleCard {
    Id: string,
    Slug: string,
    Illustration: string,
    Page: string,
    Preview: string,
    Type: string,
    Date,
}

const ArticleCard: React.FC<ArticleCard> = ({Id, Slug, Illustration, Page, Preview, Type, Date}) => {
    return(
        <Link href={"/blog/[slug]"} as={getBlogLink(Slug)} className={"flex flex-col shadow hover:shadow-lg bg-white border group rounded-lg overflow-hidden hover:scale-110 duration-500 article"} key={Slug} type={Type}>
            <div className="group h-48 block bg-gray-100 overflow-hidden relative m-2 rounded-lg">
                {Illustration
                    ?
                        <img src={`/api/asset?assetUrl=${encodeURIComponent(Illustration)}&blockId=${Id}`} loading="lazy" alt="Photo by Lorenzo Herrera" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"/>
                    :
                        <img src={"/images/defaultBlog.png"} loading="lazy" alt="Photo by Lorenzo Herrera" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"/>
                }
            </div>
            <div className="flex flex-col flex-1 p-4 sm:p-6">
                <h2 className="text-gray-800 text-lg font-medium mb-2">
                    <div className="group-hover:text-red-800 active:text-red-700 transition duration-100">{Page}</div>
                </h2>
                {(!Preview || Preview.length === 0) &&
                    <p className={"text-gray-500 mb-8"}>Pas de résumé disponible</p>}
                {(Preview) && (
                    <p className={"text-gray-500 mb-8"}>{(Preview)}</p>
                )}
                <div className="flex justify-between items-end mt-auto">
                    <div className="flex items-center gap-2">
                        <div>
                            <span className="block text-red-800">{(Type)}</span>
                            <span className="block text-gray-400 text-sm">{getDateStr(Date)}</span>
                        </div>
                    </div>
                    {/**<span className="text-black text-sm border border-red-900 rounded px-2 py-1">Lire l'article</span>*/}
                </div>
            </div>
        </Link>
    );
}

export default ArticleCard
