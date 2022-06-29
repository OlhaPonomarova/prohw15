import { useRef, useState } from "react";
import { useEffect } from "react";
import { PostsInterface } from "../interfaces"

export const useDataPosts = () => {
    const [posts, setPosts] = useState([] as PostsInterface[]);

    const isSetTotal = useRef(false);


    const [pagination, setPagination] = useState({
        limit: 10,
        total: 10,
        page: 1
    })


    const onChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        setPagination({ ...pagination, page: value });
    }

    useEffect(() => {
        const { page, limit } = pagination;
        const nextSkip = page === 1 ? 0 : (page - 1) * limit;
        fetch(`https://dummyjson.com/posts?limit=${pagination.limit}&skip=${nextSkip}`)
            .then(res => res.json())
            .then((data) => {
                setPosts(data.posts);

                if (!isSetTotal.current) {
                    setPagination({ ...pagination, total: data.total / pagination.limit });
                    isSetTotal.current = true;
                }
            });

    }, [pagination.page]);

    return {
        posts,
        pagination,
        onChangePagination
    };
};