const waitOn = require("wait-on");
var opts = {
  resources: ["http://localhost:3000/"],
  timeout: 20000 // timeout in ms, default Infinity
};

const exec = require("child_process").exec;
waitOn(opts, function(err) {
  if (err) {
    exec("npm start");
  }
});

waitOn(opts, function(err) {
  const child = exec("npm run local:e2e", function(err, stdout, stderr) {
    if (err) throw err;
    else console.log(stdout);
  });
});
