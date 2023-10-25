import { HardhatUserConfig } from "hardhat/config";

import "@nomiclabs/hardhat-vyper";
import "@matterlabs/hardhat-zksync-vyper";
import "@matterlabs/hardhat-zksync-node";
import "@matterlabs/hardhat-zksync-deploy";

const config: HardhatUserConfig = {
  defaultNetwork: "dockerizedNode",
  networks: {
    zkSyncEraTestnet: {
      url: "https://testnet.era.zksync.dev",
      ethNetwork: "goerli",
      zksync: true,
    },
    zkSyncEraMainnet: {
      url: "https://mainnet.era.zksync.io",
      ethNetwork: "mainnet",
      zksync: true,
    },
    dockerizedNode: {
      url: "http://localhost:3050",
      ethNetwork: "localhost",
      zksync: true,
    },
    inMemoryNode: {
      url: "http://localhost:8011",
      ethNetwork: "localhost",
      zksync: true,
    },
    hardhat: {
      zksync: true,
    },
  },
  zkvyper: {
    version: "latest",
    settings: {},
  },
  // Currently, only Vyper 0.3.3 or 0.3.9 are supported.
  vyper: {
    version: "0.3.3",
  },
  solidity: {
    version: "0.8.17",
  },
};

export default config;
