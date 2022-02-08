const ADD_MESSAGE='addMessage';

const dialog_reducer=(state,action)=>{
if (action.type=ADD_MESSAGE)
{
  let NewMessage = {id: 4, message: action.SomeMessage};
  state.MessageItemData.push(NewMessage);
}
return state;
};
export default dialog_reducer;