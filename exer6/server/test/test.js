import needle from "needle";

// POST /save-student
// Create 5 different students including Mary Jane Watson
// Student 1
needle.post(
  "http://localhost:3000/api/students/save-student",
  {
    stdnum: "2021-12715",
    fname: "John",
    lname: "Doe",
    age: 20,
  },
  (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.body);
    }
  }
);

// // Student 2
needle.post(
  "http://localhost:3000/api/students/save-student",
  {
    stdnum: "2",
    fname: "Jane",
    lname: "Smith",
    age: 22,
  },
  (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.body);
    }
  }
);

// Student 3
needle.post(
  "http://localhost:3000/api/students/save-student",
  {
    stdnum: "3",
    fname: "Michael",
    lname: "Johnson",
    age: 21,
  },
  (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.body);
    }
  }
);

// Student 4
needle.post(
  "http://localhost:3000/api/students/save-student",
  {
    stdnum: "4",
    fname: "Emily",
    lname: "Williams",
    age: 23,
  },
  (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.body);
    }
  }
);

// Student 5 (Mary Jane Watson)
needle.post(
  "http://localhost:3000/api/students/save-student",
  {
    stdnum: "5",
    fname: "Mary",
    lname: "Jane",
    age: 25,
  },
  (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.body);
    }
  }
);

// POST /update
// Test update endpoint
needle.post(
  "http://localhost:3000/api/students/update",
  {
    fname: "John",
    newFname: "Johnny",
    newLname: "Doe",
  },
  (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.body);
    }
  }
);

// POST /remove-user
// Test remove-user endpoint
needle.post("http://localhost:3000/api/students/remove-user?stdnum=123456", (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.body);
  }
});

// POST /remove-all-user
// Test remove-all-user endpoint
needle.post("http://localhost:3000/api/students/remove-all-user", (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.body);
  }
});

// GET /user
// Test user endpoint
needle.get("http://localhost:3000/api/students/user?stdnum=2021-12715", (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.body);
  }
});

// GET /members
// Test members endpoint
needle.get("http://localhost:3000/api/students/members", (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.body);
  }
});
