import { IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import { add } from './calculator'

export function addService(req: IncomingMessage, res: ServerResponse){
    //parsing request
    const url = parse(req.url, true)
    const query = url.query
    console.log('query : ',query)
    console.log(query['n1'], query['n2'])
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
    console.log(n1, n2)

    const n3 =  add(n1, n2)

    const output = {
        result: n3
    }
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(output))
    res.end()
}