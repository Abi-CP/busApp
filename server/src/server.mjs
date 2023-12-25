// server.mjs

import express from 'express';
import cors from 'cors';
import updateBuses from './lib/buses.mjs';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { router as stripeRouter } from './stripe.mjs';
import Stripe from 'stripe'; // Import Stripe class

const stripeSecretKey = 'sk_test_51OQqOjSEuj1HRmQXbOGow0OlEtiGSIVIYYQOjQlZ6EqBMkp2rRElclRHKMZcW31YUYJx1sLnOGiX2rpSvepx51ZS00X8gXNPgv';
const stripe = new Stripe(stripeSecretKey, { apiVersion: '2020-08-27' });

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/stripe', stripeRouter);

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

let source = '';
let destination = '';

app.get('/api/search', async (req, res) => {
  const { source: reqSource, destination: reqDestination, date: reqDate } = req.query;
  source = reqSource;
  destination = reqDestination;

  try {
    const updatedBuses = await updateBuses(source, destination);

    const response = {
      source: source,
      destination: destination,
      date: reqDate,
      buses: updatedBuses,
    };

    res.json(response);
  } catch (error) {
    console.error('Error updating buses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the variables
export { source, destination };
