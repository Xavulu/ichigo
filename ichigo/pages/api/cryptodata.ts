// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getCoinBaseExchange, { CB } from '../../utils/coinbase' ;

type cryptoData = {
  btcBuyPlatform: string; 
  btcSellPlatform: string; 
  ethBuyPlatform: string; 
  ethSellPlatform: string; 
  coinbase: CB;
};



export default async function ( req: NextApiRequest, res: NextApiResponse) : Promise<void> {
  if (req.method !== "GET"){ 
      res.status(405).json({ code : 405, message : 'method not allowed'});
      return;
  }
  const info = await getCoinBaseExchange();
  if (info.ok){
    const coin = info.val;
    res.status(200).json({ code : 200 , test : coin}); 
    return
  } 
  res.status(400).json({ code : 400 , test : "failed"}); 
  return
}
