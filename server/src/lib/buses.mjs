import { findDistanceAndTime } from '../geolib/graph.mjs';

// Example bus data
let buses = [
  {
    busId: 1,
    companyName: 'InterCitySmartBus',
    sourceTime: 240,
    destinationTime: 0,
    baseFare: 250,
    totalFare: 0,
  },
  {
    busId: 2,
    companyName: 'TNSTC',
    sourceTime: 510,
    destinationTime: 0,
    baseFare: 100,
    totalFare: 0,
  },
  {
    busId: 3,
    companyName: 'SETC',
    sourceTime: 780,
    destinationTime: 0,
    baseFare: 150,
    totalFare: 0,
  },
  {
    busId: 4,
    companyName: 'KPN',
    sourceTime: 1050,
    destinationTime: 0,
    baseFare: 300,
    totalFare: 0,
  },
  {
    busId: 5,
    companyName: 'Parveen Travels',
    sourceTime: 1320,
    destinationTime: 0,
    baseFare: 200,
    totalFare: 0,
  },
]
// Export an asynchronous function to update buses
export default async function updateBuses(source, destination) {
  return new Promise((resolve, reject) => {
    try {
      buses.forEach((bus) => {
        const [distance, journeyTime] = findDistanceAndTime(source, destination, bus.sourceTime);

        bus.distance = distance;
        bus.journeyTime = journeyTime;

        if (source !== null) {
          // Update bus details
          bus.journeyTime = journeyTime;
          // bus.sourceTime = sourceTime
          bus.destinationTime = parseFloat((bus.sourceTime + journeyTime).toFixed(0));
          bus.totalFare = parseFloat(calculateFare(bus.baseFare, distance).toFixed(2));
        }
      });

      console.log(buses);
      resolve(buses);
    } catch (error) {
      console.error('Error updating buses:', error);
      reject(error);
    }
  });
}

function calculateFare(baseFare, distance) {
  return baseFare + ((50 * distance) / 100);
}


