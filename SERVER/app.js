import express from 'express';
import bodyParser from 'body-parser';
import ordersRouter from './routes/orders';
import Orders from './models/orders';

const app = express();

const PORT = 3000 || process.env.PORT;

app.use(express.static(__dirname + '/UI/'));
app.use(express.static(__dirname + '/build/'));
app.use('/SERVER', express.static(__dirname + '/SERVER/'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).send({ Message: 'Welcome to Fast food fast home page' }));

app.use('/api/v1', ordersRouter);

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

export default app;
