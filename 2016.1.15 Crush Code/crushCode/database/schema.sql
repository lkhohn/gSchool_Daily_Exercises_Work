DROP TABLE;
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  category VARCHAR(255),
  title VARCHAR(255),
  content VARCHAR(255),
  user_id VARCHAR(255)
);


DROP TABLE users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username    varchar(50),
    password    varchar(256)
);
