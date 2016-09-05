var labox = require('labox-tv')('192.168.0.3',true,6);

labox.on('volume', function(data) {
  // For volume event, data is an integer
  console.log(data);
  console.log(getInfo());
});
