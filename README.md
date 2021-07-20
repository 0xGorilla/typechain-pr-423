# Typechain PR 423

Repository built in order to showcase error mentioned in [Typechain PR #423](https://github.com/ethereum-ts/TypeChain/issues/423)

### How to reproduce the error?

1. `yarn install`
1. `yarn compile`
1. Go edit something in `Greeter.sol` and save the file
1. `yarn compile`

Now you should see:
```
Error: Couldn't find ethers-v5. Tried loading: @typechain/ethers-v5, typechain-target-ethers-v5, C:\Users\oxman\Code\defi\typechain-pr-423\ethers-v5.
Perhaps you forgot to install @typechain/ethers-v5
```