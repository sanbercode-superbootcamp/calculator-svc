import { expect } from 'chai';
import { plus, minus, multiply, divide } from './calculator';

describe('calculator', function(){
    describe('plus', function(){
        it('should execute plus function', function(){
            expect(plus(1,2)).to.be.eq(3);
        })
    })
    describe('minus', function(){
        it('should execute minus function', function(){
            expect(minus(5,2)).to.be.eq(3);
        })
    })
    describe('multiply', function(){
        it('should execute multiply function', function(){
            expect(multiply(1,2)).to.be.eq(2);
        })
    })
    describe('divided', function(){
        it('should execute divided function', function(){
            expect(divide(6,2)).to.be.eq(3);
        })
    })
})


