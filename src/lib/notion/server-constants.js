// use commonjs so it can be required without transpiling
const path = require('path')

const normalizeId = (id) => {
  if (!id) return id
  if (id.length === 36) return id
  if (id.length !== 32) {
    throw new Error(
      `Invalid blog-index-id: ${id} should be 32 characters long. Info here https://github.com/ijjk/notion-blog#getting-blog-index-and-token`
    )
  }
  return `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(
    16,
    4
  )}-${id.substr(20)}`
}

const NOTION_TOKEN = process.env.NOTION_TOKEN
const BLOG_INDEX_ID = normalizeId(process.env.BLOG_INDEX_ID)
const API_ENDPOINT = 'https://www.notion.so/api/v3'
const BLOG_INDEX_CACHE = path.resolve('.blog_index_data')
const ACCUEIL_INDEX_ID = normalizeId(process.env.ACCUEIL_INDEX_ID)
const DROIT_TRAVAIL_INDEX_ID = normalizeId(process.env.DROIT_TRAVAIL_INDEX_ID)
const DROIT_SOCIAL_INDEX_ID = normalizeId(process.env.DROIT_SOCIAL_INDEX_ID)
const HONORAIRES_INDEX_ID = normalizeId(process.env.HONORAIRES_INDEX_ID)
const COMPETENCES_DROIT_TRAVAIL_INDEX_ID = normalizeId(process.env.COMPETENCES_DROIT_TRAVAIL_INDEX_ID)
const COMPETENCES_DROIT_SOCIAL_INDEX_ID = normalizeId(process.env.COMPETENCES_DROIT_SOCIAL_INDEX_ID)

module.exports = {
  NOTION_TOKEN,
  BLOG_INDEX_ID,
  API_ENDPOINT,
  BLOG_INDEX_CACHE,
  ACCUEIL_INDEX_ID,
  DROIT_TRAVAIL_INDEX_ID,
  DROIT_SOCIAL_INDEX_ID,
  HONORAIRES_INDEX_ID,
  COMPETENCES_DROIT_TRAVAIL_INDEX_ID,
  COMPETENCES_DROIT_SOCIAL_INDEX_ID,
  normalizeId,
}