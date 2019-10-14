import { expect } from "chai";
import { get } from "request-promise-native";
import { RequestError, StatusCodeError } from "request-promise-native/errors";

describe("calculator server alai", function () {
    describe("add service", function () {
        this.timeout(5000);
        this.slow(5000);

        it("harusnya nambahin biasa euy", async function () {
            const result = await get('http://localhost:8080/add?n1=1&n2=3', { json: true })
            expect(result).of.be.deep.eq({ result: 4 });
        });

        it("harusnya ngurangin biasa euy", async function () {
            const result = await get('http://localhost:8080/minus?n1=1&n2=3', { json: true })
            expect(result).of.be.deep.eq({ result: -2 });
        });

        it("harusnya ngaliin biasa euy", async function () {
            const result = await get('http://localhost:8080/multiply?n1=1&n2=3', { json: true })
            expect(result).of.be.deep.eq({ result: 3 });
        });

        it("harusnya ngbagi biasa euy", async function () {
            const result = await get('http://localhost:8080/divide?n1=6&n2=3', { json: true })
            expect(result).of.be.deep.eq({ result: 2 });
        });

        it("harusnya error bad request", async function () {
            let error = null;
            try {
                await get('http://localhost:8080/add?n1=1&n2=haha', { json: true })
            } catch (err) {
                error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        });

        it("harusnya error request ga ada", async function () {
            let error = null;
            try {
                await get('http://localhost:8080/asdcasd', { json: true })
            } catch (err) {
                error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(404);
        });
    })
});
