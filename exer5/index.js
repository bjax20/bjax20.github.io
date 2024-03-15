// const express = require('express')

import express from "express";
import fs from "fs";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extend: false }));

// This function will make a post request. (It will submit a book object)
app.post("/add-book", (req, res) => {
  const { book_name, isbn, author, year_published } = req.body;

  if (book_name && isbn && author && year_published) {
    var content =
      book_name + "," + isbn + "," + author + "," + year_published + "\n";

    fs.appendFile("books.txt", content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Book Added!");
      }
    });

    res.json({ success: true }); // if valid
  } else {
    console.log("That book was not added");
    res.json({ success: false }); // if invalid
  }
});

// This function will make a get request using the isbn and author
app.get("/find-by-isbn-author", function (req, res) {
  // import books.txt then find author and isbn

  const { isbn, author } = req.query;

  var data = fs.readFileSync("books.txt", "utf-8");
  var dataArr = data.split("\n");
  // console.log(dataArr);
  const books = [];
  for (const line of dataArr) {
    // console.log(line);
    var splitted = line.split(","); // the book that was splitted (fields)
    // console.log(splitted);
    var book_name = splitted[0];
    var isbn_database = splitted[1];
    var author_database = splitted[2];
    var year_published = splitted[3];

    // create a book object.
    let book = {
      book_name: book_name,
      isbn: isbn_database,
      author: author_database,
      year_published: year_published,
    };
    books.push(book);
  }

  // console.log(books);

  for (var i in books) {
    if (books[i].author == author && books[i].isbn) {
      res.send(books[i]);
      return;
    }
  }

  // If no match is found, send an empty object
  res.send({});
});

// This function will make a get request using the author
app.get("/find-by-author", function (req, res) {
  const { isbn, author } = req.query;
  // import the books.txt first then get it values
  var data = fs.readFileSync("books.txt", "utf-8");
  var dataArr = data.split("\n");
  // console.log(dataArr);
  const books = [];
  for (const line of dataArr) {
    // console.log(line);
    var splitted = line.split(",");
    // console.log(splitted);
    var book_name = splitted[0];
    var isbn_database = splitted[1];
    var author_database = splitted[2];
    var year_published = splitted[3];

    let book = {
      book_name: book_name,
      isbn: isbn_database,
      author: author_database,
      year_published: year_published,
    };
    console.log(book);
    books.push(book);
  }

  // console.log(books);
  console.log(author);
  for (var i in books) {
    if (books[i].author === author) {
      console.log(books[i].author);
      console.log(author);
      // console.log("hi");
      res.send(books[i]);
      return;
    }
  }

  // If no match is found, send an empty object
  res.send({});
});

// this tells our server to listen to the port 3002
// we can also pass an optional callback function to execute after the server starts
app.listen(3002, () => {
  console.log("Server started at port 3002");
});
