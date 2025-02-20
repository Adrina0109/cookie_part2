const jwt = require('jsonwebtoken');
const SECRET_KEY = 'adz@123';

const encrypt = (payload) => {
    try {
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); 
        return token;
    } catch (error) {
        console.error('Encryption failed:', error);
        return null;
    }
}
const decrypt = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded;
    } catch (error) {
        console.error('Decryption failed:', error);
        return null;
    }
}

module.exports = {
    encrypt,
    decrypt
};
