import * as mocha from 'mocha';
import * as chai from "chai";
import app from "../../src/server";
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

describe('names resource', () => {
    let HELLO = '/hello';

    it('green from angular', () => {
        chai.request(app).get(HELLO)
            .then(res => {
                expect(res.body).to.have.length(1);
                expect(res.body[0].title).to.be.eql("Hello from Angular");
            });
    });
});
