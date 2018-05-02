var express = require("express");
var app = express();
var server = app.listen(3000);
var path = require("path");
var io = require("socket.io").listen(server);
var bittrex = require("node-bittrex-api");

app.use(express.static(path.join(__dirname, "public")));

bittrex.websockets.client(function() {
  bittrex.websockets.listen(function(data, client) {
    if (data.M === "updateSummaryState") {
      data.A.forEach(function(data_for) {
        data_for.Deltas.forEach(function(marketsDelta) {
          console.log(
            "Ticker Update for " + marketsDelta.MarketName,
            marketsDelta
          );
          io.sockets.emit(`liveMarket.${marketsDelta.MarketName}`, {
            market: marketsDelta.MarketName,
            msg: marketsDelta
          });
        });
      });
    }
  });
});

io.on("connection", socket => {
  console.log("new connection made");
});
