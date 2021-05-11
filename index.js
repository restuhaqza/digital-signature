var crypto = require("crypto");

class Digital_Signature{
  constructor(){
    this.private_key;
    this.public_key;
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

  async generateNewKeyPair(_callback = null){
    await crypto.generateKeyPair('rsa', {
      modulusLength: 1024,
      publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
      },
      privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem'
      }
    }, (err, publicKey, privateKey) => {
      if (err) throw err;
      this.setPrivateKey(privateKey.toString());
      this.setPublicKey(publicKey.toString());
      if (_callback != null){_callback(err, publicKey, privateKey);}
    });
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