import { createServer } from 'http'
import { parse } from 'url';
import { addService, substractService, multiplyService, divisionService } from './calculator.service';

const server = createServer((req, res) => {
    const url = parse(req.url)
    switch (url.pathname) {
        case '/add':
            addService(req, res)
            break;
        case '/substract':
            substractService(req, res)
            break;
        case '/multiply':
            multiplyService(req, res)
            break;
        case '/division':
            divisionService(req, res)
            break;
        default:
            res.statusCode = 404
            res.end()
    }
})

server.listen(3000)