// Sync vs Async (Synchoronous vs. Asynchronous)
var fs = require('fs');

console.log('Start');
var song1 = fs.readFileSync('song1.txt', { encoding: 'utf8' });
console.log(song1);
var song2 = fs.readFileSync('song2.txt', { encoding: 'utf8' });
console.log(song2);
console.log('End');