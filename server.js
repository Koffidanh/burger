const http = require('http');
const cluster = require('cluster');
const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

// Set Handlebars.
const exphbs = require('express-handlebars');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));
app.use(express.static('views/images')); 
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
const routes = require('./controllers/burgers_controller.js');

app.use(routes);

// Start our server so that it can begin listening to client requests.
// app.listen(PORT, () =>
//   console.log(`Server listening on: http://localhost:${PORT}`)
// );

if (cluster.isWorker) {
  http.createServer((req, res) => {
    //req.socket.destroy(); // this will also create an H13
    throw new Error('We throw an error before sending a response');
    res.end('ok');
  }).listen(PORT);
}
else {
  cluster.fork();
  cluster.on('exit', () => {
    cluster.fork();
  })
}
