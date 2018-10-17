import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../SERVER/app';

chai.use(chaiHttp);
chai.should();

describe('THE ORDERS', () => {
  it('should display a welcome message on / GET', () => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
      });
  });
});
