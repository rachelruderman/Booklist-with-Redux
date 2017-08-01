//we just need to call this whenever a user clicks on a book
//we need to make sure that the action called gets run through all our reducers
export function selectBook(book){
// selectBook is an action creator, it needs to return an action
// an action is an object with a type property and sometimes a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

//this is the wiring for sending the action to the reducers
