import React from 'react'
import ReactDom from 'react-dom'

// import CSS
import './index.css'

// setup variables
const books = [
{
  id: 1,
  img: "https://litexplore.files.wordpress.com/2014/05/a-tale-of-two-cities.jpg",
  title: "A Tale of Two Cities",
  author: "Charles Dickens"
},
{
  id: 2,
  img: "https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg",
  title: "LOTR",
  author: "JRR Tolkien"
},
{
  id: 3,
  img: "https://cdn.shopify.com/s/files/1/0346/6845/products/Born-To-Run-Product-book-cover_1200x.jpg?v=1568676021",
  title: "Born to Run",
  author: "Christopher McDougall"
}]



function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book key={book.id} book={book}></Book>
        )
      })}
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img className="image" src={props.book.img} alt="book cover"/>
      <h3 className='booktitle'>{props.book.title}</h3>
      <h3>{props.book.author}</h3>
    </article>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))