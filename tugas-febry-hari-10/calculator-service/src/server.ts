import { createServer } from "http";
import { parse } from 'url';
import { plusService, minService, divideService, multiplyService } from './calculator-service'
const server = createServer((req, res) => {
    const url = parse(req.url, true);

    switch (url.pathname) {
        case '/plus':
            plusService(req, res);
            break;
        case '/min':
            minService(req, res);
            break;
        case '/divide':
            divideService(req, res);
            break;
        case '/multiply':
            multiplyService(req, res);
            break;

        default:
            res.statusCode = 404;
            res.end();
            break;
    }
});

server.listen(3000);

server.on('listening', () => {
    console.log('listen on 3000');
});