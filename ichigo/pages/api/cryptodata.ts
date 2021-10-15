// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getCoinBaseExchange, { CB } from '../../utils/coinbase' ;
import getBittrexData from '../../utils/bittrex';
import { BD } from '../../utils/bittrex'; 
import { cryptoData } from '../../utils/compare';
import compareExchanges from '../../utils/compare';

export default async function ( req: NextApiRequest, res: NextApiResponse) : Promise<void> {
  if (req.method !== "GET"){ 
      res.status(405).json({ code : 405, message : 'method not allowed'});
      return;
  }

  let coin: CB;
  let bitt: BD;
  const info = await getCoinBaseExchange();
  const testing = await getBittrexData();
  if (info.ok && testing.ok){
    coin = info.val;
    bitt = testing.val;
    const comparison: cryptoData = compareExchanges(coin, bitt);
    res.status(200).json({ code : 200 , comparison}); 
    return
  }  
  
  //console.log(testing);
  res.status(400).json({ code : 400 , test : "failed"}); 
  return
}
