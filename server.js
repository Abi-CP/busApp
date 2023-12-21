const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

// Placeholder data for buses
const buses = [
  {
    id: 'bus1',
    route: { source: 'ABC', destination: 'XYZ' },
    // source: 'ABC',
    // destination: 'XYZ',
    seatsAvailable: 30,
    journeyTime: '2 hours',
  },
  // Add more bus data as needed
]

// Placeholder data for users and bookings
const users = [
  {
    id: 'user123',
    name: 'John Doe',
    bookings: [
      {
        busId: 'bus1',
        seats: ['seat1', 'seat2'],
      },
      // Add more booking data as needed
    ],
  },
  // Add more user data as needed
]

// Placeholder data for seat labels in buses
const seatLabels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2', 'E1', 'E2'];

// Placeholder data for bookings
const bookings = [];

// Endpoint to get details of a specific user
app.get('/api/user/:userId', (req, res) => {
  const { userId } = req.params

  const user = users.find((u) => u.id === userId)

  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }

  res.json(user)
})

// Modify the endpoint to accept source and destination parameters
// Modify the endpoint to accept source and destination parameters
app.get('/api/buses', (req, res) => {
  const { source, destination } = req.query

  if (!source || !destination) {
    return res.status(400).json({ error: 'Source and destination parameters are required' })
  }

  // Filter buses based on source and destination
  const filteredBuses = buses.filter((bus) => bus.route.source === source && bus.route.destination === destination)

  res.json(filteredBuses)
})

// Endpoint to get details of a specific bus
app.get('/api/bus/:busId', (req, res) => {
    const { busId } = req.params;
  
    const bus = buses.find((b) => b.id === busId);
  
    if (!bus) {
      return res.status(404).json({ error: 'Bus not found' });
    }
  
    // Generate labels for available seats (for demonstration purposes)
    const availableSeats = seatLabels.slice(0, bus.seatsAvailable);
  
    // Include seat labels in the response
    const busDetails = {
      ...bus,
      availableSeats,
    };
  
    res.json(busDetails);
  });
  
// Endpoint to book seats for a specific bus
app.post('/api/bus/:busId/book', (req, res) => {
    const { busId } = req.params;
    const { seats, userId } = req.body;
  
    const bus = buses.find((b) => b.id === busId);
  
    if (!bus) {
      return res.status(404).json({ error: 'Bus not found' });
    }
  
    // Check seat availability
    if (seats.length > bus.seatsAvailable) {
      return res.status(400).json({ error: 'Not enough seats available' });
    }
  
    // Update seatsAvailable and create a booking
    bus.seatsAvailable -= seats.length;
    bookings.push({ busId, userId, seats });
  
    res.json({ message: 'Seats booked successfully', bookedSeats: seats });
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})
