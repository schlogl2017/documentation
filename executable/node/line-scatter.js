var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var trace0 = {
  x: [1, 2, 3, 4], 
  y: [10, 15, 13, 17], 
  mode: "markers", 
  type: "scatter"
};
var trace1 = {
  x: [2, 3, 4, 5], 
  y: [16, 5, 11, 9], 
  mode: "lines", 
  type: "scatter"
};
var trace2 = {
  x: [1, 2, 3, 4], 
  y: [12, 9, 15, 12], 
  mode: "lines+markers", 
  type: "scatter"
};
var data = [trace1, trace2, trace3];

plot_url = plolty.plot(data, function (err, msg) {
    console.log(msg);
});