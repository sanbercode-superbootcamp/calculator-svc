import { expect } from 'chai';
import { format } from "util";
import { add } from './calculator';

describe('calculator', function(){
    describe('add', function(){
        it('should execute add function', function(){
            expect(add(1,2)).to.be.eq(3);
        })
    })
})


