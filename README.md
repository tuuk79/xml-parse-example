This sample project shows xml parsing using built-in NodeJS functionality.

Gotchas:
The part that might get you is that you want to use a simple 'fs' like in the below snippet.

var fs = require('fs');

However is you are not building a Node app you don't get this for free.  You have to find an npm package of some sort to be able to read and parse a simple xml file.  My advice is to use Node and its built-in capabilities.
