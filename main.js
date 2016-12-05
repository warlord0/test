const os = require('os')

console.log(os.platform())
if (os.platform() == 'win32') {
  console.log('here!');
}
