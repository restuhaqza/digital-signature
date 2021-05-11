var fs = require("fs")
var Digital_Signature = require("..")
var digitalSignature = new Digital_Signature();

var privateKey = fs.readFileSync(
  __dirname + "/example-key/pkcs8_rsa_private_key.pem",
  "utf-8"
)
var publicKey = fs.readFileSync(
  __dirname + "/example-key/rsa_public_key.pem",
  "utf-8"
)

describe("Create new key pair through class constructor", () => {
  describe("should return a new pair of usable private/public RSA keys", () => {
    it("create key pair", done => {
      digitalSignature.generateNewKeyPair(() => {done()})
      //done()
    })

    it("Attempt to sign using new key pair", done => {
      digitalSignature.generateNewKeyPair(() =>{
        const text = digitalSignature.createSign("hello world")
        if (text != null && typeof text == "string") {
          done()
        }
      })
    })
  })
})

describe("Setter and Getter Private Key", () => {
  describe("arguments", () => {
    it("set private key", done => {
      digitalSignature.setPrivateKey(privateKey)
      done()
    })

    it("get private key", done => {
      let data = digitalSignature.getPrivateKey()
      if (data != null || data != undefined) {
        done()
      }
    })
  })
})

describe("Setter and Getter Public Key", () => {
  describe("arguments", () => {
    it("set public key", done => {
      digitalSignature.setPublicKey(publicKey)
      done()
    })

    it("get public key", done => {
      let data = digitalSignature.getPublicKey()
      if (data != null || data != undefined) {
        done()
      }
    })
  })
})

describe("Create digital signature : createSign()", () => {
  describe("should be create a digital signature from a message `hello world`", () => {
    it("create digital signature", done => {
      const text = digitalSignature.createSign("hello world")
      if (text != null && typeof text == "string") {
        done()
      }
    })
  })
})

describe("Verify digital signature verifySign()", () => {
  describe("should be verify a digital signature from a message `hello world`", () => {
    it("verify digital signature", done => {
      const condition = digitalSignature.verifySign("hello world", digitalSignature.createSign("hello world"))
      if (condition) {
        done()
      }
    })
  })
})
