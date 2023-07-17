const fs = require('fs');
const fetch = require('node-fetch');
const { Parser } = require('json2csv');

class EventService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.url = 'https://app.ticketmaster.com/discovery/v2/events.json';
  }

  async searchEvents(params) {
    try {
      const response = await fetch(`${this.url}?${new URLSearchParams(params).toString()}&apikey=${this.apiKey}`);
      const data = await response.json();
      return data._embedded?.events || [];
    } catch (error) {
      console.error('Error occurred during event search:', error);
      return [];
    }
  }

  async exportEventsToCSV(params, filename) {
    const events = await this.searchEvents(params);
    if (events.length === 0) {
      console.log('No events found to export.');
      return;
    }

    try {
      const fields = ['Event', 'Date', 'URL', 'Image', 'Address', 'City', 'Latitude', 'Longitude'];
      const csvData = events.map(event => ({
        Event: event.name,
        Date: event.dates.start.localDate,
        URL: event.url,
        Image: event.images?.[0]?.url,
        Address: event._embedded?.venues?.[0]?.address?.line1,
        City: event._embedded?.venues?.[0]?.city?.name,
        Latitude: event._embedded?.venues?.[0]?.location?.latitude,
        Longitude: event._embedded?.venues?.[0]?.location?.longitude
      }));

      const parser = new Parser({ fields });
      const csv = parser.parse(csvData);

      fs.writeFileSync(filename, csv);
      console.log(`Events exported to ${filename} successfully.`);
    } catch (error) {
      console.error('Error occurred during export:', error);
    }
  }
}

module.exports = EventService;
