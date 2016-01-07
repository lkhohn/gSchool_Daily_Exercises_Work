### Cloning  & Installing

```
git clone -b part3 https://github.com/JordanMajd/eugenefanclub.git
cd eugenefanclub
npm install
```
### App Setup

Replace everywhere you see `jroel` with your own username, future versions will fix this by implementing env vars.

### Postgres Setup

```
psql
\c eugenefanclub
DROP TABLE users;
CREATE TABLE users (
	id SERIAL,
	username VARCHAR(255),
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	phone VARCHAR(255),
	email VARCHAR(255),
	password VARCHAR(255)
);
\d
\q
```

### Running

```
nodemon
```

### Instructions

1. Implement `cookie-sessions` in `app.js`.
1. Update your `post: /auth/login` and `post: /auth/logout` routes to set and delete session cookies.
