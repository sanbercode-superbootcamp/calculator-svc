const { expect } = require('chai')
const { add } = require('../dist/@types/calculator')

describe('Calculator', function(){
    describe('Plus', function(){
        it('should do operation 1+2=3', function(){
            let hitung = add(1, 2)
            expect(hitung).to.be.eq(3)
        })
        it('should do operation 2+3=5', function(){
            let hitung = add(2, 3)
            expect(hitung).to.be.eq(5)
        })
    })
})