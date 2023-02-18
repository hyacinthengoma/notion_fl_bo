import Link from 'next/link'
import fetch from 'node-fetch'
import { useRouter } from 'next/router'
import Header from '../../components/header'
import Heading from '../../components/heading'
import components from '../../components/dynamic'
import ReactJSXParser from '@zeit/react-jsx-parser'
import blogStyles from '../../styles/blog.module.css'
import { textBlock } from '../../lib/notion/renderers'
import getPageData from '../../lib/notion/getPageData'
import React, { CSSProperties, useEffect } from 'react'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import {getBlogLink, getDateStr, postIsPublished} from '../../lib/blog-helpers'
import BesoinAvocat from "../../components/Besoin-avocat";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share";
import Head from "next/head";

// Get the data for each blog post
export async function getStaticProps({ params: { slug }, preview }) {
  // load the postsTable so that we can get the page's ID
  const postsTable = await getBlogIndex()
  const post = postsTable[slug]

  // if we can't find the post or if it is unpublished and
  // viewed without preview mode then we just redirect to /blog
  if (!post || (post.Published !== 'Yes' && !preview)) {
    console.log(`Failed to find post for slug: ${slug}`)
    return {
      props: {
        redirect: '/blog',
        preview: false,
      },
      unstable_revalidate: 5,
    }
  }
  const postData = await getPageData(post.id)
  post.content = postData.blocks

  for (let i = 0; i < postData.blocks.length; i++) {
    const { value } = postData.blocks[i]
    const { type, properties } = value
    if (type == 'tweet') {
      const src = properties.source[0][0]
      // parse id from https://twitter.com/_ijjk/status/TWEET_ID format
      const tweetId = src.split('/')[5].split('?')[0]
      if (!tweetId) continue

      try {
        const res = await fetch(
          `https://api.twitter.com/1/statuses/oembed.json?id=${tweetId}`
        )
        const json = await res.json()
        // @ts-ignore
        properties.html = json.html.split('<script')[0]
        post.hasTweet = true
      } catch (_) {
        console.log(`Failed to get tweet embed for ${src}`)
      }
    }
  }

  const posts: any[] = Object.keys(postsTable)
      .map((slug) => {
        const post = postsTable[slug]
        // remove draft posts in production
        if (!preview && !postIsPublished(post)) {
          return null
        }
        return post
      })
      .filter(Boolean)

  const { users } = await getNotionUsers(post.Authors || [])
  post.Authors = Object.keys(users).map((id) => users[id].full_name)

  return {
    props: {
      post,
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  }
}

// Return our list of blog posts to prerender
export async function getStaticPaths() {
  const postsTable = await getBlogIndex()
  // we fall back for any unpublished posts to save build time
  // for actually published ones
  return {
    paths: Object.keys(postsTable)
      .filter((post) => postsTable[post].Published === 'Yes')
      .map((slug) => getBlogLink(slug)),
    fallback: true,
  }
}

const listTypes = new Set(['bulleted_list', 'numbered_list'])

const RenderPost = ({ post, redirect, preview, posts }) => {

  let lastPosts = [];

  posts.map((currentPost) => {
    if(currentPost.Type === post.Type){
      lastPosts.push(currentPost);
    }
  })

  lastPosts.slice(-3);

  const router = useRouter()

  let listTagName: string | null = null
  let listLastId: string | null = null
  let listMap: {
    [id: string]: {
      key: string
      isNested?: boolean
      nested: string[]
      children: React.ReactFragment
    }
  } = {}

  useEffect(() => {
    const twitterSrc = 'https://platform.twitter.com/widgets.js'
    // make sure to initialize any new widgets loading on
    // client navigation
    if (post && post.hasTweet) {
      if ((window as any)?.twttr?.widgets) {
        ;(window as any).twttr.widgets.load()
      } else if (!document.querySelector(`script[src="${twitterSrc}"]`)) {
        const script = document.createElement('script')
        script.async = true
        script.src = twitterSrc
        document.querySelector('body').appendChild(script)
      }
    }
  }, [])
  useEffect(() => {
    if (redirect && !post) {
      router.replace(redirect)
    }
  }, [redirect, post])

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // if you don't have a post at this point, and are not
  // loading one from fallback then  redirect back to the index
  if (!post) {
    return (
      <div className={blogStyles.post}>
        <p>
          Woops! didn't find that post, redirecting you back to the blog index
        </p>
      </div>
    )
  }
  const {asPath} = useRouter();
  return (
    <>
      <Head>
        <title>{post.Page}</title>
      </Head>
      <div className={"relative w-full"}>
        <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
          <h1 className={"text-white text-2xl md:text-4xl font-bold"}>{post.Page || ''}</h1>
        </div>
        {post.Illustration ?
            <img className={"brightness-50 h-96 w-full object-cover"} src={`/api/asset?assetUrl=${encodeURIComponent(post.Illustration)}&blockId=${post.id}`} />
            : <img className={"brightness-50 h-96 w-full object-cover"} src={"https://placeimg.com/400/225/arch"} />
        }
      </div>
      <div className={"w-full flex bg-white justify-center py-20 " + blogStyles.post}>
        <div className={"w-4/5 justify-center"}>
          {(post.content || []).map((block, blockIdx) => {
            const { value } = block
            const { type, properties, id, parent_id } = value
            const isLast = blockIdx === post.content.length - 1
            const isList = listTypes.has(type)
            let toRender = []

            if (isList) {
              listTagName = components[type === 'bulleted_list' ? 'ul' : 'ol']
              listLastId = `list${id}`

              listMap[id] = {
                key: id,
                nested: [],
                children: textBlock(properties.title, true, id),
              }

              if (listMap[parent_id]) {
                listMap[id].isNested = true
                listMap[parent_id].nested.push(id)
              }
            }

            if (listTagName && (isLast || !isList)) {
              toRender.push(
                  React.createElement(
                      listTagName,
                      { key: listLastId! },
                      Object.keys(listMap).map((itemId) => {
                        if (listMap[itemId].isNested) return null

                        const createEl = (item) =>
                            React.createElement(
                                components.li || 'ul',
                                { key: item.key },
                                item.children,
                                item.nested.length > 0
                                    ? React.createElement(
                                        components.ul || 'ul',
                                        { key: item + 'sub-list' },
                                        item.nested.map((nestedId) =>
                                            createEl(listMap[nestedId])
                                        )
                                    )
                                    : null
                            )
                        return createEl(listMap[itemId])
                      })
                  )
              )
              listMap = {}
              listLastId = null
              listTagName = null
            }

            const renderHeading = (Type: string | React.ComponentType) => {
              toRender.push(
                  <Heading key={id}>
                    <Type key={id}>{textBlock(properties.title, true, id)}</Type>
                  </Heading>
              )
            }

            const renderBookmark = ({ link, title, description, format }) => {
              const { bookmark_icon: icon, bookmark_cover: cover } = format
              toRender.push(
                  <div className={blogStyles.bookmark}>
                    <div>
                      <div style={{ display: 'flex' }}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className={blogStyles.bookmarkContentsWrapper}
                            href={link}
                        >
                          <div
                              role="button"
                              className={blogStyles.bookmarkContents}
                          >
                            <div className={blogStyles.bookmarkInfo}>
                              <div className={blogStyles.bookmarkTitle}>
                                {title}
                              </div>
                              <div className={blogStyles.bookmarkDescription}>
                                {description}
                              </div>
                              <div className={blogStyles.bookmarkLinkWrapper}>
                                <img
                                    src={icon}
                                    className={blogStyles.bookmarkLinkIcon}
                                />
                                <div className={blogStyles.bookmarkLink}>
                                  {link}
                                </div>
                              </div>
                            </div>
                            <div className={blogStyles.bookmarkCoverWrapper1}>
                              <div className={blogStyles.bookmarkCoverWrapper2}>
                                <div className={blogStyles.bookmarkCoverWrapper3}>
                                  <img
                                      src={cover}
                                      className={blogStyles.bookmarkCover}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
              )
            }

            switch (type) {
              case 'page':
              case 'divider':
                break
              case 'text':
                if (properties) {
                  toRender.push(textBlock(properties.title, false, id))
                }
                break
              case 'image':
              case 'video':
              case 'embed': {
                const { format = {} } = value
                const {
                  block_width,
                  block_height,
                  display_source,
                  block_aspect_ratio,
                } = format
                const baseBlockWidth = 768
                const roundFactor = Math.pow(10, 2)
                // calculate percentages
                const width = block_width
                    ? `${
                        Math.round(
                            (block_width / baseBlockWidth) * 100 * roundFactor
                        ) / roundFactor
                    }%`
                    : block_height || '100%'

                const isImage = type === 'image'
                const Comp = isImage ? 'img' : 'video'
                const useWrapper = block_aspect_ratio && !block_height
                const childStyle: CSSProperties = useWrapper
                    ? {
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      position: 'absolute',
                      top: 0,
                    }
                    : {
                      width,
                      border: 'none',
                      height: block_height,
                      display: 'block',
                      maxWidth: '100%',
                    }

                let child = null

                if (!isImage && !value.file_ids) {
                  // external resource use iframe
                  child = (
                      <iframe
                          style={childStyle}
                          src={display_source}
                          key={!useWrapper ? id : undefined}
                          className={!useWrapper ? 'asset-wrapper' : undefined}
                      />
                  )
                } else {
                  // notion resource
                  child = (
                      <Comp
                          key={!useWrapper ? id : undefined}
                          src={`/api/asset?assetUrl=${encodeURIComponent(
                              display_source as any
                          )}&blockId=${id}`}
                          controls={!isImage}
                          alt={`An ${isImage ? 'image' : 'video'} from Notion`}
                          loop={!isImage}
                          muted={!isImage}
                          autoPlay={!isImage}
                          style={childStyle}
                      />
                  )
                }

                toRender.push(
                    useWrapper ? (
                        <div
                            style={{
                              paddingTop: `${Math.round(block_aspect_ratio * 100)}%`,
                              position: 'relative',
                            }}
                            className="asset-wrapper"
                            key={id}
                        >
                          {child}
                        </div>
                    ) : (
                        child
                    )
                )
                break
              }
              case 'header':
                renderHeading('h1')
                break
              case 'sub_header':
                renderHeading('h2')
                break
              case 'sub_sub_header':
                renderHeading('h3')
                break
              case 'bookmark':
                const { link, title, description } = properties
                const { format = {} } = value
                renderBookmark({ link, title, description, format })
                break
              case 'code': {
                if (properties.title) {
                  const content = properties.title[0][0]
                  const language = properties.language[0][0]

                  if (language === 'LiveScript') {
                    // this requires the DOM for now
                    toRender.push(
                        <ReactJSXParser
                            key={id}
                            jsx={content}
                            components={components}
                            componentsOnly={false}
                            renderInpost={false}
                            allowUnknownElements={true}
                            blacklistedTags={['script', 'style']}
                        />
                    )
                  } else {
                    toRender.push(
                        <components.Code key={id} language={language || ''}>
                          {content}
                        </components.Code>
                    )
                  }
                }
                break
              }
              case 'quote': {
                if (properties.title) {
                  toRender.push(
                      React.createElement(
                          components.blockquote,
                          { key: id },
                          properties.title
                      )
                  )
                }
                break
              }
              case 'callout': {
                toRender.push(
                    <div className="callout" key={id}>
                      {value.format?.page_icon && (
                          <div>{value.format?.page_icon}</div>
                      )}
                      <div className="text">
                        {textBlock(properties.title, true, id)}
                      </div>
                    </div>
                )
                break
              }
              case 'tweet': {
                if (properties.html) {
                  toRender.push(
                      <div
                          dangerouslySetInnerHTML={{ __html: properties.html }}
                          key={id}
                      />
                  )
                }
                break
              }
              case 'equation': {
                if (properties && properties.title) {
                  const content = properties.title[0][0]
                  toRender.push(
                      <components.Equation key={id} displayMode={true}>
                        {content}
                      </components.Equation>
                  )
                }
                break
              }
              default:
                if (
                    process.env.NODE_ENV !== 'production' &&
                    !listTypes.has(type)
                ) {
                  console.log('unknown type', type)
                }
                break
            }
            return toRender
          })}
          <hr className={"mt-10 border-black"}/>
          <div className={"flex flex-row gap-4"}>
            <p>Partager cet article sur : </p>
            <LinkedinShareButton url={asPath}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <TwitterShareButton url={asPath}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <FacebookShareButton url={asPath}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
        </div>
      </div>
      <div className={"bg-gray-800 flex justify-center w-full py-20 pl-4 pr-5"}>
        <div className={"w-5/6"}>
          <h2 className={"font-bold text-white text-[2rem] uppercase mb-6"}>Ces articles pourrait vous intéresser</h2>
          <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"}>
            {lastPosts.map((post) => {
              return(
                  <Link href={"/blog/[slug]"} as={getBlogLink(post.Slug)} className={"flex flex-col bg-white border rounded-lg overflow-hidden hover:scale-110 duration-500 article"}>
                    <div
                        className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative m-2 rounded-lg">
                      {post.Illustration ?
                          <img
                              src={`/api/asset?assetUrl=${encodeURIComponent(post.Illustration)}&blockId=${post.id}`}
                              loading="lazy" alt="Photo by Lorenzo Herrera"
                              className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"/>
                          :
                          <img
                              src={"/images/defaultBlog.png"}
                              loading="lazy" alt="Photo by Lorenzo Herrera"
                              className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"/>
                      }

                    </div>

                    <div className="flex flex-col flex-1 p-4 sm:p-6">
                      <h2 className="text-gray-800 text-lg font-semibold mb-2">
                        <div
                            className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{post.Page}</div>
                      </h2>

                      {(!post.Preview || post.Preview.length === 0) &&
                          <p className={"text-gray-500 mb-8"}>Pas de résumé disponible</p>}
                      {(post.Preview) && (
                          <p className={"text-gray-500 mb-8"}>{(post.Preview)}</p>
                      )}
                      <div className="flex justify-between items-end mt-auto">
                        <div className="flex items-center gap-2">
                          <div>
                            <span className="block text-red-800">{(post.Type)}</span>
                            <span className="block text-gray-400 text-sm">{getDateStr(post.Date)}</span>
                          </div>
                        </div>

                        <span
                            className="text-black text-sm border border-red-900 rounded px-2 py-1">Lire l'article</span>
                      </div>
                    </div>
                  </Link>
              )
            })}
          </div>
          <div className={"flex justify-center mt-20"}>
            <Link href={"/blog"} className={"bg-red-900 text-white text-center py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold hover:scale-105 duration-500"}>Consulter l'ensemble de mes actualités</Link>
          </div>
        </div>
      </div>
      <BesoinAvocat></BesoinAvocat>
    </>
  )
}

export default RenderPost