import React, { Component } from 'react'
import placeHolder from './icons/placeholder-image.jpg'


class BookRender extends Component{
	update = (book, value) => {
		book.shelf = value
	}

	render(){
		const {book, updateShelf} = this.props

		return(
		    <div className="book">
		      <div className="book-top">
		        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail :  placeHolder})` }}></div>
		        <div className="book-shelf-changer">
		          <select value={book.shelf || 'none'}
		          	onChange={(evt) => {updateShelf(book, evt.target.value); this.update(book, evt.target.value)}}>
		            <option value="move" disabled>Move to...</option>
		            <option value="currentlyReading">Currently Reading</option>
		            <option value="wantToRead">Want to Read</option>
		            <option value="read">Read</option>
		            <option value="none">None</option>
		          </select>
		        </div>
		      </div>
		      <div className="book-title">{book.title}</div>
		      <div className="book-authors">{book.authors}</div>
		    </div>
		)
	}
}


export default BookRender