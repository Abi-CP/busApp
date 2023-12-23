// buses.js
import { findDistanceAndTime } from "../geolib/graph";

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
];

// Update all details based on source and destination
buses.forEach((bus) => {
  const [source, destination, distance, journeyTime, sourceTime, destinationTime] = findDistanceAndTime(
    'Chennai', // Replace with the actual source
    'Kanyakumari', // Replace with the actual destination
    bus.sourceTime
  );

  if (source !== null) {
    // Update bus details
    bus.source = source;
    bus.destination = destination;
    bus.distance = distance;
    bus.journeyTime = journeyTime;
    bus.sourceTime = sourceTime;
    bus.destinationTime = destinationTime;
    bus.totalFare = calculateFare(bus.baseFare, distance);
  }
});

console.log(buses);
