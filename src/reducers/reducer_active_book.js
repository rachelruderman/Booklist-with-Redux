//all reducers get two arguments: the current state and action
//reducers are only ever called when an action is called
//state argument is not application state; only the state this reducer is responsiblef or
//This is ES6. It says, if an argument comes in and it is undefined, set it to null
export default function(state = null, action){
  switch(action.type){
  case 'BOOK_SELECTED':
    return action.payload;
  }
//default case for when we don't care about the action
  return state;
}

//we also need to handle the case where the user boots the app up and no book has initially been selected. Redux doesn't allow you to return undefined from a reducer. To handle this case, default the state value to null
//Do not mutate state in the reducer. We always want to return a fresh object
