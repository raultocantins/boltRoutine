const express = require("express");
const cron = require("node-cron");
const updateEvents = require("./services/update_events");
const app = express();

app.listen(3000, () => {
    console.log('Cron job listening on port 3000');
    cron.schedule('*/30 * * * * *', () => {
        updateEvents()
      
    });
});