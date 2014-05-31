var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var trace0 = {
  x: [1, 2, 3], 
  y: [2, 3, 4], 
  type: "scatter"
};
var trace1 = {
  x: [20, 30, 40], 
  y: [5, 5, 5], 
  xaxis: "x2", 
  yaxis: "y", 
  type: "scatter"
};
var trace2 = {
  x: [2, 3, 4], 
  y: [600, 700, 800], 
  xaxis: "x", 
  yaxis: "y3", 
  type: "scatter"
};
var trace3 = {
  x: [4000, 5000, 6000], 
  y: [7000, 8000, 9000], 
  xaxis: "x4", 
  yaxis: "y4", 
  type: "scatter"
};
var data = [trace1, trace2, trace3, trace4];
var layout = {
  xaxis: {domain: [0, 0.45]}, 
  yaxis: {domain: [0, 0.45]}, 
  xaxis4: {
    domain: [0.55, 1], 
    anchor: "y4"
  }, 
  xaxis2: {domain: [0.55, 1]}, 
  yaxis3: {domain: [0.55, 1]}, 
  yaxis4: {
    domain: [0.55, 1], 
    anchor: "x4"
  }
};

plot_url = plolty.plot(data, layout, function (err, msg) {
    console.log(msg);
});