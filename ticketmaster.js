require('dotenv').config();
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

const searchParams = {
  countryCode: 'AU',
  keyword: 'music',
  city: 'Sydney',
  size: 10,
};

// Export events to a CSV file
eventService.exportEventsToCSV(searchParams, 'events.csv');
