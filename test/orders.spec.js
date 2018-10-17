import chai from 'chai';
import chaiHttp from 'chai-http';
import uuid from 'uuid';
import app from '../SERVER/app';
import Orders from '../SERVER/models/orders';

chai.use(chaiHttp);
chai.should();


describe('THE HOME PAGE', () => {
  it('should display a welcome message on / GET', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
      });
      done();
  });
});

describe('ORDERS API Routes', () => {

  describe('POST /orders', () => {
    it('places a new order', (done) => {
      chai.request(app)
        .post('api/v1/orders')
        .send({
          id: 3,
          productName: 'Suya',
          unitPrice: 15,
          quantity: 3
        })
        .end((err, res) => {
          res.should.have.status(201);
        });
        done();
    });
  });

  describe('GET /orders', () => {
    it('returns all orders', (done) => {
      chai.request(app)
        .get('api/v1/orders')
        .end((err, res) => {
          res.should.have.status(200);
        });
        done();
    });
  });

  describe('GET /orders/:id', () => {
    it('fetches a specific order by id', (done) => {
      const id = 2;
      chai.request(app)
        .get(`api/v1/orders/${id}`)
        .end((err, res) => {
          console.log("ERROR BEFORE ==>>", err);
          res.should.have.status(200);
        });
        done();
    });
  });

  describe('UPDATE /orders/:id', () => {
    it('updates a specific order by id', (done) => {
      const id = 2;
      chai.request(app)
        .put(`api/v1/orders/${id}`)
        .send({
          id: 2,
          productName: 'Shawama',
          unitPrice: 15,
          quantity: 3
        })
        .end((err, res) => {
          res.should.have.status(200);
        });
        done();
    });
  });

  describe('DELETE /orders/:id', () => {
    it('deletes a specific order by id', (done) => {
      const id = 3;
      chai.request(app)
        .delete(`api/orders/${id}`)
        .end((err, res) => {
          res.should.have.status(204);
        });
        done();
    });
  });

});
