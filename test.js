const { encrypt, decrypt } = require('./script');
const payload = { userId: 123, username: 'testUser' };
const token = encrypt(payload);
console.log('Generated Token:', token);
const decodedPayload = decrypt(token);
console.log('Decoded Payload:', decodedPayload);
