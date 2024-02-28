import { BigNumber, ethers } from 'ethers';
import { getLastBlockNumber, getUSDTBalance } from '../src/controllers/ethereumController'; // Adjust the import path accordingly

// Mocking ethers.JsonRpcProvider and ethers.Contract
jest.mock('ethers', () => ({
 ...jest.requireActual('ethers'), // Use actual ethers for other things
 providers: {
    JsonRpcProvider: jest.fn().mockImplementation(() => ({
      getBlockNumber: jest.fn(),
    })),
 },
 Contract: jest.fn().mockImplementation(() => ({
    balanceOf: jest.fn(),
 })),
}));

describe('Blockchain functions', () => {
 it('should get the last block number', async () => {
    const mockProviders = Object.assign({}, ethers.providers);
  
    const mockBlockNumber = 12345678;
    mockProviders.JsonRpcProvider.prototype.getBlockNumber = jest.fn().mockResolvedValue(mockBlockNumber); 
    

    const blockNumber = await getLastBlockNumber();
    expect(blockNumber).toBe(mockBlockNumber);
 });

 it('should get the USDT balance of an address', async () => {

    const mockBalance = ethers.BigNumber.from('0x996ffd97ea');
    const address = '0xdac17f958d2ee523a2206206994597c13d831ec7';
    const balance = await getUSDTBalance(address);
    expect(balance).toEqual({ _hex: mockBalance.toHexString(), _isBigNumber: true });
});
});
