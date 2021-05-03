import React from 'react'
import ReactDom from 'react-dom'

// import CSS
import './index.css'

// setup variables
const firstBook = {
  img: "https://litexplore.files.wordpress.com/2014/05/a-tale-of-two-cities.jpg",
  title: "A Tale of Two Cities",
  author: "Charles Dickens"
}

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg",
  title: "LOTR",
  author: "JRR Tolkien"
}

function Booklist() {
  return (
    <section className='booklist'>
      {/* when rendering the book list we pass in props name:'value'  */}
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
        <p>
          Sit ut dolore aute quis sint et ut veniam dolore ullamco proident eu ullamco sit. Deserunt voluptate velit laboris dolor proident id esse eu reprehenderit est sint cillum Lorem. Ipsum dolore occaecat ex fugiat amet dolor esse magna eu reprehenderit. Deserunt esse ut duis consectetur labore. Labore exercitation et nostrud excepteur.
        </p>
      </Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
    </section>
  )
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img className="image" src={props.img} alt="book cover"/>
      <h3 className='booktitle'>{props.title}</h3>
      <h3>{props.author}</h3>
      {props.children}
    </article>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))