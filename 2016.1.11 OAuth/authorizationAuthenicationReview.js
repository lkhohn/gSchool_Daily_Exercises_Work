authenication -- if user is correct and who they say they are
authorization -- what a user can see / do

Authorization // REVIEW:

On an edit page:
GET user update route
  -have to be that user
  -have to be user with id = 1 (specific num)
-use simple if statements to handle your logic
  example#1
    if(currentUser is not trying to edit someone else && if the currentUser is authorized to view this){
      let the user edit this
    } else { throw an error}
  example#2 **BETTER EXAMPLE
    if(the currentUser id =1 || the currentUser has the same id as the page trying to edit){
      then let the user edit
    } else { throw an error}


include the role in the saved user session

middleware -- all the pieces of logic that has access to req & res, before you send the response

function isUserAdmin(req, res, next){
  if(currentUser has the role of admin && currentUser is signed in){
    next();
  } else {
    throw an error or res.redirect user to different page
  }
}

function isUserRequestedUser(req, res, next){
  if(currentUser is the user requesting the information && currentUser has the role of admin && currentUser is signed in ){
    next();
  } else {
    throw an error or res.redirect to different page
  }
}


router middleware substacks -- a collection of middleware on a route - like how the middleware function isUserRequestedUser is being called on this route

router.get('/:id/edit', isUserRequestedUser, function(req, res, next){
  // do stuff like
  knex('users').select().where('id', req.params.id).first().then(function(user){
    delete user.password;
    res.render('../views//users/edit', {data: user})
  })
}

**by putting the functons isUserAdmin and isUserRequestedUser at the top of the router file, you can include just your route,
 without having to do any authorization stuff inside that route.
