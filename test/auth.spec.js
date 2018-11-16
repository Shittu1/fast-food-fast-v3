import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../SERVER/app';

const { expect } = chai;
chai.use(chaiHttp);

describe('AUTH API Routes', () => {
  describe('POST /auth/signup', () => {
    it('SIGNUP a new user', (done) => {
      chai.request(app)
        .post('/auth/signup')
        .send({
          firstname: 'Shola',
          lastname: 'Adebayo',
          email: 'def@yahoo.com',
          password: '555'
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
        });
      done();
    });
  });

  describe('POST /auth/login', () => {
    it('LOGIN a user', (done) => {
      chai.request(app)
        .post('/auth/login')
        .send({
          email: 'def@yahoo.com',
          password: '555'
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
        });
      done();
    });
  });
});
