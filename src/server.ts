import { createServer } from 'http';
import { parse } from "url";
import { calculatorService } from "./calculator.service";

const server = createServer((req, res) => {
    const url = parse(req.url);
    switch(url.pathname){
        case "/tambah": calculatorService(req, res);
        break;
        case "/kurang": calculatorService(req, res);
        break;
        case "/kali": calculatorService(req, res);
        break;
        case "/bagi": calculatorService(req, res);
        break;
        default: res.statusCode = 404; res.end();
    }
    // if(url.pathname){
    //     calculatorService(req, res);
    // }
    // else{
    //     res.statusCode = 404; res.end()
    // }
});

server.listen(3000);