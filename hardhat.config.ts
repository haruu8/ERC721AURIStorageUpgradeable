import { HardhatUserConfig } from "hardhat/config";
import 'hardhat-gas-reporter';
import '@typechain/hardhat';
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-ethers";
import '@nomiclabs/hardhat-etherscan';
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 10_000,
      },
    },
  },
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      allowUnlimitedContractSize: true
    },
    localhost: {
      initialBaseFeePerGas: 0,
      allowUnlimitedContractSize: true
    },
  },
  gasReporter: {
    enabled: true,
    gasPriceApi: "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice",
    currency: 'JPY',
    src: 'contracts',
  },
  typechain: {
    outDir: './typechain',
  },
  mocha: {
    timeout: 60_000,
  },
};

export default config;
