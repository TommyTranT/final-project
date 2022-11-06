const express = require("express");
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const app = express();
const PORT = 8080; // default port 8080

const {
  generateRandomString,
  findUserByEmail,
  getUserFromCookie,
  getwishlistofUser,
  emailMatch,
} = require("./helpers.js");
console.log(findUserByEmail());

app.use(express.urlencoded({ extended: true }));
// app.use('/assets', express.static('assets'))
app.use(
  cookieSession({
    name: "session",
    keys: ["secretkey"],
  })
);
// app.use(express.static("public"));
app.use(express.static(__dirname));
app.set("view engine", "ejs");

//our updated database
const urlDatabase = {
  b6UTxQ: {
    longURL: "https://www.tsn.ca",
    userID: "aJ48lW",
  },
  i3BoGr: {
    longURL: "https://www.google.ca",
    userID: "aJ48lW",
  },
  i3BoGr: {
    longURL: "https://www.google.ca",
    userID: "b2x3rt",
  },
};

const users = {
  userRandomID: {
    id: "userRandomID",
    email: "user@example.com",
    password: "purple-monkey-dinosaur",
  },
  user2RandomID: {
    id: "user2RandomID",
    email: "user2@example.com",
    password: "dishwasher-funk",
  },
};

//this is simply the example page
app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/u/:id", (req, res) => {
  // incorrect id entered, so we send an error
  console.log(req);
  const id = req.params.id;
  const urlID = urlDatabase[id];
  if (!urlID) {
    return res.status(400).send("That id doesn't exist!");
  }
  const longURL = urlDatabase[req.params.id].longURL;
  res.redirect(longURL);
});

//whenever we see app.get and then a render request we are asking html to render the html webpage.
app.get("/wishlist", (req, res) => {
  const userID = req.session["user_id"];
  const user = getUserFromCookie(userID, users);
  const mywishlist = getwishlistofUser(userID, urlDatabase);

  const templateVars = { wishlist: mywishlist, user }; //to get the username to show up we added the username cookie as a paramter.

  if (!userID) {
    // return res.send("You need to login!");
    res.redirect('/login')
  }
  res.render("wishlist_index", templateVars);
});

app.get("/login", (req, res) => {
  if (req.session["user_id"]) {
    res.redirect(`/wishlist`);
  }

  const templateVars = { user: null };
  res.render("login", templateVars);
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //error handling, if user and pass are zero return error
  if (email.length === 0 && password.length === 0) {
    return res.status(400).send(`400 error - Missing E-mail or Password`);
  }
  //if emailmatch is true, then error
  const user = findUserByEmail(email, users);
  if (!user) {
    return res.status(400).send(`400 error - No user found!`);
  }
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(400).send(`400 error - Incorrect email or password!`);
  }

  if (user) {
    req.session.user_id = user.id;
    res.redirect(`/wishlist`);
  } else {
    res.redirect("/login");
  }
});

app.post("/wishlist", (req, res) => {
  console.log(req.body);
  const longURL = req.body.longURL;
  const description = req.body.description;
  const price = req.body.price;
  const img = req.body.img;
  const link = req.body.link;

  if (!longURL) {
    return res.status(400).send("Enter valid url!");
  }

  const user = getUserFromCookie(req.session["user_id"], users);
  if (!user) {
    return res.status(400).send("NO! You are not logged in!");
  }

  const id = generateRandomString();
  urlDatabase[id] = {
    longURL,
    description,
    price,
    img,
    userID: req.session["user_id"],
    link,
  };
  res.redirect(`/wishlist`);
});

app.post("/wishlist/:id", (req, res) => {
  urlDatabase[req.params.id].longURL = req.body.longURL;
  res.redirect(`/wishlist`);
});

app.post("/wishlist/:id/delete", (req, res) => {
  // if user doesn't own url
  if (urlDatabase[req.params.id].userID !== req.session.user_id) {
    return res.status(403).send(`You don't own that URL.`);
  }

  delete urlDatabase[req.params.id];
  //once you delete, redirect to the url page
  res.redirect(`/wishlist`);
});

app.get("/wishlist/new", (req, res) => {
  const user = getUserFromCookie(req.session["user_id"], users);
  if (!user) {
    res.redirect("/login");
  }

  const templateVars = { user };
  res.render("wishlist_new", templateVars);
});

//this is a get request for a new register page, user name is null and we render the file /register
app.get("/register", (req, res) => {
  const templateVars = { user: getUserFromCookie(null, users) };
  res.render("register", templateVars);
});

app.get("/wishlist/:id", (req, res) => {
  if (!req.session["user_id"]) {
    return res.status(403).send(`You are not logged in!`);
  }

  const id = req.params.id;
  if (!urlDatabase[id]) {
    return res.status(403).send(`ID not present in database!`);
  }

  let wishlistOfUser = getwishlistofUser(req.session["user_id"], urlDatabase);
  if (!wishlistOfUser[id]) {
    return res.status(403).send(`You do not own this ID!`);
  }

  const longURL = urlDatabase[id].longURL;

  if (!longURL) {
    return res.status(400).send("URL doesn't exist!");
  }

  const description = urlDatabase[id].description;
  const img = urlDatabase[id].img;
  const price = urlDatabase[id].price;
  const link = urlDatabase[id].link;

  const templateVars = {
    id,
    longURL,
    description,
    price,
    link,
    img,
    user: getUserFromCookie(req.session["user_id"], users),
  };
  res.render("wishlist_show", templateVars);
});

app.get("/wishlist.json", (req, res) => {
  res.json(urlDatabase);
});

app.get("/hello", (req, res) => {
  res.send("<html><body>Hello!<b>World</b></body></html>\n");
});

//clears the username cookie from memory
app.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/wishlist");
});

// this connects the forms in register.ejs to our server
app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const hashedPassword = bcrypt.hashSync(password, 10);

  //error handling, if user and password are zero return error
  if (email.length === 0 || password.length === 0) {
    return res.status(400).send(`400 error - Missing E-mail or Password`);
  }

  // if emailmatch is true, then error
  if (findUserByEmail(email, users)) {
    return res.status(400).send(`400 error - A new email is required.`);
  }

  const id = generateRandomString();

  //hashed passowrd added in to the password property
  const user = { email, password: hashedPassword, id };

  users[id] = user;
  req.session.user_id = id;
  res.redirect(`/wishlist`);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
