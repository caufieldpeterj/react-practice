import React from 'react'
import ReactDom from 'react-dom'

// import CSS
import './index.css'

// setup variables
const img = "https://litexplore.files.wordpress.com/2014/05/a-tale-of-two-cities.jpg"

function Booklist() {
  return (
    <section className='booklist'>
      {/* when rendering the book list we pass in props name:'value'  */}
      <Book title="random title" author="JK Rowling" number={22}/>
      <Book title="another random title" author="JRR Tolkien" number={44}/>
    </section>
  )
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img className="image" src={img} alt="book cover"/>
      <h3 className='booktitle'>{props.title}</h3>
      {/* <h3>{author.toUpperCase()}</h3> */}
      <h3>{props.author}</h3>
    </article>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))