const http = require('http');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../webserver.js');

const { expect } = chai;

chai.use(chaiHttp);

describe('Server Tests', () => {
  before(() => {
    // Starts server before running tests (optional)
  });

  after(() => {
    // Stop server after running tests (optional)
  });

  it('should handle GET requests', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, this is a GET request!');
        done();
      });
  });

  it('should handle POST requests', (done) => {
    const postData = {
      param1: 'value1',
      param2: 'value2',
    };

    chai.request(server)
      .post('/submit')
      .type('form')
      .send(postData)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include(`Received POST data: {"param1":"value1","param2":"value2"}`);
        // expect(res.text).to.include(`{\\"param1\\":\\"v`);
        // expect(res.text).to.include('"param2":"value2"');
        done();
      });
  });
  
  // Will add more test cases as needed.
});