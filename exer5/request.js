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

needle.get('http://localhost:3002/find-by-author?author=J.K+Rowling', (err, res) => {
    console.log(res.body);   // prints an HTML string
});
