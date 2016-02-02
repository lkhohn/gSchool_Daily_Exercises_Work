DROP TABLE users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username    varchar(50),
    password    varchar(256)
);
