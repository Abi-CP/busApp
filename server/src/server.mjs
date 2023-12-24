// Remove the dotenv import

import express from 'express';
import cors from 'cors';
import updateBuses from './lib/buses.mjs';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { router as stripeRouter } from './stripe.mjs';

// Remove dotenv.config({ example: false });

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
let destination = ''; // Declare the variables

app.get('/api/search', async (req, res) => {
  const { source: reqSource, destination: reqDestination, date: reqDate } = req.query;
  source = reqSource; // Assign values
  destination = reqDestination; // Assign values

  try {
    // Call the function to update buses
    const updatedBuses = await updateBuses(source, destination);

    const response = {
      source: source,
      destination: destination,
      date: reqDate, // Fix the date variable
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
