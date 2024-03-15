import needle from "needle";

needle.post(
  "http://localhost:3002/add-book",
  {
    book_name: "How To Win Friends and Influence People",
    isbn: "1-4391-6734-6",
    author: "Dale Carnegie",
    year_published: "1936",
  },
  (err, res) => {
    console.log(res.body); // prints the server’s response “Received a POST request.”
  }
);

needle.get(
  "http://localhost:3002/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K+Rowling",
  (err, res) => {
    console.log(res.body); // prints an HTML string
  }
);

needle.get('http://localhost:3002/find-by-author?author=Dale+Carnegie', (err, res) => {
    console.log(res.body);   // prints an HTML string
});


// Special Test Cases:

// Test add-book endpoint
needle.post('http://localhost:3002/add-book', {
  // Test case 1: Missing fields
  // bookName, isbn, author, and year are missing
}, (err, resp, body) => {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
  }
});

needle.post('http://localhost:3002/add-book', {
  // Test case 2: Empty strings for all fields
  bookName: '',
  isbn: '',
  author: '',
  year: ''
}, (err, resp, body) => {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
  }
});

// // Test find-by-isbn-author endpoint
needle.get('http://localhost:3002/find-by-isbn-author?isbn=1234567890&author=John+Doe', (err, resp, body) => {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
  }
});

