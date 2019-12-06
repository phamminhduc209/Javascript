// setTimeout
// clearTimeout
// setTimeout
// timer

var done = function() {
    console.log('Finish');
}

console.log('Start');
// setTimeout(done, 1000);
var timeoutId = setTimeout(done, 1000);
console.log('Done');
clearTimeout(timeoutId);

setTimeout(function doAfter() {
    console.log('Finish');
}, 1000);