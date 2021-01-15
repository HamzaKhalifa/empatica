var express = require("express");

var app = express();

var users = {
  1: {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com"
  }
};

var orders = {
  1: {
    id: 1,
    ref: "#ord-2018-a993bee3",
    status: "paid",
    tracking: {
      carrier: "UPS",
      trackingCode: "DAJA91930102NDAKKS0",
      status: "in_transit"
    },
    items: [
      {
        sku: "emb-mb-s",
        name: "Embrace Watch - Stretchable Band Black",
        amount: 249
      }
    ],
    discounts: [
      {
        name: "Christmas 2018 - 10% OFF",
        type: "percent",
        value: 10
      }
    ]
  },
  2: {
    id: 2,
    ref: "#ord-2018-b6012cc8",
    status: "paid",
    tracking: null,
    items: [
      {
        sku: "emb-bb-s",
        name: "Embrace Watch - Stretchable Band Blue",
        amount: 249
      },
      {
        sku: "emb-mb-s",
        name: "Embrace Watch - Stretchable Band Black",
        amount: 249
      }
    ],
    discounts: [
      {
        name: "2x1 Embrace",
        type: "amount",
        value: 249
      }
    ]
  }
};

var userOrders = { orders: [orders[1], orders[2]] };

app.get("/api/", (req, res) => {
  res.send('Hello!');
})

app.get("/api/info", function(req, res) {
  res.json({
    version: "1.0.0",
    timestamp: new Date()
  });
});

app.post("/api/login", function(req, res) {
  res.json({
    id: 1
  });
});

app.get("/api/users/:id", function(req, res) {
  res.json(users[+req.params["id"]]);
});

app.get("/api/users/:id/orders", function(req, res) {
  res.json(userOrders);
});

app.delete("/api/orders/:id", function(req, res) {
  res.json({
    orderId: +req.params["id"],
    status: "cancelled",
    order: orders[+req.params["id"]]
  });
});

// Run this only in production environment
if (process.env.NODE_ENV == 'production') {
  // This is to tell express that if it doesn't't recognize a given file, it should go check it out in the build folder
  app.use(express.static('client/build'))

  // return react build version of index.html when express doesn't recognize any of the above routes
  const path = require('path');
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html' ));
  })
}

const PORT = process.env.PORT || 5000;
console.log("Server is starting at localhost:" + PORT);
app.listen(PORT);
