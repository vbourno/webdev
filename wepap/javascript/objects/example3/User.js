const { readFileSync, writeFileSync } = require('fs');
const { it } = require('node:test');

module.exports.showOne = function(username) {
    let results = readFileSync('data.json', 'utf-8')

        let user = JSON.parse(results);
        //console.log(user.data)

        let item = user.data.find(val=>val.username === username)
        return item;
}

module.exports.showAll = function() {
    results = readFileSync('data.json', 'utf-8')
        return JSON.parse(results)
}

module.exports.remove = function(username) {
    let results = readFileSync('data.json', 'utf-8');
    let json = JSON.parse(results);
    json = json.data.filter(function(val) {
        return val.username !== username;
    })

        json = {
        "data": json
    }

    //console.log(">>", json);

    try {
    writeFileSync('data.json', JSON.stringify(json));  //, flag:'a+'}
    return { status: true, values: username }
    } catch(err) {
        console.log(err);
        return {status: false, values: username}
    }
}