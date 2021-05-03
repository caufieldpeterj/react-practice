import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

function Booklist() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}

const title = "A Tale of Two Cities"
const author = "Charles Dickens"
const Book = () => {
  return (
    <article className='book'>
      <img className="image" src="https://litexplore.files.wordpress.com/2014/05/a-tale-of-two-cities.jpg"/>
      <h3 className='booktitle'>{title}</h3>
      <h3>{author}</h3>
    </article>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))