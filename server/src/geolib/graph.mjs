// graph.mjs

import geolib from 'geolib'

class Graph {
  constructor() {
    this.nodes = {}
    this.averageSpeed = 60
  }

  addNode(district, coordinates) {
    this.nodes[district] = coordinates
  }

  calculateDistance(source, destination) {
    if (this.nodes[source] && this.nodes[destination]) {
      const distance = geolib.getDistance(this.nodes[source], this.nodes[destination])
      return distance / 1000
    }

    return null
  }

  calculateTravelTime(distance) {
    return (distance / this.averageSpeed) * 60
  }
}

const districtsGraph = new Graph()

const tamilNaduDistricts = {
  Chennai: { latitude: 13.0827, longitude: 80.2707 },
  Kancheepuram: { latitude: 12.8384, longitude: 79.7001 },
  Tiruvallur: { latitude: 13.1457, longitude: 79.9073 },
  Vellore: { latitude: 12.9716, longitude: 79.1595 },
  Thiruvannamalai: { latitude: 12.2485, longitude: 79.174 },
  Villupuram: { latitude: 11.9394, longitude: 79.4805 },
  Cuddalore: { latitude: 11.748, longitude: 79.7683 },
  Salem: { latitude: 11.6643, longitude: 78.146 },
  Namakkal: { latitude: 11.2194, longitude: 78.1675 },
  Dindigul: { latitude: 10.35, longitude: 77.95 },
  Karur: { latitude: 10.9598, longitude: 78.0798 },
  Tiruchirappalli: { latitude: 10.7905, longitude: 78.7047 },
  Perambalur: { latitude: 11.234, longitude: 78.8777 },
  Ariyalur: { latitude: 11.0768, longitude: 79.117 },
  Thanjavur: { latitude: 10.7745, longitude: 79.6231 },
  Nagapattinam: { latitude: 10.805, longitude: 79.824 },
  Thiruvarur: { latitude: 10.7712, longitude: 79.6426 },
  Pudukkottai: { latitude: 10.3838, longitude: 78.8216 },
  Sivaganga: { latitude: 9.8502, longitude: 78.4886 },
  Madurai: { latitude: 9.9252, longitude: 78.1198 },
  Theni: { latitude: 10.0095, longitude: 77.4828 },
  Ramanathapuram: { latitude: 9.3673, longitude: 78.8183 },
  Virudhunagar: { latitude: 9.5904, longitude: 77.9514 },
  Tuticorin: { latitude: 8.8055, longitude: 78.1458 },
  Tirunelveli: { latitude: 8.7139, longitude: 77.7567 },
  Kanyakumari: { latitude: 8.0883, longitude: 77.5385 },
  Nilgiris: { latitude: 11.406, longitude: 76.6935 },
  Coimbatore: { latitude: 11.0168, longitude: 76.9558 },
  Erode: { latitude: 11.3698, longitude: 77.6737 },
  Krishnagiri: { latitude: 12.5186, longitude: 78.2135 },
  Dharmapuri: { latitude: 12.0976, longitude: 78.1936 },
  Kallakurichi: { latitude: 11.7335, longitude: 78.9605 },
  Tenkasi: { latitude: 8.9584, longitude: 77.3098 },
  Chengalpattu: { latitude: 12.6845, longitude: 79.9833 },
  Tirupathur: { latitude: 12.4918, longitude: 78.2213 },
  Ranipet: { latitude: 12.9298, longitude: 79.333 },
  Tiruppur: { latitude: 11.1075, longitude: 77.3411 },
  Tambaram: { latitude: 12.9264, longitude: 80.126 },
}

Object.entries(tamilNaduDistricts).forEach(([district, coordinates]) => {
  districtsGraph.addNode(district, coordinates)
})

// Function to calculate distance and expected travel time between two districts
export function findDistanceAndTime(source, destination, sourceTime) {
  const distance = districtsGraph.calculateDistance(source, destination)
  const journeyTime = districtsGraph.calculateTravelTime(distance)
  // const destinationTime = calculateDestinationTime(sourceTime, journeyTime)
  if (distance !== null && sourceTime !== null) {
    // const formattedJourneyTime = convertTime(time)
    // const FormattedDestinationTime = convertTime(destinationTime)
    return [
      parseFloat(distance.toFixed(2)),
      parseFloat(journeyTime.toFixed(0))
      // parseFloat(destinationTime.toFixed(0)),
    ]
  } else {
    return null
  }
}



// // Example usage:
// const resultChennaiToKancheepuram = findDistanceAndTime('Chennai', 'Kancheepuram', 240)
// console.log(resultChennaiToKancheepuram)

// const resultChennaiToTiruvallur = findDistanceAndTime('Chennai', 'Kanyakumari', 380)
// console.log(resultChennaiToTiruvallur)
