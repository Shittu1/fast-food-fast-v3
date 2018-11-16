import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../SERVER/app';

const { expect } = chai;
chai.use(chaiHttp);

describe('MENU API Routes', () => {
  describe('POST /menu', () => {
    it('Add a new menu', (done) => {
      chai.request(app)
        .post('/menu')
        .send({
          name: 'Suya',
          price: 15,
          details: 'Suya is made from beef'
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
        });
      done();
    });
  });

  describe('GET /menu', () => {
    it('returns all menu', (done) => {
      chai.request(app)
        .get('/menu')
        .end((err, res) => {
          expect(res.status).to.equal(200);
        });
      done();
    });
  });
});
