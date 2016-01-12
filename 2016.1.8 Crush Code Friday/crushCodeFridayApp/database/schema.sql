DROP TABLE;
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  cuisine VARCHAR(255),
  rating INTEGER,
  bio VARCHAR(510)
);


DROP TABLE users;
CREATE TABLE users (
    username    varchar(50),
    password    varchar(256)
);
