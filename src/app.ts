import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  const response: Responses.JSONResponse<string> = {
    error: null,
    data: 'heyy',
  };

  res.json(response);
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

// [SIGINT] The app is going down. Kill what you need to.
process.on('SIGINT', () => {
  try {
    console.log('SIGINT event received.');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});