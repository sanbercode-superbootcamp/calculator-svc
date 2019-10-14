import { expect } from 'chai';
import { get } from 'request-promise-native';
import { StatusCodeError } from 'request-promise-native/errors';

describe('calculator server', function () {
    this.timeout(5000);
    this.slow(5000);
    describe('plus service', function () {
        it('harusnya bisa melakukan operasi pertambahan', async function () {
            const result = await get('http://localhost:3000/plus?num1=4&num2=4', { json: true });
            expect(result).to.be.deep.eq({
                result: 8
            });

        });

        it("harusnya error ketika input bukan angka", async function () {
            let error = null;
            try {
                await get("http://localhost:3000/plus?num1=4&num2=hahaha", { json: true });
            } catch (err) {
                error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        });

        it("harusnya error ketika input tidak ada", async function () {
            let error = null;
            try {
                await get("http://localhost:3000/plus", { json: true });
            } catch (err) {
                error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        });
    });

    describe('min service', function () {
        it('harusnya bisa melakukan operasi pengurangan', async function () {
            const result = await get('http://localhost:3000/min?num1=4&num2=4', { json: true });
            expect(result).to.be.deep.eq({
                result: 0
            });

        });

        it("harusnya error ketika input bukan angka", async function () {
            let error = null;
            try {
                await get("http://localhost:3000/min?num1=4&num2=hahaha", { json: true });
            } catch (err) {
                error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        });

        it("harusnya error ketika input tidak ada", async function () {
            let error = null;
            try {
                await get("http://localhost:3000/min", { json: true });
            } catch (err) {
                error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        });
    });

    describe('divide service', function () {
        it('harusnya bisa melakukan operasi pembagian', async function () {
            const result = await get('http://localhost:3000/divide?num1=4&num2=4', { json: true });
            expect(result).to.be.deep.eq({
                result: 1
            });

        });

        it("harusnya error ketika input bukan angka", async function () {
            let error = null;
            try {
                await get("http://localhost:3000/divide?num1=4&num2=hahaha", { json: true });
            } catch (err) {
                error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        });

        it("harusnya error ketika input tidak ada", async function () {
            let error = null;
            try {
                await get("http://localhost:3000/divide", { json: true });
            } catch (err) {
                error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        });
    });

    describe('multiply service', function () {
        it('harusnya bisa melakukan operasi perkalian', async function () {
            const result = await get('http://localhost:3000/multiply?num1=4&num2=4', { json: true });
            expect(result).to.be.deep.eq({
                result: 16
            });

        });

        it("harusnya error ketika input bukan angka", async function () {
            let error = null;
            try {
                await get("http://localhost:3000/multiply?num1=4&num2=hahaha", { json: true });
            } catch (err) {
                error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        });

        it("harusnya error ketika input tidak ada", async function () {
            let error = null;
            try {
                await get("http://localhost:3000/multiply", { json: true });
            } catch (err) {
                error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        });
    });
})