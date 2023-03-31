import { Post } from '../types/blog.type';
import { createReducer } from "@reduxjs/toolkit"

// declare Post interface
interface BlogState {
    postList: Post[]
}
//  declare state of Blog
const initialState: BlogState = {
    postList: []
}


// declare reducer
const blogReducer = createReducer(initialState, builder => {

});
export default blogReducer;
