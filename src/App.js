import React from 'react'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {  
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }
  navToSearch = () => {
    this.setState({ showSearchPage: true })
  }
  navToHome = () => {
    this.setState({ showSearchPage: false })
  }

  render() {
    const title = 'MyReads'
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks 
            onNavToHome={this.navToHome}
          />
        ) : (
          <ListBooks 
            books={this.state.books}
            title={title}
            onNavToSearch={this.navToSearch}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
