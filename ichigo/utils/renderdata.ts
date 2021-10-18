import { cryptoResponse } from "../pages/api/cryptodata";
import { BD } from "./bittrex";
import { CB } from "./coinbase";

export interface Renderable{
    date: string;
    coinBtcBuy: number; 
    coinBtcSell: number; 
    coinEthBuy: number; 
    coinEthSell: number; 
    bitBtcBuy: number; 
    bitBtcSell: number; 
    bitEthBuy: number; 
    bitEthSell: number; 
};

export interface Recommendation{
    buyBTC: string, 
    sellBTC: string, 
    buyETH: string, 
    sellETH: string,
};

function renderData(crypto: cryptoResponse): [Renderable, Recommendation]{
    const coinbase: CB = crypto.comparison.coinbase;
    const bittrex: BD = crypto.comparison.bittrex; 
    const render: Renderable = {
        date: crypto.comparison.date,
        coinBtcBuy: Number((coinbase.btcBuy).toFixed(2)),
        coinBtcSell:  Number((coinbase.btcSell).toFixed(2)),
        coinEthBuy:  Number((coinbase.ethBuy).toFixed(2)),
        coinEthSell:  Number((coinbase.ethSell).toFixed(2)),
        bitBtcBuy:  Number((bittrex.btcBuy).toFixed(2)),
        bitBtcSell:  Number((bittrex.btcSell).toFixed(2)),
        bitEthBuy:  Number((bittrex.ethBuy).toFixed(2)), 
        bitEthSell:  Number((bittrex.ethSell).toFixed(2)), 
    }; 

    const recc: Recommendation = {
        buyBTC: crypto.comparison.btcBuyPlatform, 
        sellBTC: crypto.comparison.btcSellPlatform, 
        buyETH: crypto.comparison.ethBuyPlatform, 
        sellETH: crypto.comparison.ethSellPlatform,
    };

    return [render, recc];
}

export default renderData;