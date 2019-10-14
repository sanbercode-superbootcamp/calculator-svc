import { IncomingMessage, ServerResponse } from "http";
import { parse } from 'url';
import { add } from "./calculator";

export function addService(req: IncomingMessage, res: ServerResponse) {
    //parsing request
    const url = parse(req.url, true);
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
    const result = add(n1, n2);
    //encode result
    const output = {
        result: result
    };
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(output));
    res.end();
}