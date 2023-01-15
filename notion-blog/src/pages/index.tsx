//Custom components
import Header from "../components/header";
import Recommandation from "../components/recommandation";
import BesoinAvocat from "../components/Besoin-avocat";

import Link from "next/link";
import Head from "next/head";

//Notion libs
import { getBlogLink, getDateStr, postIsPublished } from '../lib/blog-helpers';
import { textBlock } from '../lib/notion/renderers';
import getNotionUsers from '../lib/notion/getNotionUsers';
import getBlogIndex from '../lib/notion/getBlogIndex';

export async function getStaticProps({ preview }) {
    const postsTable = await getBlogIndex()

    const authorsToGet: Set<string> = new Set()
    const posts: any[] = Object.keys(postsTable)
        .map((slug) => {
            const post = postsTable[slug]
            // remove draft posts in production
            if (!preview && !postIsPublished(post)) {
                return null
            }
            post.Authors = post.Authors || []
            for (const author of post.Authors) {
                authorsToGet.add(author)
            }
            return post
        })
        .filter(Boolean)

    const { users } = await getNotionUsers([...authorsToGet])

    posts.map((post) => {
        post.Authors = post.Authors.map((id) => users[id].full_name)
    })

    return {
        props: {
            preview: preview || false,
            posts,
        },
        revalidate: 10,
    }
}

const Index = ({ posts = [], preview }) => {
    const lastPosts = posts.slice(-3);
    return (
        <>
            <Header></Header>
            <Head>
                <title>Accueil</title>
            </Head>
            <div className={"relative"}>
                <div className={"absolute mt-16 ml-16"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold"}>MAÎTRE FLORENCE BABEAU</h1>
                    <p className={"text-white text-xl md:text-2xl"}>Avocat en droit du travail et de la sécurité sociale</p>
                </div>
                <video className={"mx-auto brightness-50 w-full h-full"} autoPlay loop muted playsInline src={"/pexels-pavel-danilyuk-8061612.mp4"}/>
            </div>
            <div className={"absolute flex justify-center w-full"}>
                <div className={"w-4/6 bg-white flex flex-col gap-8 md:flex-row justify-between shadow-lg p-8 rounded-lg transform -translate-y-16"}>
                    <div className={"flex flex-col"}>
                        <p className={"text-black text-center font-bold text-2xl"}>
                            28
                        </p>
                        <p className={"text-black text-center text-xl"}>
                            Années d'exercice
                        </p>
                    </div>
                    <div className={"flex flex-col"}>
                        <p className={"text-black text-center font-bold text-2xl"}>
                            98%
                        </p>
                        <p className={"text-black text-center text-xl"}>
                            de clients satisfaits
                        </p>
                    </div>
                    <div className={"flex flex-col"}>
                        <p className={"text-black text-center font-bold text-2xl"}>
                            2
                        </p>
                        <p className={"text-black text-center text-xl"}>
                            Grands domaines de compétences
                        </p>
                    </div>
                    <div className={"flex flex-col"}>
                        <p className={"text-black text-center font-bold text-2xl"}>
                            3000+
                        </p>
                        <p className={"text-black text-center text-xl"}>
                            Dossiers traités
                        </p>
                    </div>
                </div>
            </div>
            <div className={"bg-white flex justify-center w-full pt-96 md:pt-36 pb-20"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-black text-3xl uppercase mb-6"}>Qui suis-je ?</h2>
                    <div className={"flex flex-col gap-y-8 lg:flex-row"}>
                        <div className={"w-full lg:w-1/3 mx-2"}>
                            <p className={"underline text-xl text-black"}>Florence Babeau</p>
                            <p className={"mt-2"}>Très investie dans les dossiers que je gère en Droit du Travail et en Droit de la Famille, j’aime travailler dans une relation de confiance et de proximité qui me paraît indispensable à l’établissement d’une collaboration pérenne et fructueuse.</p>
                        </div>
                        <div className={"w-full lg:w-1/3 mx-2"}>
                            <p className={"underline text-xl text-black"}>Mon parcours</p>
                            <p className={"mt-2"}>Titulaire d’un DEA de Droit Social et Droit du Travail, c’est tout naturellement que je me suis spécialisée dans l’accompagnement, la formation et la défense des intérêts des employeurs et dirigeants d’entreprise qui ont besoin de se consacrer pleinement et sereinement au développement de leur entreprise. C’est cette même tranquillité d’esprit que je souhaite apporter aux personnes qui se séparent, divorcent, réorganisent leur vie familiale en les aidant à trouver les meilleures solutions techniques et humaines à leurs problématiques.</p>
                        </div>
                        <div className={"w-full lg:w-1/3 mx-2"}>
                            <iframe className={"h-96 w-full lg:h-full"} src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                        </div>
                    </div>
                    <div className={"flex justify-center mt-6"}>
                        <Link href={""} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white"}>MES EXPERTISES</Link>
                    </div>
                </div>
            </div>
            <div className={"bg-gray-800 flex justify-center w-full py-20"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-white text-3xl uppercase mb-6"}>Mes dernières actualités</h2>
                    <div className={"flex flex-col lg:flex-row justify-center gap-16"}>
                        {lastPosts.map((post) => {
                            return(
                                <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                                    <div className={"max-w-sm mx-auto rounded-md overflow-hidden bg-white shadow-lg"}>
                                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                                        <div className="px-6 py-4">
                                            <h2 className="font-bold text-black text-xl mb-2">{post.Page}</h2>
                                            <p className="text-gray-700 text-base">
                                                {(!post.preview || post.preview.length === 0) &&
                                                    'Pas de résumé disponible'}
                                                {(post.preview || []).map((block, idx) =>
                                                    textBlock(block, true, `${post.Slug}${idx}`)
                                                )}
                                            </p>
                                            <p className="text-gray-700 text-base">
                                                {post.Date && (
                                                    <p className="posted">Publié le : {getDateStr(post.Date)}</p>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    <div className={"flex justify-center mt-6"}>
                        <Link href={""} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold"}>Consulter l'ensemble de mes actualités</Link>
                    </div>
                </div>
            </div>
            <Recommandation></Recommandation>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}

export default Index
