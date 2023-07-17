require('dotenv').config();
const ngeohash = require('ngeohash');
const EventService = require('./services/TicketMasterService');

// Create an instance of EventService with your Ticketmaster API key from .env
const eventService = new EventService(process.env.TICKETMASTER_API_KEY);

// Define your search parameters
// By city
// const searchParams = {
//   countryCode: 'AU',
//   keyword: 'music',
//   city: 'Sydney',
//   size: 10,
// };

// Search by Geo location
// For example for sydney
const latitude = -33.865143; // Example latitude value
const longitude = 151.209900; // Example longitude value

// Generate the geohash
const hash = ngeohash.encode(latitude, longitude);

const searchParams = {
  geoPoint: hash,
  radius: 20,
  size: 50,
};

// Export events to a CSV file
eventService.exportEventsToCSV(searchParams, 'events.csv');
