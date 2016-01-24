
client -----> req (request) header: cookie -----> server
client <---- res (response) set-cookie: session1 <---- server


cookies are set in the server side. So, they are set in the res (response) from the server
-domain specific
-key value pairs


cookie-parser---watch for HTTP headers with cookies and puts it in a spot where were can handle it.
  --parses cookie request and put all that data onto the request so we can handle it.

body-parser---works the same as the cookieParser


cookie-session--middleware that automatically creates a session and stores the session information on a cookie
  npm install --save cookie-session  -- this will save to the package.json but you need to require in your app.js

middleware -- application logic that asks on a request before a response is sent

app.use(cookieSession({
  name:'session', <-- by default, it is named "session". Recommended to KEEP IT AS 'SESSION'
  keys: ['superSecret', 'anotherSecret'] <-- the keys value should be saved in your .env
                        <---Ideally these keys should be randomly generated for secruity reasons--search for generating cryptographically secure keys
}))
**to set things like when the cookie should expire (automatically removed)---check the documentation.
  this should be on another app.use()

now we can put our cookie on req.session

in your routes--->

router.get('/signin', function(req, res, next) {
  req.session.user = {'id':1, 'name': 'lindsay'};
// to view the req.session.user, you can view by setting res.send(req.session.user)---this will be decrypted---when you set a cookie session, it is cyrptograpically formed through cookie-session middleware
// user username & password to look up user in db
// set the session to data from the db record returned
  res.send(req.session.user):
  res.send('now logged in');
});

router.get('/signout', function(req, res, next){
  req.session = null;  ***Note: DO NOT use req.session.user = null. THIS DOES NOT WORK PROPERLY
  res.send('now logged out');
})


when a user comes to your site, you give them a cookie. When the user logs in, you can take the previously set cookie-session and
update their cookie-session information to new cookieSession information. Basically, you give htem a new cookie but it contains any information
that was saved in their non-logged-in cookieSession

things to store in cookie ---> at the very least, a unique identifier like a user name
  -often it can also be username and password.
  -NEVER store name
  -storing minimum amount can be better for the user and load time
  -am I using it everywhere? how big is it?
