import React from 'react'
import ReactDom from 'react-dom'

// import CSS
import './index.css'

// import books array
import {data} from './books';

// import Book component
import Book from './Book'


function Booklist() {
  return (
    <section className='booklist'>
      {data.map((book) => {
        return (
          // {...book} spread operator spreads out all of the properties contained within the book object versus listing the properties out one-by-one
          <Book key={book.id} {...book}></Book>
        )
      })}
    </section>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))