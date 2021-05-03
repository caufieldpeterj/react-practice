import React from 'react'
import ReactDom from 'react-dom'

// import CSS
import './index.css'

// setup variables
const title = "A Tale of Two Cities"
const author = "Charles Dickens"
const img = "https://litexplore.files.wordpress.com/2014/05/a-tale-of-two-cities.jpg"

function Booklist() {
  return (
    <section className='booklist'>
      <Book title="random title" number={22}/>
      <Book title="another random title" number={44}/>
    </section>
  )
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img className="image" src={img} alt="book cover"/>
      <h3 className='booktitle'>{title}</h3>
      <h3>{author.toUpperCase()}</h3>
      {/* {console.log(props)} */}
    </article>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))