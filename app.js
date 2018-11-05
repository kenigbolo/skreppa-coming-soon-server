import express from 'express';
import mailer from './mailer/controllers/index';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

dotenv.config();
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser('SEKR37'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.post('/', (req, res) => {
  mailer.createEmailEntry(req, res);
});

app.get('/', (_, res) => {
  res.status(200).send('Server up and running');
});

console.log('Server is running');
app.listen(process.env.PORT || 8080);
