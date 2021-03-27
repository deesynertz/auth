# auth

[
  "# 1: Installation",
  "# 2: In use",
  "# 3: More ",
  "## Author",
  "## license"
]

## what is it?

get prefer auth node module then foget abuot re-write it again

## Installation

`npm install @axetrixhub/auth --save`

Then .....

### in use

```const auth = require('@axetrixhub/auth');

  auth.sighIn(username, passwor).then((response) => {

    // do what you want to do using $response promose;
    
  }).catch (error => console.log(`Error: ${error.message}`));
```

### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

author: [deesynertz] ```<deesynertz@gmail.com>```
license: [MIT] (<https://choosealicense.com/licenses/mit/>)
