import { IncomingMessage, ServerResponse } from "http";
import { parse } from "url";
import { plus, min, divide, multiply } from "./calculator"

export function plusService(req: IncomingMessage, res: ServerResponse) {
    // parsing request
    const url = parse(req.url, true);
    const query = url.query;
    if (!query['num1'] || !query['num2']) {
        console.log('if !query');

        res.statusCode = 400;
        res.end();
        return;
    }

    // get value of num1 & num2 from query
    const num1 = parseInt(query['num1'] as string, 10);
    const num2 = parseInt(query['num2'] as string, 10);

    if (isNaN(num1) || isNaN(num2)) {
        console.log('if isNan');

        res.statusCode = 400;
        res.end();
        return;
    }

    // result of calculator add operation
    const result = plus(num1, num2);
    const output = {
        result: result
    };

    res.setHeader('ContentType', 'application/json');
    res.write(JSON.stringify(output));
    res.end();
}

export function minService(req: IncomingMessage, res: ServerResponse) {
    // parsing request
    const url = parse(req.url, true);
    const query = url.query;
    if (!query['num1'] || !query['num2']) {
        res.statusCode = 400;
        res.end();
        return;
    }

    // get value of num1 & num2 from query
    const num1 = parseInt(query['num1'] as string, 10);
    const num2 = parseInt(query['num2'] as string, 10);

    if (isNaN(num1) || isNaN(num2)) {
        res.statusCode = 400;
        res.end();
        return;
    }

    // result of calculator add operation
    const result = min(num1, num2);
    const output = {
        result: result
    };

    res.setHeader('ContentType', 'application/json');
    res.write(JSON.stringify(output));
    res.end();
}

export function divideService(req: IncomingMessage, res: ServerResponse) {
    // parsing request
    const url = parse(req.url, true);
    const query = url.query;
    if (!query['num1'] || !query['num2']) {
        res.statusCode = 400;
        res.end();
        return;
    }

    // get value of num1 & num2 from query
    const num1 = parseInt(query['num1'] as string, 10);
    const num2 = parseInt(query['num2'] as string, 10);

    if (isNaN(num1) || isNaN(num2)) {
        res.statusCode = 400;
        res.end();
        return;
    }

    // result of calculator add operation
    const result = divide(num1, num2);
    const output = {
        result: result
    };

    res.setHeader('ContentType', 'application/json');
    res.write(JSON.stringify(output));
    res.end();
}

export function multiplyService(req: IncomingMessage, res: ServerResponse) {
    // parsing request
    const url = parse(req.url, true);
    const query = url.query;
    if (!query['num1'] || !query['num2']) {
        res.statusCode = 400;
        res.end();
        return;
    }

    // get value of num1 & num2 from query
    const num1 = parseInt(query['num1'] as string, 10);
    const num2 = parseInt(query['num2'] as string, 10);

    if (isNaN(num1) || isNaN(num2)) {
        res.statusCode = 400;
        res.end();
        return;
    }

    // result of calculator add operation
    const result = multiply(num1, num2);
    const output = {
        result: result
    };

    res.setHeader('ContentType', 'application/json');
    res.write(JSON.stringify(output));
    res.end();
}