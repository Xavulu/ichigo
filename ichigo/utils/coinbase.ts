import got from 'got';
import {Ok, Err, Result} from 'ts-results';

const BTC_BUY: string = 'https://api.coinbase.com/v2/prices/BTC-USD/buy';
const BTC_SELL: string = 'https://api.coinbase.com/v2/prices/BTC-USD/sell';
const ETH_BUY: string = 'https://api.coinbase.com/v2/prices/ETH-USD/buy'; 
const ETH_SELL: string = 'https://api.coinbase.com/v2/prices/ETH-USD/sell'; 

type DATA = {
    base: string; 
    currency: string; 
    amount: string; 
}; 

type CoinResponse = {
    data: DATA;
};

export interface CB {
    btcBuy: number; 
    btcSell: number; 
    ethBuy: number; 
    ethSell: number;

};

async function getCoinBaseExchange(): Promise<Result<CB, Error>> {
    let init: CB = {
        btcBuy: 0, 
        btcSell: 0, 
        ethBuy: 0, 
        ethSell: 0,
    };
    await got.get(BTC_BUY).json<CoinResponse>().then(res => {
        init.btcBuy = parseFloat(res.data.amount);
    }).catch(err => {
        console.log(err); 
        return new Err('failed to get Coinbase data...');
    });  

    await got.get(BTC_SELL).json<CoinResponse>().then(res => {
        init.btcSell = parseFloat(res.data.amount);
    }).catch(err => {
        console.log(err); 
        return new Err('failed to get Coinbase data...');
    });  

    await got.get(ETH_BUY).json<CoinResponse>().then(res => {
        init.ethBuy = parseFloat(res.data.amount);
    }).catch(err => {
        console.log(err); 
        return new Err('failed to get Coinbase data...');
    });  

    await got.get(ETH_SELL).json<CoinResponse>().then(res => {
        init.ethSell = parseFloat(res.data.amount);
    }).catch(err => {
        console.log(err); 
        return new Err('failed to get Coinbase data...');
    });  
    return Ok(init);
}


export default getCoinBaseExchange;