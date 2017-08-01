import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
  render(){
    //when we first boot the app up, this.props.book is null. If we enter this case, we're going to return early from the render method. Once they actually click on a book, it's going to update our application state, which is going to cause our component to rerender. When it rerenders, we will then have this.props.book defined, which means we will successfully get down to the next block of code

    if(!this.props.book){
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  //we are specifically referencing activeBook because the active book reducer property
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
