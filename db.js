const mongoose = require('mongoose');

const mongoUrl = 'mongodb://127.0.0.1:27017/hotels';

// mongoose.connect(mongoUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
mongoose.connect(mongoUrl)

const db = mongoose.connection;

// Attach event listeners
db.on('connected', () => {
  console.log("Connected to MongoDB server");
});

db.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log("MongoDB server disconnected");
});

module.exports = db;
