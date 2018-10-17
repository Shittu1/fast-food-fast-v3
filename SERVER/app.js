import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});

export default app;
