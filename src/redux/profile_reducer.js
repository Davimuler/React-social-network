const ADD_POST='addPost';
 const profile_reducer=(state,action)=>{
if (action.type=ADD_POST) {
    let NewPost = {count: 666};
   state.push(NewPost);
}
     return state;}
export default profile_reducer;