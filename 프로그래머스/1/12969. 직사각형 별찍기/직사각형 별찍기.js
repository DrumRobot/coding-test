process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [a, b] = data.split(' ').filter(Number);
    for (let i = 0; i < b; i++) {  
        console.log('*'.repeat(a));
    }
});