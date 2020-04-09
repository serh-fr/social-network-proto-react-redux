import profileReducer, { addPost, deletePost } from "./profile-reducer"

let initialState = {
    posts: [
        {id: 1, post: 'Hello, world!', likes: 20},
        {id: 2, post: 'It is my first react project', likes: 15}
    ],
}

it('length posts should be increment', () => {
    let action = addPost('new post');

    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(3);
})

it('length posts should be changed after delete post', () => {
    let action = deletePost(1);

    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(1);
})

it('post should not be deleted if id is incorrect', () => {
    let action = deletePost(10);

    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(2);
})