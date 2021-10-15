import { CB } from './coinbase';
import { BD } from './bittrex';
import { format , addDays} from 'date-fns';


export interface cryptoData {
    btcBuyPlatform: string; 
    btcSellPlatform: string; 
    ethBuyPlatform: string; 
    ethSellPlatform: string; 
    date: string;
    coinbase: CB;
    bittrex: BD;
}; 


function compareExchanges(cb: CB, bt: BD): cryptoData{
    const current: Date = new Date();
    let result: cryptoData = {
        btcBuyPlatform: "", 
        btcSellPlatform: "", 
        ethBuyPlatform: "", 
        ethSellPlatform: "", 
        date: `${format(current, 'EEEE MM.dd.yyyy, hh:mm a')}` + " ET",
        coinbase: cb, 
        bittrex: bt,
    };
    //buy btc
    if (cb.btcBuy < bt.btcBuy){
        result.btcBuyPlatform = "Coinbase";
    } else if (cb.btcBuy === bt.btcBuy) {
        result.btcBuyPlatform = "either";
    } else {
        result.btcBuyPlatform = "Bittrex";
    }; 
    //buy eth
    if (cb.ethBuy < bt.ethBuy){
        result.ethBuyPlatform = "Coinbase";
    } else if (cb.ethBuy === bt.ethBuy) {
        result.ethBuyPlatform = "either";
    } else {
        result.ethBuyPlatform = "Bittrex";
    }; 
    //sell btc
    if (cb.btcSell > bt.btcSell){
        result.btcSellPlatform = "Coinbase";
    } else if (cb.btcSell === bt.btcSell) {
        result.btcSellPlatform = "either";
    } else {
        result.btcSellPlatform = "Bittrex";
    }; 
    //sell eth
    if (cb.ethSell > bt.ethSell){
        result.ethSellPlatform = "Coinbase";
    } else if (cb.ethSell === bt.ethSell) {
        result.ethSellPlatform = "either";
    } else {
        result.ethSellPlatform = "Bittrex";
    }; 

    return result;
}

export default compareExchanges;