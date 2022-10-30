CREATE DATABASE wishlistApp;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
);
CREATE TABLE wishlists
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE wishlistItems
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  url VARCHAR(255),
  imageUrl VARCHAR(255),
  wishlist_id INTEGER NOT NULL,
  FOREIGN KEY (wishlist_id) REFERENCES wishlists(id)
);