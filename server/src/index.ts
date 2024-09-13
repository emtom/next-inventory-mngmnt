import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import dashboardRoutes from './routes/dashboard.routes';

// CONFIG
dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES HERE TBD
app.get("/hello", (req, res) => {
  res.send('YO!');
});

app.use('/dashboard', dashboardRoutes)

// SERVER
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('SERVER READING ON PORT', port);
});
