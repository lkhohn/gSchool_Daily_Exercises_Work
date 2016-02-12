-- DROP TABLE authors;
-- CREATE TABLE authors (
--   id SERIAL PRIMARY KEY,
--   firstName VARCHAR(255),
--   lastName VARCHAR(255),
--   biography VARCHAR(1000),
--   portraitURL VARCHAR(500)
-- );
--
--
-- DROP TABLE books;
-- CREATE TABLE books (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(255),
--     genre VARCHAR(255),
--     description VARCHAR(10000),
--     coverImgURL VARCHAR(255),
--     author_id INTEGER
-- );
--
--
-- each author can have more than one book. When you join,
-- join TABLE
-- book_id with author_id


DROP TABLE authors;
CREATE TABLE authors (
  author_id SERIAL PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  biography VARCHAR(1000),
  portraitURL VARCHAR(500)
);

DROP TABLE books;
CREATE TABLE books (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  genre VARCHAR(255),
  description VARCHAR(10000),
  coverImgURL VARCHAR(255)
);

DROP TABLE author_book;
CREATE TABLE author_book (
  author_id    int REFERENCES authors (author_id) ON UPDATE CASCADE ON DELETE CASCADE,
  book_id int REFERENCES books (book_id) ON UPDATE CASCADE,
  CONSTRAINT author_book_pkey PRIMARY KEY (book_id, author_id)
);
