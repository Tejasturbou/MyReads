import React from 'react'
/*import * as BooksAPI from './BooksAPI'*/
import { Route } from 'react-router-dom'
import './App.css'
import MyReads from './MyReads'
import Search from './Search'

class BooksApp extends React.Component {

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <MyReads/>
        )}/>

        <Route path="/search" render={() => (
          <Search/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
