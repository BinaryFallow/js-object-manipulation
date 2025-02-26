const sculptureList = require('./data.js');
module.exports = Data.js;
const sculptureListLengths = sculptureList.map(sculpture => {
    let lengthObj = {};

    for (const key in sculpture) {
        if (typeof sculpture[key] === 'string') {
            lengthObj[key] = sculpture[key].length;
        }
    }
    return lengthObj;
});

console.log(sculptureListLengths);

module.exports = sculptureListLengths;
