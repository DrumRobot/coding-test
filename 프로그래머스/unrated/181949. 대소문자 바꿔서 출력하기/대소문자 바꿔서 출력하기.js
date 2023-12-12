const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = Array.from(line);
}).on('close',function(){
    console.log(input.map( (v) => {
        if (v.match(/[a-z]/)) {
            return v.toUpperCase();
        } else {
            return v.toLowerCase();
        }
    }).join(''));
});
