import React from 'react'

const Book = (props) => {
    // attribute and eventHandler
    // onClick, onMouseover
    const clickHandler = () => {
      alert(props.title);
    }
    return (
      <article className='book'>
        <img className="image" src={props.img} alt="book cover"/>
        <h3 className='booktitle'>{props.title}</h3>
        <h3>{props.author}</h3>
        <button type="button" onClick={clickHandler}>Hello World</button>
      </article>
    )
}

export default Book

