import express from 'express';
import bodyParser from 'body-parser';

const app = express();
 
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))