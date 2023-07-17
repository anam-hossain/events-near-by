# Ticketmaster Event Search Script

This Node.js script utilizes the Ticketmaster API to search for events based on location and export the event data to a CSV file.

## Prerequisites

- Node.js installed on your machine
- Ticketmaster API key (obtain one from the Ticketmaster Developer Portal)

https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2

## Installation

1. Clone the repository or download the script file to your local machine.

2. Navigate to the project directory in your terminal.

3. Install the project dependencies by running the following command:

```bash
   npm install
```
4. Create a .env file in the project directory and add your Ticketmaster API key in the following format:

```dotenv
TICKETMASTER_API_KEY=your_api_key_here
```

## Usage

### Search by city, keyword and country
Modify the script file (`ticketmaster.js`) to customise the search parameters and export options according to your requirements. You can adjust the following parameters:

- countryCode: The country code for the event search (e.g., "AU").
- keyword: The keyword to search for events (e.g., "music", "sports", "comedy", etc.).
- city: The city for the event search.
- size: The number of events to retrieve.

To run the script, execute the following command:

```js
node ./ticketmaster.js
```

### Search by geo location (default)

Modify the script file (`ticketmaster.js`) to customise the lat/lon. The script will use this functionality by default

```js
node ./ticketmaster.js
```