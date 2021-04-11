const express = require('express');
const app = express();
const appRoutes = require('./routes/routes');
const bodyParser = require('body-parser');
const email_Scheduler = require('./emailScheduler/email_Scheduler');
require("dotenv").config();

const PORT = 3000;

//body parser
app.use(bodyParser.json());

// routes calling
app.use("/", appRoutes);

// server listener
app.listen(PORT, () => {
    console.log(`Email scheduler app listening at http://localhost:${PORT}`);
});

// Email scheduler
email_Scheduler.schedule_Email();