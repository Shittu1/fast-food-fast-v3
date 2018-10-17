import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to fast food fast');
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

export default app;
