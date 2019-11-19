# Digital Signature

Library for create and verify Digital Signature based on RSA-SHA256 algorithm.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install foobar.

```bash
npm install digital-signature
```

## Usage

```javascript

var {
  setPrivateKey,
  getPrivateKey,
  setPublicKey,
  getPublicKey,
  createSign,
  verifySign
} = require("digital-signature")


var privateKey = 'YOUR-PRIVATE-KEY'
var publicKey = 'YOUR-PUBLIC-KEY'


setPrivateKey(privateKey) //assign private key
getPrivateKey() //return private key
setPublicKey(publicKey) //assign public key
getPublicKey() return public key

const digitalSignature =  createSign('your data')

const isVerified = verifySign('your data', digitalSignature)// if valid will be return 'true' and if invalid will be return false



```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)