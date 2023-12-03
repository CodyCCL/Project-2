const { User } = require('../models');
const bcrypt = require('bcrypt');

let userData = [];


init();
console.log(userData);
async function hashPass(pass) {
   var pass = await bcrypt.hash(pass, 10);
   return pass;
}

async function init() {
    userData.push(
    {
        Username: 'jbrowning',
        Password: await hashPass('jbrowning'),
        Email: 'j.browning527@gmail.com',
        CurrentWeight: 190,
        IdealWeight: 175
    });
}

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;