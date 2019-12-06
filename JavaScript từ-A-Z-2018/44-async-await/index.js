var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
            fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
            if (err) {
                reject(err); 
            } else {
                resolve(data);
            }
        })
    })
}

async function run() {
    var song1 = await readFilePromise('./song1.txt');
    var song2 = await readFilePromise('./song2.txt');
    var song3 = await readFilePromise('./song3.txt');
    // console.log(song1, song2, song3);
    return [song1, song2, song3];
}

run().then(function(values) {
    console.log(values);
});