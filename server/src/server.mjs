import express, { json } from 'express'
import cors from 'cors'
import updateBuses from './lib/buses.mjs'

const app = express()
const port = 3001

app.use(cors())
app.use(json())

let source = ''
let destination = '' // Declare the variables

app.get('/api/search', async (req, res) => {
  const { source: reqSource, destination: reqDestination, date: reqDate } = req.query
  source = reqSource // Assign values
  destination = reqDestination // Assign values

  try {
    // Call the function to update buses
    const updatedBuses = await updateBuses(source, destination)

    const response = {
      source: source,
      destination: destination,
      date: reqDate, // Fix the date variable
      buses: updatedBuses,
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
