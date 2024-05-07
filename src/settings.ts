import {config} from "dotenv";

config();

export const SETTINGS = {
    PORT: process.env.PORT,
    PATH: {
        BLOGS: '/blogs',
        POSTS: '/posts',
        TESTING: '/testing',
    },
    MONGO_URL: process.env.MONGO_URL,
    DB_NAME: 'blog_db',
    BLOG_COLLECTION_NAME: 'blogs',
    POSTS_COLLECTION_NAME: 'posts',
}

export const HTTP_CODES = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

type AuthDataType = {
    ADMIN_AUTH: string,
    FAKE_AUTH: string
}

export const AUTH_DATA: AuthDataType = {
    ADMIN_AUTH: 'admin:qwerty',
    FAKE_AUTH: 'username:password'
}
