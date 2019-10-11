const express = require('express');
const cors = require('cors');
const config = require('./config');
const morgan = require('morgan');
const dogsRouter = require('./dogs/dogs-router');
const catsRouter = require('./cats/cat-router');
const adoptersRouter = require('./adopters/adopters-router');
const historyRouter = require('./history/history-router');

const app = express();
app.use(cors());

app.use(
  morgan(config.NODE_ENV === 'production' ? 'tiny' : 'common', {
    skip: () => config.NODE_ENV === 'test'
  })
);

app.use('/api/dog', dogsRouter);
app.use('/api/cat', catsRouter);
app.use('/api/adopters', adoptersRouter);
app.use('/api/history', historyRouter);

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(config.PORT, () => {
  console.log(`Serving listening at http://localhost:${config.PORT}`);
});
