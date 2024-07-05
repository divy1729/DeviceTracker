# tracker
 Real-time Location Sharing with Socket.IO and Leaflet
Overview

This project demonstrates a real-time location-sharing application using Socket.IO and Leaflet. It allows users to share their location with others in real-time, and displays their location on a map.

Features

Real-time location sharing using Socket.IO
Map display using Leaflet
Automatic updating of user locations on the map
Removal of user markers when they disconnect
How it Works

Users connect to the application using Socket.IO.
The application uses the Geolocation API to retrieve the user's current location.
The location is sent to the server using Socket.IO.
The server broadcasts the location to all connected users.
Each user's location is displayed on a map using Leaflet.
When a user disconnects, their marker is removed from the map.
Technical Details

Frontend: JavaScript, Socket.IO, Leaflet
Backend: Node.js, Socket.IO
Geolocation API: HTML5 Geolocation API
Getting Started

Clone the repository: git clone[ https://github.com/your-username/realtime-location-sharing.git](https://github.com/divy1729/DeviceTracker)
Install dependencies: npm install
Start the server: node server.js
Open the application in a web browser: http://localhost:3000

Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

Issues

If you encounter any issues or have questions, please open an issue on this repository.
