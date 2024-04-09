require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.25",
  networks:{
    Ganache:{
      url:process.env.PROVIDER_URL,
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};
