import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book_render from './Book_render'
/*import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'*/

class Search extends Component{

  state={
    query: '',
    search_books: [],
    error: false
  }

  searchBooks = (newQuery) => {
    this.setState({query: newQuery});

    if(newQuery){
      this.setState({error: false});
      BooksAPI.search(newQuery).then((books) => {
        books.length > 0 ? this.setState({search_books: books}) : this.setState({error: true, search_books: []})
      })
    } else {
      this.setState({search_books: [], error: true});
    }
  }

	render(){
    const {error, query, search_books} = this.state


		return(
			<div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.searchBooks(event.target.value) }
                />

              </div>
            </div>


            <div className="search-books-results">
              <ol className="books-grid">
                {!(error) ? (search_books.map((book) => (
                  <Book_render book={book}/>
                ))) : query ? <div>Sorry "{query}" book is not available</div> : <div></div>
                }
              </ol>
            </div>


          </div>
		)
	}
}


export default Search