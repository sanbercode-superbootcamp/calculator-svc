import { ServerResponse, IncomingMessage } from "http";
import { parse } from "url";
import { tambah, kurang, kali, bagi } from './calculator';
export function calculatorService(req: IncomingMessage, res: ServerResponse){
    //paring request
    const url = parse(req.url, true);
    const query = url.query;
    //if n1 & n2 harus ada
    if (!query["n1"] || !query["n2"]){
        res.statusCode = 400;
        res.end();
        return;
    }
    
    //n1 & n2 harus angka
    const n1 = parseInt(query["n1"] as string, 10);
    const n2 = parseInt(query["n2"] as string, 10);
    if(isNaN(n1) || isNaN(n2)){
        res.statusCode = 400;
        res.end();
        return;
    }

    //switch case operator
    console.log(url.pathname);
    let n3 = null;
    switch(url.pathname){
    case "/tambah": n3 = tambah(n1, n2);
    break;
    case "/kurang": n3 = kurang(n1, n2);
    break;
    case "/kali": n3 = kali(n1, n2);
    break;
    case "/bagi": n3 = bagi(n1, n2);
    break;
    }

    //encode reuslt

    // console.log(url.query);
    res.end(n3.toString());
}