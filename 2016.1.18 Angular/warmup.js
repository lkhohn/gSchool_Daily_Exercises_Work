// https://www.hackerrank.com/challenges/make-it-anagram
//
// Alice recently started learning about cryptography and found that anagrams are very useful.
// Two strings are anagrams of each other if they have same character set and same length.
// For example strings "bacdc" and "dcbac" are anagrams, while strings "bacdc" and "dcbad" are not.
//
// Alice decides on an encryption scheme involving 2 large strings where encryption is dependent on the
// minimum number of character deletions required to make the two strings anagrams. She need your help in finding out this number.
//
// Given two strings (they can be of same or different length) help her in
// finding out the minimum number of character deletions required to make two strings anagrams. Any characters can be deleted from any of the strings.
//
// Input Format
// Two lines each containing a string.
//
// Constraints
// 1 <= Length of A,B <= 10000
// A and B will only consist of lowercase latin letter.
//
// Output Format
// A single integer which is the number of character deletions.
//
// Sample Input #00:
//
// cde
// abc
// Sample Output #00:
//
// 4
// Explanation #00:
// We need to delete 4 characters to make both strings anagram i.e. 'd' and 'e' from first string and 'b' and 'a' from second string.



function processData(input) {
    //Enter your code here
    // look at the input and read the letters
    // determine if there are letters that do not match
    // if the letters do not match, then they are deleted
    // if they do match, then they are pushed to the new anagram Array
    var anagram = [];
    var splitWord = input.split('\n');
    var firstWord = splitWord[0];
    var secondWord = splitWord[1];
    for(var i=0; i<firstWord.length; i++){
        var splitFirstWord = firstWord[i]
        var newFirstWord = splitFirstWord.split('').sort().join('');
        for(var j=0; j<secondWord.length; j++){
         var splitSecondWord = secondWord[j]
         var newSecondWord = splitSecondWord.split('').sort().join('');
            if(newFirstWord===newSecondWord){
                anagram.push(newFirstWord);
                anagram.push(newSecondWord);
                console.log(anagram);
            }
        }
    }
}

procesData('cde'+'\n'+ 'abc');
