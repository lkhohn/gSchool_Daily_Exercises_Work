Error Handling


inside of a throw an error statement:
try {
  if an error happens, try to do this:
  gol.run();
  } catch (err){
    if you fail at doing the try section
  console.error(err);
  fs.write(write to a error log file);
} finally {
    will run after the try and catch sections. It will run no matter what happens if the try and catch fail or are successful
}


What happens when you just throw an error? This is called propigating the error:
throw new Errror('error');
**note that new Error() is a constructor
 - this outputs the error plus the stack trace to see where this error occured


 try {
   throw new Error('Whoops!');
 } catch (error) {
   console.error(error);
 }
console.log('still here');
*if you handled the error correctly, then you should be able to log('still here')

On our error object (its a constructor!!), you can console.log(error.stack)
  error.stack will display the error stack trace

***try catch is the naive JS way to handle errors for sync code. Other applications like express and node (async) will handle errors differently


Node.js error Handling

the first argument is a check if there was an error is truthy
  if(error){
    handle the error
    could send a 500 error back to the user
  } else {
    if error is NOT null, handle whatever you want to do with the data
  }

Two examples of handling errors in async code:

  const fs = require('fs');
  fs.readFile('a file that does not exist', (err, data) => {
    if (err) {
      console.error('There was an error reading the file!', err);
      return;
    }
    // Otherwise handle the data
  });

with eventEmitter --
  const net = require('net');
  const connection = net.connect('localhost');

  // Adding an 'error' event handler to a stream:
  connection.on('error', (err) => {
    // If the connection is reset by the server, or if it can't
    // connect at all, or on any sort of error encountered by
    // the connection, the error will be sent here.
    console.error(err);
  });

  connection.pipe(process.stdout);







sync vs async
sync--
    var bcrypt = require('bcrypt');
    try {
      bcrypt.hashSync('notagoodpass');
    } catch (error) {
      console.error(error.stack);
    }

async--
  bcrypt.hash('notagoodpass', function(err, data){
    if(err){
      // handle error
    } else {
      // do something
    }
  })


Promises
-if you call reject, then you handle the error in the catch function




Promise errors in Express
-After you set up your middleware...
  app.use(function(req, res, next){
    use the middleware
  });
-then you can handle your errors LAST. Handle like this:
    // error handlers
    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
      app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
          message: err.message,
          error: err
        });
      });
    }
    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      });
    });
**Handle the errors LAST in your app.js file**


example of how this works:
    app.use(function(req, res, next){
      next();
    });
    app.get('/stuff', function(req, res, next){
      if(somethingWentWrong){
        next(new Error('something went wrong')); <<---this next() will then call the next app.use WITH an error in the params
      }
    });
    app.use(function(err, req, res, next){
      // handle error
    });





//
