// server.mjs

import express from 'express'
import cors from 'cors'
import updateBuses from './lib/buses.mjs'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { router as stripeRouter } from './stripe.mjs'
import Stripe from 'stripe' // Import Stripe class

const stripeSecretKey = 'sk_test_51OQqOjSEuj1HRmQXbOGow0OlEtiGSIVIYYQOjQlZ6EqBMkp2rRElclRHKMZcW31YUYJx1sLnOGiX2rpSvepx51ZS00X8gXNPgv'
const stripe = new Stripe(stripeSecretKey, { apiVersion: '2020-08-27' })

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/api/stripe', stripeRouter)

const server = createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

let source = ''
let destination = ''
let premium = false
let date

app.get('/api/search', async (req, res) => {
  const { source: reqSource, destination: reqDestination, date: reqDate, premium: isPremium } = req.query
  source = reqSource
  destination = reqDestination
  premium = isPremium
  date = reqDate

  try {
    const updatedBuses = await updateBuses(source, destination, premium, date)

    const response = {
      buses: updatedBuses,
      premium: isPremium,
    }

    res.json(response)
  } catch (error) {
    console.error('Error updating buses:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

// Export the variables
export { source, destination }
