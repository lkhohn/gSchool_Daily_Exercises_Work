# Express Validations

These instructions are written for `jade`, but if you want to use a different template engine you may. Feel free to ask me any questions.

### Goals:

 - To be able to validate user form submissions using express.
 - To be able to update views to notify users of invalid form submissions.

# Step One

1. In the `routes` directory create a file named `auth.js`.
1. Add the `auth.js` route to your `app.js` file for all `/auth` requests.
1. In `auth.js` create a `post` route for all `/signin` requests.

# Step Two

1. In the `views` directory create a view named `signin.jade` (you can use any template engine you want if you don't like jade);
1. Add a form with username and password inputs that posts to `/auth/signin`

# Step Three

1. In `auth.js` create a `get` route for all `/signin` requests that responds with template `signin.jade`

# Step Four

1. In `auth.js` add logic to your `/signin` `post` route to test if:
 - password equals `notverysecure`
 - username equals `xoEugenexoxo`
1. If both are true redirect to `/index`.
1. Otherwise re-render `signin` template with the fields filled in and error messages.

# Step Five

1. In `users.js` add a `post` route for `/signup`
1. Follow the same steps as before to create a `signup.jade`
  - This time with fields for username, email, phone, firstname, lastname, password, password check.
  - Ensure the password and password check are the same and at least 8 characters.
  - Ensure the email address contains an @ characters.
  - Ensure the phone number consists of only numbers and is 10 digits.
  - Ensure username, firstname and lastname exist.
1. `signup.jade` should post to `/users/signup`.
  - If successful redirect to `/auth/signin`
  - If fail re-render with forms still filled in and proper error messages.




# Bonus:

1. Now tie in the database and crypto logic from eugene fanclub part 1 to sign in users and sign up users.


# Postgres Setup

1.
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
