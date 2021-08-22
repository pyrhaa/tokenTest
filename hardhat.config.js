require('@nomiclabs/hardhat-waffle');
require('dotenv').config({ path: '.env' });

const INFURA_URL = process.env.INFURA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

console.log(INFURA_URL);
console.log(PRIVATE_KEY);

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: INFURA_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
