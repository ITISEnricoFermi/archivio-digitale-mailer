const express = require("express");
const bodyParser = require("body-parser");
const mailer = require("./lib/mailer");
const { main } = require("archivio-digitale-mail");

// VARS
const port = process.env.API_PORT || 3000;

// Middleware
const error = require("./middleware/error");
const asyncMiddleware = require("./middleware/async");

// INIT
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.messages = [];
  next();
});

app.post(
  "/send",
  asyncMiddleware(async (req, res) => {
    const { subject, recipients, message } = req.body;
    const mail = await mailer(recipients, subject, await main(message));
    res.status(200).json(mail);
  })
);

app.use(error());

app.listen(port, () => console.log(`Server started on port ${port}.`));
