const{expect}= require("chai");
const request = require("request");
let url = 'http://localhost:3000/api/cat';
let cat={
    title:'',
    subTitle:'',
    path:'',
    description:''
};

describe('test GET api',function(){
    it('returns statusCode of 200',function(done){
        request('http://localhost:3000/api/cat',function(error,response,bodyString){
            let bodyObj= JSON.parse(bodyString);//connect string to actual object
            expect(bodyObj.statusCode).to.equal(200);
            expect(bodyObj.message).to.equal('get all cats successful');
            done();
        });
    });
});

describe('test POST api',function(){
    it('returns statusCode of 201',function(done){
        request.post({url:url,form:cat},function(error,response,bodyString){
            let bodyObj= JSON.parse(response.body);//connect string to actual object
            expect(bodyObj.message).to.equal('success');
            cat['id'] = bodyObj.data.insertedId;
            done();
        });
    });
});

describe('test DELETE api',function(){
    it('returns statusCode of 202',function(done){
        request.delete({url:`${url}/${cat['id']}`},function(error,response,c){
           let bodyObj= JSON.parse(c);//connect string to actual object
            expect(bodyObj.statusCode).to.equal(202);
            done();
        });
    });
});