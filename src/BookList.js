import React, { Component } from "react"
// import Book from "./Book"

class BookList extends Component {
  state = {
    books: [
      {
        book: "book number 1",
        author: "John Doe",
      },
      {
        book: "book number 2",
        author: "bobby Doe",
      },
      {
        book: "book number 3",
        author: "peter Doe",
      },
    ],
  }

  // this.setState({})

  render() {
    const books = this.state.books
    console.log(books)

    return (
      <section>
        <h3>This is our BookList</h3>
        {/* <Book /> */}
        {/* <Book /> */}
        {/* <Book /> */}
      </section>
    )
  }
}

export default BookList
