var crypto = require("crypto");

class Digital_Signature{
  constructor(){
    this.private_key;
    this.public_key;
  }

  /**
   * Sets private key
   * @param {string} privateKey - Value to set the private key to.
  */
  setPrivateKey(privateKey) {
    this.private_key = privateKey;
  }

  /**
  * Returns private key
  * @returns {string} private_key
  */
  getPrivateKey() {
    return this.private_key;
  }

  /**
   * Sets public key
   * @param {string} publicKey - Value to set the public key to.
  */
  setPublicKey(publicKey) {
    this.public_key = publicKey;
  }

  /**
  * Returns private key
  * @returns {string} publick_key 
  */
  getPublicKey() {
    return this.public_key;
  }

  /**
   * Generates a new pair of RSA keys
   * Automatically assigns generated keys to constructor key variables.
   * @param {function} _callback - Optional callback function. Takes err, publicKey, privateKey as parameters. 
  */
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

  /**
   * Signs a message using the private key. 
   * @param {string} message - String to sign with publc key. 
   * @returns {string} signature - Signed message. 
  */
  createSign(message) {
    const signer = crypto.createSign("sha256");
    signer.update(message);
    signer.end();
  
    const signature = signer.sign(this.getPrivateKey(), "base64");
    return signature;
  }

  /**
   * Verifies a signed message using the signer's public key. 
   * @param {string} message - A signed message.
   * @param {string} signature - The signature assosciated with the signed message. 
   * @returns {boolean} verified - True/false
  */
  verifySign(message, signature) {
    const verifier = crypto.createVerify("sha256");
    verifier.update(message);
    verifier.end();
  
    const verified = verifier.verify(this.getPublicKey(), signature, "base64");
    return verified;
  }
};

module.exports = Digital_Signature;