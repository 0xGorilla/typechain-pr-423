import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-etherscan';
import { HardhatUserConfig } from 'hardhat/types';
import 'tsconfig-paths/register';

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {},
  solidity: {
    compilers: [
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};

export default config;
