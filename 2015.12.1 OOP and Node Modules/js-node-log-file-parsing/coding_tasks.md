# Coding Tasks

Suppose you are a Junior Developer at a firm with good deployment practices and an interest in [DevOps](https://en.wikipedia.org/wiki/DevOps). Being such an organization, you are interested in implementing a system which automatically notifies your team of any spikes in certain application log levels.

In order to better understand the larger problem (_think:_ Polyá's method), your manager tells you to complete the following tasks:

  * Write a Node.js script should parse the provided log file (`data/log.log`) and `console.log` the answers to the following questions (including the question text):

    * What are all the dates the log covers?
    * For each date, how many log messages were added?
    * How many log messages were there of each level for each day (e.g. `DEBUG`, `INFO`, `WARN`)?

  Sample usage and output looks like:

    ```
    > node logParser.js
    * What are all the dates the log covers?
    2014-05-10
    2014-05-11
    2014-05-12
    2014-05-13
    2014-05-14
    2014-05-15
    2014-05-16

    * For each date, how many log messages were added?
    2014-05-10 205
    2014-05-11 264
    2014-05-12 326
    2014-05-13 271
    2014-05-14 365
    2014-05-15 324
    2014-05-16 348

    * How many log messages were there of each level for each day (e.g. `DEBUG`, `INFO`, `WARN`)?
    2014-05-10 DEBUG  74
    2014-05-10  INFO  75
    2014-05-10  WARN  56
    ...
    ```

##### Where to start?

Begin by applying Polyà's method to the first problem, "What are all the dates the log covers?"

  1. Make sure you can explain what the problem is in your own words. Pretend you are explaining it to somebody who has very little understanding of the task at hand.
  1. One experiment might be to write code that displays a list of all of the dates, then advance to producing the unique list. How will this work with Node.js?
  1. [Solve the problem!](http://4.bp.blogspot.com/-4OJAFEipqwI/VH-mXTylY3I/AAAAAAAAISM/E4Ur0uesVmM/s1600/You%2Bgot%2Bthis.jpg)
  1. The most important step; reflect on your solution. Pretend you are not yourself and read through your code. Ask yourself, would you want to work with this developer?

#### Challenge Tasks

For an added challenge, parse the log file, breaking it into the various messages it contains and provide counts for the words in those messages. For example (using the sample log file data above), a message would be "transition sticky bandwidth" which would break into a count like `{transition: 1, sticky: 1, bandwidth: 1}` and the goal is to provide a sorted list of all of these words from the log messages, including a frequency count.

For an added, added challenge, write the code for handling the lines of the text file two different ways.

For an added, added, added challenge, use Jasmine (recall, `jasmine init` will set up the scaffold) to write tests for your code.

#### Setup

* Fork & Clone

##### Additional information

You get log files that are in this format:

    W, [2014-05-10T13:49:19.049260 #83516]  WARN -- : deliver B2C systems
    W, [2014-05-10T13:49:19.049408 #83516]  WARN -- : transition sticky bandwidth

That is...

    [log level char], [<date> #<processid>]  <log level> -- : <message>

#### Reflection Questions

1. How did you choose to structure your code? Did you write one file, three, ten files? Did you structure your code as just functions? Objects? Justify your decisions and reflect on if they were good ones.

1. What part of this was the most challenging?

1. Why are log files useful?

1. What is Polyà's method?
