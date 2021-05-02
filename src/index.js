import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

function Booklist() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image/>
      <Title/>
      <Author/>  
    </article>
  )
}

const Image = () => {
  return (
    <img className="image" src="https://litexplore.files.wordpress.com/2014/05/a-tale-of-two-cities.jpg"/>
  )
}

const Title = () => {
  return ( 
    <h3 className='booktitle'>A Tale of Two Cities</h3>
  )
}

const Author = () => {
  return (
    <h3>Charles Dickens</h3>
  )
}



ReactDom.render(<Booklist />, document.getElementById('root'))