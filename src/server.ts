import { createServer } from 'http';
import { parse } from 'url';
import { addService, minusService, multiService, divService } from './calculator.service';

const server = createServer((req, res) => {
    const url = parse(req.url);
    switch(url.pathname) {
        case '/add':
            addService(req, res);
            break;
        case '/minus':
            minusService(req, res);
            break;
        case '/multi':
            multiService(req, res);
            break;
        case '/div':
            divService(req, res);
            break;
        default:
            res.statusCode = 404;
            res.end();
            break;
    }
});

server.listen(3000);