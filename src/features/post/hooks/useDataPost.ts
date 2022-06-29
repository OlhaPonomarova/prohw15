import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostsInterface } from "../interfaces"

export const useDataPosts = () => {

    const { postId } = useParams();
    const [post, setPost] = useState({} as PostsInterface);

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${postId}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
            });
    }, []);


    return post;

};