"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
function getLastBlockNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = new ethers_1.ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/322309d2040a45bcb6d75e70355934b5');
        const r = yield provider.getBlockNumber();
        console.log(r);
    });
}
function getUSDTBalance(address) {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = new ethers_1.ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/322309d2040a45bcb6d75e70355934b5');
        const usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';
        const contractABI = [
            {
                "constant": true,
                "inputs": [{ "name": "_owner", "type": "address" }],
                "name": "balanceOf",
                "outputs": [{ "name": "balance", "type": "uint256" }],
                "type": "function"
            }
        ];
        const contract = new ethers_1.ethers.Contract(usdtContractAddress, contractABI, provider);
        const r = yield contract.balanceOf(address);
        console.log(r);
    });
}
getLastBlockNumber();
console.log("=================================00");
getUSDTBalance("0xdAC17F958D2ee523a2206206994597C13D831ec7");
