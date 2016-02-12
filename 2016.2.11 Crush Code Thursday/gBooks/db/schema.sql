DROP TABLE authors;
CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  biography VARCHAR(1000),
  portraitURL VARCHAR(500)
);


DROP TABLE books;
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    genre VARCHAR(255),
    description VARCHAR(10000),
    coverImgURL VARCHAR(255),
    author_id INTEGER
);
