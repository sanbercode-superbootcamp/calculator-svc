import { expect } from "chai";
import { plus, min, divide, multiply } from "./calculator";

describe('calculator', function () {
    describe('plus', function () {
        it('harusnya fungsi tambah bisa', function () {
            expect(plus(4, 4)).to.be.eq(8);
        })
    });

    describe('min', function () {
        it('harusnya fungsi kurang bisa', function () {
            expect(min(4, 4)).to.be.eq(0);
        })
    });

    describe('divide', function () {
        it('harusnya fungsi bagi bisa', function () {
            expect(divide(4, 4)).to.be.eq(1);
        })
    });

    describe('multiply', function () {
        it('harusnya fungsi kali bisa', function () {
            expect(multiply(4, 4)).to.be.eq(16);
        })
    });
})