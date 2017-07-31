import React, {Component} from 'react'

export default class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return(
        //remember, we just need to use a unique key for each item so we can use book.title
        <li key={book.title} className='list-group-item'>
          {book.title}
        </li>
      )
    )}
  }

  render(){
    return(
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}
