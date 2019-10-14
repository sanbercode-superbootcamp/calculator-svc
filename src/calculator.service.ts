import { IncomingMessage, ServerResponse } from "http";
import { parse } from "url";
import { url } from "inspector";
import { add, minus, multiply, divide } from "./calculator";
//endpoint dari calculator.ts

export function addService(req: IncomingMessage, res: ServerResponse) {
    //passing argument
    const url = parse(req.url, true);
    const query = url.query;
    const operator = url.pathname;

    if (isQueryValid(query)) {
        let n1 = parseInt(query['n1'] as string, 10);
        let n2 = parseInt(query['n2'] as string, 10);

        const n3 = add(n1, n2);
        const output = {
            result: n3
        }
        res.setHeader("ContentType", "application/json"); //res.writeHead(200, { "ContentType": "application/json" });
        res.write(JSON.stringify(output));
        res.end();
    } else {
        res.statusCode = 400; //error selalu dihandling
        res.end();
    }
}

export function minusService(req: IncomingMessage, res: ServerResponse) {
    //passing argument
    const url = parse(req.url, true);
    const query = url.query;
    const operator = url.pathname;

    if (isQueryValid(query)) {
        let n1 = parseInt(query['n1'] as string, 10);
        let n2 = parseInt(query['n2'] as string, 10);

        const n3 = minus(n1, n2);
        const output = {
            result: n3
        }
        res.setHeader("ContentType", "application/json"); //res.writeHead(200, { "ContentType": "application/json" });
        res.write(JSON.stringify(output));
        res.end();
    } else {
        res.statusCode = 400; //error selalu dihandling
        res.end();
    }
}

export function multiplyService(req: IncomingMessage, res: ServerResponse) {
    //passing argument
    const url = parse(req.url, true);
    const query = url.query;
    const operator = url.pathname;

    if (isQueryValid(query)) {
        let n1 = parseInt(query['n1'] as string, 10);
        let n2 = parseInt(query['n2'] as string, 10);

        const n3 = multiply(n1, n2);
        const output = {
            result: n3
        }
        res.setHeader("ContentType", "application/json"); //res.writeHead(200, { "ContentType": "application/json" });
        res.write(JSON.stringify(output));
        res.end();
    } else {
        res.statusCode = 400; //error selalu dihandling
        res.end();
    }
}

export function divideService(req: IncomingMessage, res: ServerResponse) {
    //passing argument
    const url = parse(req.url, true);
    const query = url.query;
    const operator = url.pathname;

    if (isQueryValid(query)) {
        let n1 = parseInt(query['n1'] as string, 10);
        let n2 = parseInt(query['n2'] as string, 10);

        const n3 = divide(n1, n2);
        const output = {
            result: n3
        }
        res.setHeader("ContentType", "application/json"); //res.writeHead(200, { "ContentType": "application/json" });
        res.write(JSON.stringify(output));
        res.end();
    } else {
        res.statusCode = 400; //error selalu dihandling
        res.end();
    }
}


function isQueryValid(query) {
    //cek apa ada dua angka di querynya
    let valid = true;
    if (!query['n1'] || !query['n2']) {
        valid = false;
    }
    //cek apa angkanya valid
    let n1 = parseInt(query['n1'] as string, 10);
    let n2 = parseInt(query['n2'] as string, 10);
    if (isNaN(n1) || isNaN(n2)) {
        valid = false;
    }
    return valid;
}