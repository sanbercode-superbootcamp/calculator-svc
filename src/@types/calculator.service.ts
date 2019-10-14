import { IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import { add, substract, multiply, division } from './calculator'

export function addService(req: IncomingMessage, res: ServerResponse){
    //parsing request
    const url = parse(req.url, true)
    const query = url.query

    if(!query['n1'] || !query['n2']){
        res.statusCode = 400
        res.end('perlu query')
        return
    }

    //n1 & n2 harus angka
    const n1 = parseInt(query['n1'] as string, 10)
    const n2 = parseInt(query['n2'] as string, 10)

    if(isNaN(n1) || isNaN(n2)){
        res.statusCode=400
        res.end('isNaN')
        return
    }

    const n3 =  add(n1, n2)

    const output = {
        result: n3
    }

    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(output))
    res.end()
}

export function substractService(req: IncomingMessage, res: ServerResponse){
    //parsing request
    const url = parse(req.url, true)
    const query = url.query

    if(!query['n1'] || !query['n2']){
        res.statusCode = 400
        res.end('perlu query')
        return
    }
    //n1 & n2 harus angka
    const n1 = parseInt(query['n1'] as string, 10)
    const n2 = parseInt(query['n2'] as string, 10)

    if(isNaN(n1) || isNaN(n2)){
        res.statusCode=400
        res.end('isNaN')
        return
    }

    const n3 =  substract(n1, n2)

    const output = {
        result: n3
    }
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(output))
    res.end()
}

export function multiplyService(req: IncomingMessage, res: ServerResponse){
    //parsing request
    const url = parse(req.url, true)
    const query = url.query

    if(!query['n1'] || !query['n2']){
        res.statusCode = 400
        res.end('perlu query')
        return
    }
    //n1 & n2 harus angka
    const n1 = parseInt(query['n1'] as string, 10)
    const n2 = parseInt(query['n2'] as string, 10)

    if(isNaN(n1) || isNaN(n2)){
        res.statusCode=400
        res.end('isNaN')
        return
    }

    const n3 =  multiply(n1, n2)

    const output = {
        result: n3
    }
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(output))
    res.end()
}

export function divisionService(req: IncomingMessage, res: ServerResponse){
    //parsing request
    const url = parse(req.url, true)
    const query = url.query

    if(!query['n1'] || !query['n2']){
        res.statusCode = 400
        res.end('perlu query')
        return
    }
    //n1 & n2 harus angka
    const n1 = parseInt(query['n1'] as string, 10)
    const n2 = parseInt(query['n2'] as string, 10)

    if(isNaN(n1) || isNaN(n2)){
        res.statusCode=400
        res.end('isNaN')
        return
    }

    const n3 =  division(n1, n2)

    const output = {
        result: n3
    }
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(output))
    res.end()
}