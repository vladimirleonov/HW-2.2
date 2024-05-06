import {MongoClient, ServerApiVersion, Collection, Db} from 'mongodb';
import {SETTINGS} from "../settings";
import {BlogDBType} from "./db-types/blog-db-types";
import {PostDbType} from "./db-types/post-db-types";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
let client: MongoClient = {} as MongoClient;
export let db = {} as Db;

export let blogCollection: Collection<BlogDBType> = {} as Collection<BlogDBType>;
export let postCollection: Collection<PostDbType> = {} as Collection<PostDbType>;

export const connectToDB = async (MONGO_URL: string) => {
    try {
        client = new MongoClient(MONGO_URL, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        const db = client.db(SETTINGS.DB_NAME);

        blogCollection = db.collection(SETTINGS.BLOG_COLLECTION_NAME);
        postCollection = db.collection(SETTINGS.POSTS_COLLECTION_NAME);

        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        return true;
    } catch(e) {
        console.log(e)
        await client.close()
        return false
    }
}

// run().catch(console.dir);