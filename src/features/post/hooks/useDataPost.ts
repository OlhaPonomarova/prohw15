import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostsInterface } from "../interfaces"

export const useDataPosts = () => {

    const { postId, type } = useParams();
    let navigate = useNavigate();

    const [post, setPost] = useState({} as PostsInterface);

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${postId}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
            });
    }, []);

    const onEditPostSubmit = (e: any) => {
        e.preventDefault();

        const title = e.target.title.value;
        const description = e.target.body.value;

        fetch(`https://dummyjson.com/posts/${postId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description }),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("this post update");
                navigate(`/post/${postId}`);
            });
    }

    return { post, isEdit: type === "edit", onEditPostSubmit };

};