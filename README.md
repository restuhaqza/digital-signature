# Digital Signature

Library for creating and verifying Digital Signatures based on the RSA-SHA256 algorithm.

## Installation

Using [npm](https://www.npmjs.com/):

```bash
npm install digital-signature
```

## Usage

```javascript

const Digital_Signature = require("digital-signature")
var digitalSignature = new Digital_Signature()

//From existing key pair
var privateKey = 'YOUR-PRIVATE-KEY'
var publicKey = 'YOUR-PUBLIC-KEY'
setPrivateKey(privateKey) //assign private key
getPrivateKey() //return private key
setPublicKey(publicKey) //assign public key
getPublicKey() return public key

//... or create new keys
digitalSignature.generateNewKeyPair((err, publicKey, privateKey) =>{
  // Optional callback function
    // Do something here
})

const signedData =  createSign('your data')
const isVerified = verifySign('your data', signedData) // returns true if valid
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)