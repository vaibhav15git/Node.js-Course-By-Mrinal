const express = require("express");

const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "user1" },
  { id: 2, name: "user2" },
  { id: 3, name: "user3" },
];
//------------------------------------------------------------------------------------
// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// app.get("/about", function (req, res) {
//   res.send("about page");
// });

// app.get("/contact", function (req, res) {
//   res.send("contact page");
// });

// app.get("/hello", function (req, res) {
//   res.send("hello page");
// });
//------------------------------------------------------------------------------------
// Routes parameters

// app.get("/users/:id", (req, res) => {
//   res.send(req.params.id);
// });
//------------------------------------------------------------------------------------
//for post or create request
app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(user);
  res.send(user);
});
//------------------------------------------------------------------------------------
// put or update request
app.put("/users/:name", (req, res) => {
  let user = users.find((user) => user.name === req.params.name);

  if (!user) return res.status(404).send("User not found");

  user.name = req.body.name;
  res.send(user);
});
//------------------------------------------------------------------------------------
// delete request
//1.Not recommended
app.delete("/users/:name", (req, res) => {
  let UpdateName = users.filter((user) => user.name !== req.params.name);

  users = UpdateName;
  res.send(users);
});

//2 Recommended

app.delete("/users/:id", (req, res) => {

   let user = users.find(user => user.id === req.params.id);
    if (!user) return res.status(404).send("User not found");

});

//------------------------------------------------------------------------------------
// serach by id
app.get("/users/:id", (req, res) => {
  console.log(req.params.id);

  let id = parseInt(req.params.id);
  let user = users.find((user) => user.id === id);

  if (!user) return res.status(404).send("User not found");

  res.send(user);
});
//------------------------------------------------------------------------------------
//search by name
app.get("/users/:name", (req, res) => {
  console.log(req.params.name);

  let user = users.find((user) => user.name === req.params.name);

  if (!user) res.status(404).send("User not found");

  res.send(user);
});

const port = process.env.PORT || 3000;

app.listen(port);
