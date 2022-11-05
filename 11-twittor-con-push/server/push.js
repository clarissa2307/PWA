const fs = require('./vapid.json');

module.exports.getKey = () => {
    return  vapid.publicKey;
};