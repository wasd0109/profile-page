import {  readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';

type BlogMetadata = {
    title:string,
    excerpt:string,
    hashtags:string,
    thumbnail:string,
    language:string,
    date:Date
}

export  function getBlogs(){
    const blogsDirectory = path.join(process.cwd(), 'src/public/contents/blogs');
    const blogs:BlogMetadata[] = readdirSync(blogsDirectory).map((filePath)=>{
        const blogPath = path.join(blogsDirectory,filePath)
        const fileContent = readFileSync(blogPath,'utf8');
        const { data: metadata} = matter(fileContent);
        // metadata.thumbnail = path.join(process.cwd(),metadata.thumbnail)
        return metadata as BlogMetadata;
    });
    return blogs;
}