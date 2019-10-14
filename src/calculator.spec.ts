import { expect } from 'chai';
import { add, minus, multi, div } from './calculator';

describe('calculator', function() {
    describe('add', function() {
        it('harusnya melakukan fungsi tambah', function() {
            expect(add(6,2)).to.be.eq(8);
        });
    });

    describe('minus', function() {
        it('harusnya melakukan fungsi pengurangan', function() {
            expect(minus(6,2)).to.be.eq(4);
        })
    });

    describe('multi', function() {
        it('harusnya melakukan fungsi perkalian', function() {
            expect(multi(6,2)).to.be.eq(12);
        })
    })

    describe('div', function() {
        it('harusnya melakukan fungsi pembagian', function() {
            expect(div(6,2)).to.be.eq(3);
        })
    })
});
