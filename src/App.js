import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import MyReads from './MyReads'
import Search from './Search'

class BooksApp extends React.Component {
  state={
    search_books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({search_books: books})
      console.log(this.state.search_books)
    })
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <MyReads/>
        )}/>

        <Route path="/search" render={() => (
          <Search search_books={this.state.search_books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
