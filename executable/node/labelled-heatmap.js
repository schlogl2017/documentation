var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var data = [
  {
    z: [[1, 20, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]], 
    x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], 
    y: ["Morning", "Afternoon", "Evening"], 
    type: "heatmap"
  }
];

plot_url = plolty.plot(data, function (err, msg) {
    console.log(msg);
});