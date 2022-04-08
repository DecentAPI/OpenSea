import Web3 from 'web3';
import HDWalletProvider from '@truffle/hdwallet-provider';
import fs from 'fs';

var RequestJSON = './build/contracts/NFT_Asset_Request.json';
var ResponseJSON = './build/contracts/NFT_Asset_Response.json';

const RequestContract = JSON.parse(fs.readFileSync(RequestJSON));
const ResponseContract = JSON.parse(fs.readFileSync(ResponseJSON));

//Add wallet mnenomnic to environment - uncomment to use
//const mnemonic = fs.readFileSync(".secret").toString().trim();

//Add wallet mnenomnic as environment variable ($env:process.env.WALLET_MNEMONIC) - comment to use .secret
const mnemonic = process.env.WALLET_MNEMONIC.toString().trim();
const walletProvider = new HDWalletProvider(mnemonic, "https://rpc-mainnet.matic.network");


const init = async () => {
	try {

		let web3_wallet = new Web3(walletProvider);
		let web3 = new Web3(new Web3.providers.WebsocketProvider('wss://rpc-mainnet.matic.network'));
		const addresses = await web3_wallet.eth.getAccounts();

		const requestContract = new web3_wallet.eth.Contract(RequestContract.abi, '0x4D0f315Ab0FA0178e67dc5ADC9Af20cf37C30583');
		const responseContract = new web3.eth.Contract(ResponseContract.abi, '0x870b21805F09E712aD666A35Ec1f70eF364aA687');

		//Send non-animated NFT to Oracle for IPFs pinning		
		await requestContract.methods.pinNFT("0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb","1",false).send({
			from: addresses[0],
			gasPrice: 35000000000,
			value: "1500000000000000000"
		});
		
		//Send animated NFT to Oracle for IPFs pinning
		await requestContract.methods.pinNFT("0xa0e1b198bcc877a950a29512ab5c0ce1bb964c97","317",true).send({
			from: addresses[0],
			gasPrice: 35000000000,
			value: "300000000000000000"
		});

		//Await for response from Oracle then prints result
		responseContract.events.nftAssetData({})
			.on('data', function (event) {
				console.log(event);
			}).on('error', console.error)


	} catch (error) {
		console.error(error);

	}
}

init();