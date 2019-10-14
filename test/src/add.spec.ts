import { expect } from 'chai'
import { get  } from 'request-promise-native'
import { StatusCodeError  } from 'request-promise-native/errors'



describe('Calculator server', function(){
    describe('add service', function(){
        this.timeout(5000)
        this.slow(5000)
        it('should do operation', async function(){
            const result = await get('http://localhost:3000/add?n1=4&n2=4', {
                json : true
            })
            expect(result).to.be.deep.eq({
                result: 8
            })
        })
        it('should get error when not number', async function(){
            let error 
            try{
                await get('http://localhost:3000/add?n1=4&n2=hei', {
                json : true
            })
            }catch(err){
                error = err
            }
            expect(error).to.be.exist
            if(error instanceof StatusCodeError){
                expect(error.statusCode).to.be.eq(400)
            }
        })
        it('should get error when empty', async function(){
            let error 
            try{
                await get('http://localhost:3000/add', {
                json : true
            })
            }catch(err){
                error = err
            }
            expect(error).to.be.exist
            if(error instanceof StatusCodeError){
                expect(error.statusCode).to.be.eq(400)
            }
        })
        it('should get error when not in route', async function(){
            let error 
            try{
                await get('http://localhost:3000/sssafa', {
                json : true
            })
            }catch(err){
                error = err
            }
            expect(error).to.be.exist
            if(error instanceof StatusCodeError){
                expect(error.statusCode).to.be.eq(404)
            }
        })
    })
})