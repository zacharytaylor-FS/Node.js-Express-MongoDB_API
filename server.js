const http = require('http');
require('dotenv').config();

http.createServer().listen(process.env.PORT, () => console.log(`Listening on port: ${process.env.PORT}`));