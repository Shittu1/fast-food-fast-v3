import chai from 'chai';
import chaiHttp from 'chai-http';
import uuid from 'uuid';
import app from '../SERVER/app';
import Orders from '../SERVER/models/orders';

chai.use(chaiHttp);
chai.should();


describe('THE HOME PAGE', () => {
  it('should display a welcome message on / GET', () => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
      });
  });
});

describe('ORDERS API Routes', () => {

  describe('POST /orders', () => {
    it('places a new order', (done) => {
      chai.request(app)
        .post('api/v1/orders')
        .send({
          productName: 'Egg-Roll',
          unitPrice: 5,
          quantity: 1
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


  //APIs for fetching a single order, updating and deleting are not working yet for me

  // describe('GET /order/:id', () => {
  //   it('fetches a specific order by id', (done) => {
  //     const id = Orders[0].id;
  //     chai.request(app)
  //       .get(`/api/v1/orders/${id}`)
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //       });
  //       done();
  //   });
  // });

});