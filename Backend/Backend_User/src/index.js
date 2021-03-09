const server = require("./app");
const config = require("./config");
server.listen(7009, '0.0.0.0', () => {
  console.log(`Server is running on ${config.host}:${config.port}`);
});
