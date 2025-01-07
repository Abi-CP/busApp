// server/src/server.mjs

import express from 'express';
import cors from 'cors';
import updateBuses from './lib/buses.mjs';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { router as stripeRouter } from './stripe.mjs';
import Stripe from 'stripe';
import path from 'path';
import 'dotenv/config'; // Load environment variables

// Initialize Stripe with environment variable
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2020-08-27' });

const app = express();
const port = process.env.PORT || 3001; // Use environment variable for port

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/stripe', stripeRouter);

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// Variables
let source = '';
let destination = '';
let premium = false;
let date;

// API endpoint
app.get('/api/search', async (req, res) => {
  const { source: reqSource, destination: reqDestination, date: reqDate, premium: isPremium } = req.query;
  source = reqSource;
  destination = reqDestination;
  premium = isPremium;
  date = reqDate;

  try {
    const updatedBuses = await updateBuses(source, destination, premium, date);

    const response = {
      buses: updatedBuses,
      premium: isPremium,
    };

    res.json(response);
  } catch (error) {
    console.error('Error updating buses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define the path to the 'bundles' folder
const bundlesPath = path.join(process.cwd(),  'bundles');

// Serve static files from the 'bundles' folder
app.use(express.static(bundlesPath));

// Serve index.html on the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(bundlesPath, 'index.html'));
});

// Start server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export variables
export { source, destination };
