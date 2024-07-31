# opstack-kit-chains
<div align="center">
  <a href="https://github.com/opstack-kit/opstack-kit-chains">
    <img src="https://avatars.githubusercontent.com/u/176029081?s=200&v=4" title="Logo" alt="Logo" width="200" height="200"/>
  </a>
  <br><br>
  <a href="https://opstack-kit.pages.dev/docs/opstack-kit-chains"><img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=800&size=30&pause=1000&center=true&repeat=false&random=false&width=435&lines&color=F70000&width=435&lines=Opstack+Kit+Chains" alt="Typing SVG" />
  </a>

</div>
<p align="center">
  Support your OP-Stack network with 'opstack-kit'
    <br><br>
  <a href="https://www.npmjs.com/package/opstack-kit-chains">
    <img src="https://img.shields.io/npm/v/opstack-kit-chains" alt="Npm Badge" />
  </a>
</p>

<div align="center" style="display: flex; justify-content: center; flex-wrap: wrap; gap: 10px;">

  <a href="https://github.com/opstack-kit/opstack-kit-chains/stargazers">
    <img src="https://img.shields.io/github/stars/opstack-kit" alt="Stars Badge" />
  </a>
  <a href="https://github.com/opstack-kit/opstack-kit-chains/forks"><img src="https://img.shields.io/github/forks/opstack-kit/opstack-kit-chains" alt="Forks Badge"/>
  </a>
  <a href="https://github.com/opstack-kit/opstack-kit-chains/pulls">
    <img src="https://img.shields.io/github/issues-pr/opstack-kit/opstack-kit-chains" alt="Pull Requests Badge" />
  </a>
  <a href="https://github.com/opstack-kit/opstack-kit-chains/issues">
    <img src="https://img.shields.io/github/issues/opstack-kit/opstack-kit-chains" alt="Issues Badge" />
  </a>
  <a href="https://github.com/opstack-kit/opstack-kit-chains/graphs/contributors">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/opstack-kit/opstack-kit-chains?color=2b9348">
  </a>
</div>

## important
- #### opstack-kit must be installed.
  - ##### [opstack-kit](https://opstack-kit.pages.dev/docs/getting-started.html)


## Installation

```bash [npm]
npm i opstack-kit-chains
```
or
```bash [pnpm]
pnpm i opstack-kit-chains
```
or
```bash [bun]
bun i opstack-kit-chains
```
or
```bash [yarn]
yarn add opstack-kit-chains
```

## Currently supported networks

### L1
<!-- #### L1 - Testnet -->
| L1 - Testnet   |
|-----------|
| sepolia   |
<!-- #### L1 - Mainnet -->
| L1 - Mainnet   |
|-----------|
| mainnet   |

### L2
<!-- #### L2 - Testnet -->
| L2 - Testnet          |
|------------------|
| optimismSepolia, baseSepolia, zoraSepolia, fraxtalTestnet, modeTestnet  |
<!-- #### L2 - Mainnet -->
| L2 - Mainnet   |
|-----------|
| optimism, base, zora, fraxtal, mode, redstone  |


[Add networks](https://github.com/opstack-kit/opstack-kit-chains/?tab=readme-ov-file#you-can-add-opstack-kit-chains-a-network-at-this)

## Example

Opstack Kit Chains Quickly customize your network that uses Op Stack chains.


```ts [main/config.ts]
// main.ts
import { sepolia, optimismSepolia } from 'opstack-kit-chains'

...
...
...
const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: import.meta.env.VITE_SOME_KEY,
  chains: [sepolia, optimismSepolia],
  ssr: true,
});

------------------------- or --------------------------
// config.ts
import { createConfig, http } from 'wagmi'
import { sepolia, optimismSepolia } from 'opstack-kit-chains'

export const config = createConfig({
  chains: [sepolia, optimismSepolia],
  transports: {
    [sepolia.id]: http(),
    [optimismSepolia.id]: http(),
  },
})
```
(or you can use <b>Viem =>2.17.11</b> you just need to add `viem/chains` the relevant chain object to work with `opstack-kit`)

## You can add "opstack-kit-chains" a network at this.

- #### How to
  - ##### [1. Create your file and name it in src/chains/definitions. Example: optimismSepolia](https://github.com/opstack-kit/opstack-kit-chains/blob/main/src/chains/definitions/optimismSepolia.ts)
  - ##### [2. Add the files and network names you created in src/index.ts below in an orderly fashion.](https://opstack-kit.pages.dev/docs/getting-started.html)
  - ##### [3. After that create your PR request.](https://github.com/opstack-kit/opstack-kit-chains/pulls)

## Donate
```EVM [EVM]
0xB6Be617b1D6fE5DbdD21A6AcFD9e97A35ddCEfF5
```
