import { useDataPosts } from "./hooks";
import { PostList } from "./components";

export const HomeFeature = () => {
    const { posts } = useDataPosts();

    return (<div>
        <PostList posts={posts} />
    </div>
    );
};