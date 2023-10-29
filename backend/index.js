const Seats = require('./models/Seats'); //Use Models
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
   });

app.get('/all_seats', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    Seats.findAll().then(seat => res.json(seat));
});

app.post('/book_seats', async (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    const seatIds = req.body.seatIds;

    console.log(`From User: ${seatIds}`);

    seatIds.forEach(element => {
        Seats.findByPk(element).then(function(seat) {
            seat.update({
                available: false
            });
        });
    });
    
    Seats.findAll().then(seat => res.json(seat));
    
 });

 app.get('/reset_all', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    await Seats.findAll().then(function(seats) {
        console.log(` Seat: ${seats}`);
        seats.forEach(function(seat) {
            seat.update({ available: true });
        });
    });
    res.status(200).send('reset done');
});



// Start the server
const port = process.env.PORT || 1001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});