import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../SERVER/app';

let expect = chai.expect;
chai.use(chaiHttp);

describe('THE HOME PAGE', () => {
  it('should display a welcome message on / GET', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
      });
      done();
  });
});

describe('ORDERS API Routes', () => {

  describe('POST /orders', () => {
    it('places a new order', (done) => {
      chai.request(app)
        .post('/api/v1/orders')
        .send({
          id: 3,
          productName: 'Suya',
          unitPrice: 15,
          quantity: 3
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
        });
        done();
    });
  });

  describe('GET /orders', () => {
    it('returns all orders', (done) => {
      chai.request(app)
        .get('/api/v1/orders')
        .end((err, res) => {
          expect(res.status).to.equal(200);
        });
        done();
    });
  });

  describe('GET /orders/:id', () => {
    it('fetches a specific order by id', (done) => {
      const id = 2;
      chai.request(app)
        .get(`/api/v1/orders/${id}`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
        });
        done();
    });
  });

  describe('UPDATE /orders/:id', () => {
    it('updates a specific order by id', (done) => {
      const id = 2;
      chai.request(app)
        .put(`/api/v1/orders/${id}`)
        .send({
          id: 2,
          productName: 'Shawama',
          unitPrice: 15,
          quantity: 3
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
        });
        done();
    });
  });

  describe('DELETE /orders/:id', () => {
    it('deletes a specific order by id', (done) => {
      const id = 2;
      chai.request(app)
        .delete(`/api/v1/orders/${id}`)
        .end((err, res) => {
          expect(res.status).to.equal(204);
        });
        done();
    });
  });

});
