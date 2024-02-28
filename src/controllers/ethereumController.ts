import { ethers } from 'ethers';

async function getLastBlockNumber() {
  const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/v3/322309d2040a45bcb6d75e70355934b5');
  return await provider.getBlockNumber();
}

async function getUSDTBalance(address: string) {
  const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/322309d2040a45bcb6d75e70355934b5');
  const usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';
  const contractABI = [
    // This is a simplified ABI. You might need a more detailed one for full functionality.
    {
      "constant": true,
      "inputs": [{"name": "_owner", "type": "address"}],
      "name": "balanceOf",
      "outputs": [{"name": "balance", "type": "uint256"}],
      "type": "function"
    }
  ];
  const contract = new ethers.Contract(usdtContractAddress, contractABI, provider);
  return await contract.balanceOf(address);
}

export { getLastBlockNumber, getUSDTBalance };
