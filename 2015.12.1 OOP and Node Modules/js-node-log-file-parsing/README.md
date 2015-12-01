# Log File Parser

Please read through this entire document first, then return to the beginning to complete the exercise.

## Setting the stage (What and Why)

Web applications of all sizes tend to generate lots of _log data_. Log data contains information that allows developers and operations engineers to get insight into how a system is operating in the production environment. As you progress in software development you will learn the age old adage ["it works on my machine!"](http://www.ademiller.com/blogs/tech/2008/06/it-works-on-my-machine-award/) This is a reflection of the fact that it often works in your development environment, but then fails in the production environment.

This exercise is design to help familiarize you with what log data is and can look like. You will write code using Node.js and the `fs` module to parse the log data and turn it into usable data structures.

## Educational Objectives

- Run a JavaScript file with `node`.
- Use `fs` to parse files and understand more about file I/O.
- Use the File System Module (`fs`) to interact with the filesystem.

### Key terms:

- file I/O
- `fs`

## Educational Activities

Recall that for a file that lives at `/path/to/file.js`, it can be run using the Node.js command line tool like so:

  ```
  node /path/to/file.js
  ```

#### What is I/O?

I/O is simply, _input/output_, and can be used in many different contexts. In our particular case, we are interested with file I/O.

Begin by reading the documentation for [`fs.readFile`](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback) and:

  1. Construct an example that reads a file from your own filesystem.
  1. Why is the output from the example in the documentation so strange? Is there a "fix"?

Create a file with the following code in it, this should illustrate the answer to the second question:

  ```js
  // include the fs module
  var fs = require("fs");

  // handle a command line argument for the filename
  var filename = process.argv[2];

  fs.readFile(filename, function(err, data) {
    if (err) throw err;

    // what gets logged in each case?
    console.log(data);

    console.log(data.toString());
  }); 
  ```

Use `node /path/to/file.whatever` to run the file. Add additional `console.log` statements to figure out more of what is going on. If you have a hypothesis come up with an experiment to confirm/deny your suspicions. Some leading questions: When is `err` triggered? What is `data`? What is `data.toString()`?

Review the first line of the script above, `var fs = require("fs");`. This code brings in a library, `fs`, which allows developers to write JavaScript code that interacts with the filesystem. `fs` is one of the major features that distinguishes JavaScript (unable to access the filesystem) from Node.js (able to load `fs`). It is a fundamental, standard and important package in the Node.js ecosystem.

To test your understanding, try write a script which takes a [command line argument](http://stackoverflow.com/questions/4351521/how-to-pass-command-line-arguments-to-node-js) for a filename in the same directory, then creates a copy of the file with the original name and `.copy` added as an extension. For the provided filename, perhaps `foo.test`, after your script is run with `foo.test` as the command line argument, when you use `ls` you should see `foo.test` and `foo.test.copy`, with both files having the same data in them (you can test this with `cat [file]`).

A good starting point for this coding task is the documentation for [`fs.writeFile`](https://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_options_callback) and creating a working example. If you are struggling with this, an example that closely follows the documentation is provided [here](fs_writeFile_example.js).

[Solution for command line argument file copier](file_copier_solution.js):

Finally, read and complete the ["Coding Tasks"](coding_tasks.md) for this lesson.

## Reflect: Self-asses

Go to the "Objectives" section of this README. Go through each one and ask yourself:

- Have I completed this objective?
- What concrete evidence do I have that I've completed the objective?

Go to the "Key Terms" section of this README. For each word, ask yourself:

- What is my explanation for this term?

If you haven't completed an objective, or you can't define a term, take a few minutes to try to fill in any gaps.

## Reflect: Ask new questions

What new questions do you have now that you've gone through this exercise?

List at least 4 here:

1. 
1. 
1. 
1. 