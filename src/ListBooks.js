import React from 'react'
import { Link } from 'react-router-dom'
// import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types'

class ListBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props
    console.log('Books array ', books)
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {books.map((book) => (
                  (book.shelf === 'currentlyReading') && (<li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      {book.authors.map((author, index)=>(
                        <div key={index} className="book-authors">{author}</div>
                      ))}
                    </div>
                  </li>)
                ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {books.map((book) => (
                  (book.shelf === 'wantToRead') && (<li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      {book.authors.map((author, index)=>(
                        <div key={index} className="book-authors">{author}</div>
                      ))}
                    </div>
                  </li>)
                ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {books.map((book) => (
                  (book.shelf === 'read') && (<li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      {book.authors.map((author, index)=>(
                        <div key={index} className="book-authors">{author}</div>
                      ))}
                    </div>
                  </li>)
                ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div> */}
        <Link
          to="/search"
          className="open-search">
          Add a Book
          {/* <button>Add a Book</button> */}
        </Link>
      </div>
    )
  }   
}

export default ListBooks;