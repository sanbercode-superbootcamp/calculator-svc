import { IncomingMessage, ServerResponse } from "http";
import { parse } from 'url';
import { add } from './calculator';

export function addService(req: IncomingMessage, res: ServerResponse) {
    // PARSING REQUEST
    const url = parse(req.url, true);
    const query = url.query;
    
    // ERROR DI HANDLING DI AWAL (n1 & n2 harus ada)
    if(!query['n1']  || !query['n2']) {
        res.statusCode = 400;
        res.end()
        return;
    }

    let n1 = parseInt(query['n1'] as string, 10); // RADIX / BASIS DARI NILAI
    let n2 = parseInt(query['n2'] as string, 10); // RADIX / BASIS DARI NILAI
    if(isNaN(n1) || isNaN(n2)) {
        res.statusCode = 400;
        res.end();
        return;
    }

    // ADD
    const n3 = add(n1, n2);

    const output = {
        result: n3
    }
    res.setHeader("Content-type", 'json');
    res.write(JSON.stringify(output));
    res.end();
}