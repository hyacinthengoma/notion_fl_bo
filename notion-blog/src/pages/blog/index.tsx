import Link from 'next/link'
import Header from '../../components/header'

import blogStyles from '../../styles/blog.module.css'
import sharedStyles from '../../styles/shared.module.css'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from '../../lib/blog-helpers'
import { textBlock } from '../../lib/notion/renderers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import Image from "next/image";

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
  return (
    <>
        <Header/>
        <div>
            <div>
                <h1 className={"absolute font-bold text-white text-5xl top-1/3 left-1/2 -translate-x-1/2 transform"}>ACTUALITES</h1>
                <Image src={"/images/blog/img-blog.png"} alt={"img-blog"} width={"1920"} height={"1080"}></Image>
            </div>
            <div className={`${sharedStyles.layout} ${blogStyles.blogIndex} py-16`}>
                <h2 className={"text-center text-black font-bold text-2xl my-5"}>DERNIERES ACTUALITES</h2>
                <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 content-center"}>
                    {posts.map((post) => {
                        return(
                                <div className="card card-compact w-80 bg-gray-100 shadow-xl rounded-none mx-auto" key={post.Slug}>
                                    <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-black">{post.Page}</h2>
                                        <p>
                                            {(!post.preview || post.preview.length === 0) &&
                                                'Pas de résumé disponible'}
                                            {(post.preview || []).map((block, idx) =>
                                                textBlock(block, true, `${post.Slug}${idx}`)
                                            )}
                                        </p>
                                        <p>
                                            {post.Date && (
                                                <p className="posted">Publié le : {getDateStr(post.Date)}</p>
                                            )}
                                        </p>
                                    </div>
                                    </Link>
                                </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Index
