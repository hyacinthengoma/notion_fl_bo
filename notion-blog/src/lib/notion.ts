import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_TOKEN_2,
});

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

export const getDatabase = async (databaseId) => {
    const response = await notion.databases.query({
        database_id: normalizeId(databaseId),
    });
    return response.results;
};