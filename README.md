<div align="center">
  
  <h3 align="center">OpenSea Data Pinner</h3>

  <p align="center">
Pin any existing OpenSea NFT on IPFS using only the Smart Contract address and the Token ID with the resulting CID on the Blockchain..   <br />
    <br />
    <a href="https://opensea.decentapi.com/">Try our Dapp</a>
    ·
    <a href="https://github.com/DecentAPI/OpenSea/issues">Report Bug</a>
    ·
    <a href="https://github.com/DecentAPI/OpenSea/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-oracle">About The Oracle</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    </ol>
</details>


<!-- ABOUT THE Oracle -->
## About The Oracle

This oracle is connected to the Polygon blockchain and uses the well-known and trusted <a href="https://docs.opensea.io/">OpenSea</a> API. All the documentation provided is by OpenSea's API is functional with our oracle.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This oracle is built with love thanks to:

* [Solidity 0.8.10](https://docs.soliditylang.org/en/v0.8.10/)
* [Web3.js 1.7.0](https://web3js.readthedocs.io/en/v1.7.0/)
* [Alchemy](https://www.alchemy.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

To get the example up and running, you can simply install the dependencies web3.js, fs and hd-walletprovider:
* web3.js
  ```sh
  npm install --save web3@1.7.0 
  ```
* hdwallet-provider
  ```sh
  npm install --save @truffle/hdwallet-provider@2.0.3 
  ```
* fs (or use the version provided with node)
  ```sh
  npm install --save fs@0.0.1-security
  ```

### Installation

To use our oracle, you can try our example or simply use our Dapp.

1. Clone the repo
   ```sh
   git clone https://github.com/DecentAPI/OpenSea.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Add wallet mnemonic to .secret
4. Run example.js
    ```sh
   node example.js
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Pin any existing OpenSea NFT on IPFS using only the Smart Contract address and the Token ID with the resulting CID on the Blockchain.. To do so, change the parameters in the "pinNFT" function by adding the NFT Contract address, its token id and its animation state (true for animated NFTs, false for non-animated NFTs).
The cost of pinning an animated NFT is 3 Matic/Request.
The cost of pinning a non-animated NFT is 1.5 Matic/Request.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

DecentAPI - [@DecentAPI](https://twitter.com/decentapi) - contact@decentapi.com

Project Link: [https://github.com/decentapi/OpenSea](https://github.com/decentapi/OpenSea)

Website: [https://www.decentapi.com/](https://www.decentapi.com/)

<p align="right">(<a href="#top">back to top</a>)</p>