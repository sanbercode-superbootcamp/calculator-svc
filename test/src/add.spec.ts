import { expect } from "chai";
import { get } from "request-promise-native";
import { StatusCodeError } from "request-promise-native/errors";

describe("calculator server", function(){
    describe("add service", function(){
        this.timeout(5000);
        this.slow(5000);
        it ("harusnya bisa melakukan tambah", async function(){
            const result = await get("http://localhost:3000/tambah?n1=4&n2=3", { json: true });
            expect(result).to.be.deep.eq({
                result: 7
            });
        });

        it("harusnya error ketika input bukan angka", async function(){
            let error = null;
            try{ 
                await get("http://localhost:3000/tambah?n1=4&n2=wdww", { json: true}); 
            } catch (err) {
                error = err;
                
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        });

        it("harusnya error ketika input tidak ada", async function(){
            let error = null;
            try {
              await get("http://localhost:3000/tambah", { json: true });
            } catch (err) {
              error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        });
      
        it("harusnya error ketika akses endpoint (path) tidak ada", async function() {
          let error = null;
          try {
            await get("http://localhost:3000/ajduaquajfkjabfka", { json: true });
          } catch (err) {
            error = err;
          }
          expect(error).to.be.exist;
          expect(error).to.be.instanceOf(StatusCodeError);
          expect(error.statusCode).to.be.eq(404);
        });

    });
});