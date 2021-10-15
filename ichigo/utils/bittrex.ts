import got from 'got';
import {Ok, Err, Result} from 'ts-results';

const BTC_BITTREX: string = 'https://api.bittrex.com/v3/markets/BTC-USD/ticker';
const ETH_BITTREX: string = 'https://api.bittrex.com/v3/markets/ETH-USD/ticker';

type Trade = {
    symbol: string; 
    lastTradeRate: string; 
    bidRate: string; //current highest someone is willing to pay so use as sell price
    askRate: string; //current lowest someone is willing to sell for so use as buy price
}; 

export interface BD {
    btcBuy: number; 
    btcSell: number; 
    ethBuy: number; 
    ethSell: number;

};

async function getBittrexData(): Promise<Result<BD, Error>> {
    let bittrex: BD = {
        btcBuy: 0, 
        btcSell: 0, 
        ethBuy: 0, 
        ethSell: 0,
    };

    await got.get(BTC_BITTREX).json<Trade>().then(res => {
        console.log(res);
        bittrex.btcBuy = parseFloat(res.askRate); 
        bittrex.btcSell = parseFloat(res.bidRate);
    }).catch(err => {
        console.log(err);
        return new Err('failed to get Bittrex data...');
    });

    await got.get(ETH_BITTREX).json<Trade>().then(res => {
        console.log(res);
        bittrex.ethBuy = parseFloat(res.askRate); 
        bittrex.ethSell = parseFloat(res.bidRate);
    }).catch(err => {
        console.log(err);
        return new Err('failed to get Bittrex data...');
    });

    return Ok(bittrex);
}

export default getBittrexData;