const server = require("./app");
const config = require("./config");
server.listen(7009, () => {
  console.log(`Server is running on ${config.host}:${config.port}`);
});
