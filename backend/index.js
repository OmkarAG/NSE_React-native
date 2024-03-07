const express = require('express');
const app = express();
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server);

var data = [
  {
    timestamp: 1625946300000,
    value: 1,
  },
];

var candleData = [
  // {
  // timestamp: 1625945400000,
  // open: 33575.25,
  // high: 33600.52,
  // low: 33475.12,
  // close: 33520.11,
  // },
];

var i = 0;
var j = 0;

const red = {
  timestamp: 1625946300000,
  open: 33545.25,
  high: 33560.52,
  low: 33510.12,
  close: 33520.11,
};

const green = {
  timestamp: 1625946300000,
  open: 33545.25,
  high: 33585.52,
  low: 33520.12,
  close: 33570.11,
};

const red1 = {
  timestamp: 1625946300000,
  open: 33570.25,
  high: 33580.52,
  low: 33530.12,
  close: 33550.11,
};

const green1 = {
  timestamp: 1625946300000,
  open: 33560.25,
  high: 33600.52,
  low: 33550.12,
  close: 33600.11,
};

const red2 = {
  timestamp: 1625946300000,
  open: 33590.25,
  high: 33600.52,
  low: 33560.12,
  close: 33565.11,
};

const green2 = {
  timestamp: 1625946300000,
  open: 33605.25,
  high: 33625.52,
  low: 33600.12,
  close: 33620.11,
};

var isred = true;

var nseVal= 27000

const updateData = () => {
  setInterval(() => {
    const value = data.length + 1;
    const val = {
      timestamp: 1625946300000,
      value: i,
    };
    i++;
    data.push(val);
    if (i == 5 || j == 21 || j == 2) {
      i = 2;
    }
    if (j == 10) {
      i = 0;
    }

    if (j == 30) {
      data = [];
    }
    // const val1 = {
    //   timestamp: 1625946300000,
    //   value: red ? 1 : 51,
    // };
    // data.push(val1);
    io.emit('updateData', data);

    const candle1 = {
      timestamp: 1625946300000,
      open: 33545.25,
      high: 33560.52,
      low: 33510.12,
      close: 33520.11,
    };

    // if(j<8){
    if (isred) {
      candleData.push(red);
      console.log('red');
      isred = false;
    } else {
      candleData.push(green);
      console.log('green');
      isred = true;
    }
    // }
    // else if(j<16){
    //   if (isred) {
    //     candleData.push(red1);
    //     console.log('red');
    //     isred = false;
    //   } else {
    //     candleData.push(green1);
    //     console.log('green');
    //     isred = true;
    //   }
    // }
    // else if (j<26){
    //   if (isred) {
    //     candleData.push(red2);
    //     console.log('red');
    //     isred = false;
    //   } else {
    //     candleData.push(green2);
    //     console.log('green');
    //     isred = true;
    //   }
    // }
    j++;
    if (j == 25) {
      candleData = [
        {
          timestamp: 1625946300000,
          open: 33545.25,
          high: 33560.52,
          low: 33510.12,
          close: 33520.11,
        },
      ];
    }
    // const candle2 = {
    //   timestamp: 1625945400000,
    //   open: 33575.25,
    //   high: 33600.52,
    //   low: 33475.12,
    //   close: 33520.11,
    // }

    // candleData.push(candle2);

    io.emit('updateCandleData', candleData);

    io.emit('nseVal', nseVal);
    nseVal = nseVal+20

  }, 2000);
};

io.on('connection', socket => {
  socket.on('clearData', () => {
    console.log('clearData', socket.id);
    data = [];
    candleData = [];

    socket.emit('updateData', data);
    socket.emit('updateCandleData', candleData);
    console.log('client connect', socket.id);

    socket.emit('nseVal', nseVal);

  });

  socket.on('disconnect', () => {
    console.log('Client disconnected', socket.id);
  });
});

updateData();

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
