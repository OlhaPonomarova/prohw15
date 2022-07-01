import { useDataPosts } from "./hooks";
import { PostList } from "./components";
import { Pagination } from "./components/Pagination";
import { AddPostPopup } from "./components";

export const HomeFeature = () => {
    const { posts, onChangePagination, pagination } = useDataPosts();

    return (
        <div>
            <AddPostPopup />
            <PostList posts={posts} />
            <Pagination onChange={onChangePagination} pagination={pagination} />
        </div >
    );
};