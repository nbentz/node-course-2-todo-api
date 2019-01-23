const {SHA256} = require('crypto-js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

let password = '123abc!';
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

let hashPassword = '$2a$10$tjN00lP0CHv3ef2IiYXFrOTzn5ZlfNnPblWApRrLnW12r46yYvq0O';
bcrypt.compare('123!', hashPassword, (err, res) => {
   
});

// let data = {
//     id: 10
// };

// let token = jwt.sign(data, '123abc');
// console.log(token);
// let vData = jwt.verify(token, '123abc');
// console.log(vData.id);
// let message = 'I am user number 3';
// let hash = SHA256(message).toString();
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
//     id: 4
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };


// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if(resultHash === token.hash){
//     console.log('Data was not changed.');
// }else {
//     console.log('Data was changed. Do not trust.');
// }