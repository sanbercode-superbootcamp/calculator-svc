import { IncomingMessage, ServerResponse } from "http";
import { parse } from 'url';
import { plus, minus, multiply, divide } from "./calculator";

export function service(req: IncomingMessage, res: ServerResponse) {
    //parsing request
    const url = parse(req.url, true);
    const pathName = url.pathname;
    const query = url.query;
    
    // n1 & n2 validation 
    if(!query['n1'] || !query['n2']) {
        res.statusCode = 400;
        res.end();
        return;
    }
    //n1 & n2 must be number
    const n1 = parseInt(query['n1'] as string, 10);
    const n2 = parseInt(query['n2'] as string, 10);
    if(isNaN(n1) || isNaN(n2)){
        res.statusCode = 400;
        res.end();
        return;
    }

    //add business logic
    let result;
    switch(pathName){
        case '/plus':
            result = plus(n1, n2);
            break;
        case '/minus':
            result = minus(n1, n2);
            break
        case '/multiply':
            result = multiply(n1, n2);
            break
        case '/divide':
            result = divide(n1, n2);
            break
        default:
            res.statusCode = 404;
            res.end();
    }
    //encode result
    const output = {
        result: result
    };
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(output));
    res.end();
}