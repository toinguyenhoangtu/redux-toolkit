import { initalPostList } from 'constants/blog';
import { Post } from '../types/blog.type';
import { createAction, createReducer } from "@reduxjs/toolkit"
// declare Post interface
interface BlogState {
    postList: Post[],
    editingPost: Post | null
}
//  declare state of Blog
const initialState: BlogState = {
    postList: initalPostList,
    editingPost: null
}
// create action addPost
export const addPost = createAction<Post>('blog/addPost')
// crate action deletePost
export const deletePost = createAction<string>('blog/deletePost')
//  create action editPost
export const editingPost = createAction<string>('blog/editingPost')
//  create action cancle post 
export const canclePost = createAction('/blog/canclePost')
// declare reducer
const blogReducer = createReducer(initialState, (builder) => {
    builder.addCase(addPost, (state, action) => {
        // immer js
        // tạo ra bản sao rồi muate trên bản sao đó
        const post = action.payload
        state.postList.push(post);
    }).addCase(deletePost, (state, action) => {
        const postId = action.payload
        const findIndex = state.postList.findIndex((post) => post.id === postId)
        // nếu tìm k thấy index thì nó sẽ trả về -1, nếu tìm thấy thì nó sẽ trả về từ 0 trở lên
        if (findIndex !== -1) {
            // mute state index
            state.postList.splice(findIndex, 1)
        }
    }).addCase(editingPost, (state, action) => {
        const postId = action.payload
        const findPost = state.postList.find((post) => post.id === postId) || null
        state.editingPost = findPost

    }).addCase(canclePost, (state) => {
        state.editingPost = null
    });
});
export default blogReducer;
