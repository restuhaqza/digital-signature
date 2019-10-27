var fs = require('fs')
var {setPrivateKey, getPrivateKey, setPublicKey, getPublicKey, createSign, verifySign} = require('..')


var privateKey = fs.readFileSync(__dirname + '/example-key/pkcs8_rsa_private_key.pem', 'utf-8')
var publicKey = fs.readFileSync(__dirname + '/example-key/rsa_public_key.pem', 'utf-8')

describe('Setter and Getter Private Key', ()=>{
    describe('arguments', ()=>{
        it('set private key', (done)=>{
            setPrivateKey(privateKey)
            done()
        })

        it('get private key', (done)=>{
            let data = getPrivateKey()
            if(data != null || data != undefined){
                done()
            }
        })
    })
})

describe('Setter and Getter Public Key', ()=>{
    describe('arguments', ()=>{
        it('set public key', (done)=>{
            setPublicKey(publicKey)
            done()
        })

        it('get public key', (done)=>{
            let data = getPublicKey()
            if(data != null || data != undefined){
                done()
            }
        })
    })
})

describe('Create digital signature : createSign()', ()=>{
    describe('should be create a digital signature from a message `hello world`', ()=>{
        it('create digital signature', (done)=>{
            const text = createSign('hello world')
            if(text != null && typeof(text) == 'string'){
                done()
            }
        })
    })
})

describe('Verify digital signature verifySign()', ()=>{
    describe('should be verify a digital signature from a message `hello world`', ()=>{
        it('verify digital signature', (done)=>{
            const condition = verifySign('hello world', createSign('hello world'))
            if(condition) {
                done()
            }
        })
    })
})