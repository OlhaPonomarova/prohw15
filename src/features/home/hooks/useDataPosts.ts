import { useState } from "react";
import { useEffect } from "react";
import { PostsInterface } from "../interfaces"

export const useDataPosts = () => {
    const [posts, setPosts] = useState([] as PostsInterface[]);

    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=10')
            .then(res => res.json())
            .then((data) => {
                setPosts(data.posts);
            });

    }, []);

    return {
        posts
    };
};