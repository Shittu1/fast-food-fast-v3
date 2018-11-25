import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../SERVER/app';

const { expect } = chai;
chai.use(chaiHttp);

describe('USERS API Routes', () => {
  describe('GET /users/:id/orders', () => {
    it('fetches all orders of a specific user', (done) => {
      const id = 1;
      chai.request(app)
        .get(`/users/${id}/orders`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
        });
      done();
    });
  });

  describe('GET /users', () => {
    it('fetches all users', (done) => {
      chai.request(app)
        .get('/users')
        .end((err, res) => {
          expect(res.status).to.equal(200);
        });
      done();
    });
  });
});
