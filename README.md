# This repository is deprecated and will no longer be maintained. This template is now available in [zkSync Contract Templates](https://github.com/matter-labs/zksync-contract-templates#readme)

---

# zkSync Hardhat Vyper template

This project was scaffolded with [zksync-cli](https://github.com/matter-labs/zksync-cli).

## Project Layout

- `/contracts`: Contains solidity smart contracts.
- `/deploy`: Scripts for contract deployment and interaction.
- `/test`: Test files.
- `hardhat.config.ts`: Configuration settings.

## How to Use

- `yarn hardhat compile`: Compiles contracts.
- `yarn deploy`: Deploys using script `/deploy/deploy.ts`.
- `yarn interact`: Interacts with the deployed contract using `/deploy/interact.ts`.
- `yarn test`: Tests the contracts.

Note: Both `yarn deploy` and `yarn interact` are set in the `package.json`. You can also run your files directly, for example: `yarn hardhat deploy-zksync --script deploy.ts`

### Environment Settings

To keep private keys safe, this project pulls in environment variables from `.env` files. Primarily, it fetches the wallet's private key.

Rename `.env.example` to `.env` and fill in your private key:

```
WALLET_PRIVATE_KEY=your_private_key_here...
```

### Network Support

`hardhat.config.ts` comes with a list of networks to deploy and test contracts. Add more by adjusting the `networks` section in the `hardhat.config.ts`. To make a network the default, set the `defaultNetwork` to its name. You can also override the default using the `--network` option, like: `hardhat test --network dockerizedNode`.

### Local Tests

Running `yarn test` by default runs the [zkSync In-memory Node](https://era.zksync.io/docs/tools/testing/era-test-node.html) provided by the [@matterlabs/hardhat-zksync-node](https://era.zksync.io/docs/tools/hardhat/hardhat-zksync-node.html) tool.

Important: zkSync In-memory Node currently supports only the L2 node. If contracts also need L1, use another testing environment like Dockerized Node. Refer to [test documentation](https://era.zksync.io/docs/tools/testing/) for details.

## Useful Links

- [Docs](https://era.zksync.io/docs/dev/)
- [Official Site](https://zksync.io/)
- [GitHub](https://github.com/matter-labs)
- [Twitter](https://twitter.com/zksync)
- [Discord](https://join.zksync.dev/)

## License

This project is under the [MIT](./LICENSE) license.