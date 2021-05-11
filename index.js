var crypto = require("crypto")

class Digital_Signature{
  generateNewKeyPair(callback){
    crypto.generateKeyPair('rsa', {
      modulusLength: 1024,
      publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
      },
      privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem'
      }
    }, callback);
  }

  constructor(generateNewKeyPair = false){
    this.private_key;
    this.public_key;
    if (generateNewKeyPair == true){
      this.generateNewKeyPair((err, publicKey, privateKey) =>{
        if (err) throw err;
        this.public_key = publicKey;
        this.private_key = privateKey;
      });
    }
  }

  setPrivateKey(value) {
    this.private_key = value;
  }

  getPrivateKey() {
    return this.private_key;
  }

  setPublicKey(value) {
    this.public_key = value;
  }

  getPublicKey() {
    return this.public_key;
  }

  createSign(message) {
    const signer = crypto.createSign("sha256");
    signer.update(message);
    signer.end();
  
    const signature = signer.sign(this.getPrivateKey(), "base64");
    return signature;
  }

  verifySign(message, signature) {
    const verifier = crypto.createVerify("sha256");
    verifier.update(message);
    verifier.end();
  
    const verified = verifier.verify(this.getPublicKey(), signature, "base64");
    return verified;
  }
};

module.exports = Digital_Signature;