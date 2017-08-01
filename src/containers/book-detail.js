import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
  render(){
    return (
      <div>Book Detail!</div>
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
