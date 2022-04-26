const express = require('express');

//Routers to endpoints
const { usersRouter } = require('./routes/users.routes');
const { repairsRouter } = require('./routes/repairs.routes');

const { db } = require('./utils/database');

//Init express app
const app = express();

//Enable incoming JSON data
app.use(express.json());

//  Endpoints & routers
app.use('/api/v1/users', usersRouter);

app.use('/api/v1/repairs', repairsRouter);

// authenticate
db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch(err => console.log(err));

//sync
db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

//spin up server
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
