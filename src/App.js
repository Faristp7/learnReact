import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import BookList from "./components/BookList";
import Book from "./components/Book"

export default function App() {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/books"}>books</Link>
            </li>
        </ul>
    </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/books" element={<BookList />}></Route>
        <Route path="/book/:id" element={<Book/>}></Route>
      </Routes>
    </>
  );
}
