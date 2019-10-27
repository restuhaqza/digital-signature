var crypto = require("crypto")

var private_key
var public_key

function setPrivateKey(value) {
  private_key = value
}

function getPrivateKey(value) {
  return private_key
}

function setPublicKey(value) {
  public_key = value
}

function getPublicKey(value) {
  return public_key
}

function createSign(message) {
  const signer = crypto.createSign("sha256")
  signer.update(message)
  signer.end()

  const signature = signer.sign(getPrivateKey(), "base64")
  return signature
}

function verifySign(message, signature) {
  const verifier = crypto.createVerify("sha256")
  verifier.update(message)
  verifier.end()

  const verified = verifier.verify(getPublicKey(), signature, "base64")
  return verified
}

module.exports = {
  setPrivateKey,
  getPrivateKey,
  setPublicKey,
  getPublicKey,
  createSign,
  verifySign
}
