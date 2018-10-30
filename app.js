import express from 'express';
import mailer from './mailer/controllers/index';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  mailer.createEmailEntry(req, res);
});

console.log('Server is running');
app.listen(process.env.PORT || 8080);
