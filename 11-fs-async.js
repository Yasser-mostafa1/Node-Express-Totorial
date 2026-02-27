// First : Call the reqired methods from 'fs' module
const { readFile, writeFile } = require('fs');

    // 1- readFile function :
 /*
 - in this case we read 2 text files first.txt, second.txt located in the 'content' folder.
 - syntax: readFile('./path', format, callback function)
 */

    // ~ first file read
readFile(
    './content/first.txt', 'utf8',
    // this part calls : "callbacks" must be initialized with required function to handling any unexpected error.
    // and to return a result if it's clear.
     (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const first = result;

    // ~ second file read
        readFile(
            './content/second.txt', 'utf8', (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                const second = result;

    // 2- writeFile function :
    
    /*
    - createing new file by simply refering to the aimed path'./' and naming it by it's format.
    - or overriding an existing one
    - syntax: writeFile('./path', $ write, callback function)
    */
                writeFile(
                    // creating new text file in content folder named result-async
                    './content/result-async.txt'
                    // we've previousely read first.txt, second.txt files so let's use them!
                    // finally the benifit of assigned "result" in callback function of readFile method reaped its fruits!
                    , `Here is the result : ${first} , ${second}`
                    , (err, result) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        console.log(result);
                    }
                )
            }
        )
    }
)