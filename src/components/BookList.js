import React from 'react'
import { Link } from 'react-router-dom'

export default function BookList() {
  return (
    <>
    <div>
      <h1>BookList</h1>
      <Link to="/books/1">Book1</Link>
      <Link to="/books/2">Book2</Link>  
    </div>
    </>
  )
}
 