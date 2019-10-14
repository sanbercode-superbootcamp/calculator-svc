import { get } from 'request-promise-native';
import { StatusCodeError } from 'request-promise-native/errors';
import { expect } from 'chai';

describe('calculator server', function(){
    describe('add service', function(){
        this.timeout(5000);
        this.slow(5000);

        it('should do add operation', async function(){
            const result = await get('http://localhost:3000/add?n1=4&n2=3', { json: true});
            expect(result).to.be.deep.eq({
                result: 7
            });
        });

        it.only('should error when input is not number', async function(){
            let error = null;
            try{
                const result = await get('http://localhost:3000/add?n1=4&n2=hahas', { json: true});
            } catch(err){
                error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        });

        it.only('should error when no input', async function(){
            let error = null;
            try{
                const result = await get('http://localhost:3000/add', { json: true});
            } catch(err){
                error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(400);
        });

        it.only('should error when no endpoint', async function(){
            let error = null;
            try{
                const result = await get('http://localhost:3000/asdasdsadsad', { json: true});
            } catch(err){
                error = err;
            }
            expect(error).to.be.exist;
            expect(error).to.be.instanceOf(StatusCodeError);
            expect(error.statusCode).to.be.eq(404);
        });
    });
});