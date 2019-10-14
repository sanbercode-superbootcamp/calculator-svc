import { createServer } from "http";
import { url } from "inspector";
import { parse } from "url";
import { addService, minusService, multiplyService, divideService } from "./calculator.service";

const server = createServer((req, res) => {
    const url = parse(req.url);
    switch (url.pathname) {
        case "/add":
            addService(req, res);
            break;
        case "/minus":
            minusService(req, res);
            break;
        case "/multiply":
            multiplyService(req, res);
            break;
        case "/divide":
            divideService(req, res);
            break;
        default:
            res.statusCode = 404;
            res.end();
    }
});

server.listen(8080);