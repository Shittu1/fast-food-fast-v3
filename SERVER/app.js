import express from 'express';
import bodyParser from 'body-parser';
import ordersRouter from './routes/orders';
import Orders from './models/orders';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).send({ Message: 'Welcome to Fast food fast home page' }));


app.use('/api/v1/orders', ordersRouter);

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

export default app;
