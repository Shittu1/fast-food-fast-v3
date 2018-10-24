import express from 'express';
import bodyParser from 'body-parser';
import ordersRouter from './routes/orders';

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).send({ Message: 'Welcome to Fast food fast home page' }));

app.use('/api/v1', ordersRouter);

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

export default app;
