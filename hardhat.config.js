require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

const INFURA_URL_ID = process.env.INFURA_URL_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_URL_ID}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
