import { createServer } from 'http';
import { parse } from 'url';
import { service } from './calculator-service';

const server = createServer((req, res) => {
    const url = parse(req.url);
    switch(url.pathname){
        case (url.pathname):
            service(req, res);
            break;
        default:
            res.statusCode = 400;
            res.end();
    }
});

server.listen(3000);
