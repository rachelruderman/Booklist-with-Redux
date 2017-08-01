import React, {Component} from 'react'
//curly braces to pull off a single property
import {connect} from 'react-redux';
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux'
//we're not going to export this class anymore, so...
// export default
class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return(
        //remember, we just need to use a unique key for each item so we can use book.title
        <li
            key={book.title}
            onClick={()=> this.props.selectBook(book)}
            className='list-group-item'>
            {book.title}
        </li>
      )
    })
  }

  render(){
    return(
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

//the purpose of this function is to take our application state as an argument. Remember, our state contains the array of books and the active book
function mapStateToProps(state){
    //Whatever is returned from here will show up as props inside of BookList
    //Usually we end up returning an object. This function is the glue between react and redux
  return {
    books: state.books
  }
}
//whenever we make a container, we don't want to export the component; we want to export the container
function mapDispatchToProps(dispatch){
  //Whenever selectBook is called, the result should be passed to all of our reducers. That's what bindActionCreators is doing here. Wheenver this gets called, I want to make sure the reuslt is flowed through all the reducers in teh app.
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

//Promote booklist from a comonent to a container. It needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//connect takes a function and a component, and produces a container
//whenever state changes, the container will rerender
