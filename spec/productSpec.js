var request = require("request");
var testObj = {
    "_id":13860428,
    "name":"The Big Lebowski (Blu-ray) (Widescreen)",
    "__v":0,
    "current_price": {
        "value":13.49,
        "currency_code":"USD"}
};
var base_url = "http://localhost:8080/api/products/13860428";

describe("myRetail Server", function() {
    describe("GET /products/13860428", function() {
        it("returns object", function(done) {
            request.get(base_url, function(error, response, body) {
                if (error) done(error);
                expect(body).toBe(JSON.stringify(testObj));
                response.should.be.an('object');
                done();
            });
        });
    });
});