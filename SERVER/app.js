import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import 'babel-polyfill';
import OrderWithJSObject from './usingJSObject/routes/orders';
import OrderWithDb from './usingDB/routes/orders';
import userWithDb from './usingDB/routes/users';
import authWithDb from './usingDB/routes/auth';
import menuWithDb from './usingDB/routes/menu';

dotenv.config();
const Order = process.env.Type === 'db' ? OrderWithDb : OrderWithJSObject;

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).send({ Message: 'Welcome to Fast food fast home page' }));


app.use('/api/v1/orders', Order);
app.use('/users', userWithDb);
app.use('/auth', authWithDb);
app.use('/menu', menuWithDb);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

export default app;
