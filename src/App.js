import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import MyReads from './MyReads'
import Search from './Search'



class BooksApp extends React.Component {

  state = {
    books: []
  }

  shelfBooks = () => {
    BooksAPI.getAll().then((Books) => {
        this.setState({books: Books})
    })
  }

  componentDidMount() {
    this.shelfBooks()
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.shelfBooks()
    })
  }

  render() {
    const {books} = this.state
    return (
      <div>
        <Route exact path="/" render={() => (
          <MyReads books={books} updateShelf={(book, shelf) => this.changeShelf(book, shelf)}/>
        )}/>

        <Route path="/search" render={() => (
          <Search currentBooks={books} updateShelf={(book, shelf) => this.changeShelf(book, shelf)}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
