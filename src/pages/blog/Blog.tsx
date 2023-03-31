import CreatePost from "./components/CreatePosts";
import PostItem from "./components/PostItems";
import PostList from "./components/PostLists";

export default function Blog() {
    return (
        <div className="p-5">
            <CreatePost/>
            <PostList/>
        </div>
    )
}
