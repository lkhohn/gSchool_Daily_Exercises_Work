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

#### Authentication

1. Implement `cookie-sessions` in `app.js`.
1. Update your `post: /auth/signout` and `post: /auth/signout` routes to set and delete session cookies.
1. Add a signout button that posts to `/auth/signout`

#### Authorization

1. Add two types of roles for logged in users:
  - Admin users should have access a page that lists all the users in the system.
  - Normal users should not have access to the list all users page.
1. If a user tries to access a page they don't have authorization to access, they should get a 401 status code (or other appropriate status code).

#### Stretch goals

1. Add routes to update user.
  - Admin users should be able to update any user.
  - Normal users should only be able to update themselves.
1. Add `dotenv` support for `cookie-session` keys and `knex` connections username and similar fields.
1. Add routes to delete user.
  - Admin users should be able to delete any user.
  - Normal users should only be able to delete themselves.
