const { spawn } = require('child_process');
const http = require('http');

http.createServer((req, res) => {
    const ls = spawn('tree', ['/']);

    ls.stdout.pipe(res);

    ls.on('close', () => {
        res.end();
    })

    res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF-8' });

}).listen(9000);
