import React, {Component} from 'react'
//curly braces to pull off a single property
import {connect} from 'react-redux';

//we're not going to export this class anymore, so...
// export default
class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return(
        //remember, we just need to use a unique key for each item so we can use book.title
        <li key={book.title} className='list-group-item'>
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
export default connect(mapStateToProps)(BookList);
//connect takes a function and a component, and produces a container
//whenever state changes, the container will rerender
