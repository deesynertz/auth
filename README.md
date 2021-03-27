## auth


## what is it?

get prefer auth node module then foget abuot re-write it again


## Installation
`npm install @axetrixhub/auth --save`


Then .....


### in use
```
const auth = require('@axetrixhub/auth');

  auth.sighIn(username, passwor).then((response) => {

    // do what you want to do using $response promose;
    
  }).catch (error => console.log(`Error: ${error.message}`));
  
```
