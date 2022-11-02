DROP TABLE IF EXISTS items  CASCADE;
-- CREATE ITEMS 
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR NOT NULL,
  url VARCHAR NOT NULL,
  image VARCHAR NOT NULL,
  price INTEGER NOT NULL,
  wishlist_id INTEGER NOT NULL REFERENCES wishlists(id) ON DELETE CASCADE NOT NULL
);

-- Alternative. save as binary data or third party api that creates image url. clould flare images
-- storing it in a seperate database
-- check other apis downloads, starts, documentation
