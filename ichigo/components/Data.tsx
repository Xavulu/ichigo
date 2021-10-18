import useSWR, {mutate} from "swr";
import fetcher from '../utils/fetcher';
import {Toaster} from 'react-hot-toast'; 
import renderData from '../utils/renderdata';
import Image from 'next/image';
import recScreen from "../utils/recScreen";
import errorNotif from "../utils/errorNotif";
import { Failed2Load } from "./Failed2Load";
import { LoadingScreen } from "./LoadingScreen";

const ENDPOINT: string = '/api/cryptodata';

export function ShowData(){
    const {data, error} = useSWR(ENDPOINT, fetcher, {
        revalidateOnReconnect: true,
        refreshWhenOffline: false, 
        errorRetryInterval: 6000, 
        errorRetryCount: 10, 
        refreshInterval: 180000,
    }); 
    if (error){
        errorNotif();
        return (
            <>
                <Failed2Load/>
                <Toaster/>
            </>
        );
    };

    if (!data){
        return (
            <>
                <LoadingScreen/>
            </>
        );
    }; 
    
    //
    const [rounded, recomend] = renderData(data); 
    console.log(rounded);
    console.log(recomend);
    return (
        <>
            <div className="">
                <div className="flex flex-col">
                    <div className="w-full"> 
                        <div className="border-b border-gray-200 shadow bg-pink-200 backdrop-filter backdrop-blur-lg bg-opacity-70 border-b border-gray-200 border-dotted border-2 firefox:bg-opacity-90" id="success">
                            
                            <div className="grid place-items-center">
                            <div>
                                <Image 
                                    src="/ichigo.svg"
                                    alt="logo for site"
                                    width={500}
                                    height={300}
                                />
                            </div>
                            

                            <div className="grid grid-cols-1 gap-2">
                            <div>
                            <table className="divide-y divide-gray-300">
                                <thead className=""> 
                                    <tr> 
                                        <th className="px-6 py-2 text-xs text-gray-500"> 
                                            [Symbol]
                                        </th> 
                                        <th className="px-6 py-2 text-xs text-gray-500"> 
                                            [Platform]
                                        </th> 
                                        <th className="px-6 py-2 text-xs text-gray-500"> 
                                            [Buy]
                                        </th> 
                                        <th className="px-6 py-2 text-xs text-gray-500"> 
                                            [Sell]
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-300">
                                    <tr className="whitespace-nowrap">
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    $BTC-USD
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    Coinbase
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block text-green-500"> 
                                                ${ rounded.coinBtcBuy }
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block text-red-700"> 
                                                ${ rounded.coinBtcSell }
                                                </div>
                                            </div>
                                        </td>
                                    </tr> 
                                    <tr className="whitespace-nowrap">
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    $BTC-USD
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    Bittrex
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block text-green-500"> 
                                                ${ rounded.bitBtcBuy }
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block text-red-700"> 
                                                ${ rounded.bitBtcSell }
                                                </div>
                                            </div>
                                        </td>
                                    </tr> 
                                    <tr className="whitespace-nowrap">
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    $ETH-USD
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    Coinbase
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block text-green-500"> 
                                                ${ rounded.coinEthBuy }
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block text-red-700"> 
                                                ${ rounded.coinEthSell }
                                                </div>
                                            </div>
                                        </td>
                                    </tr> 
                                    <tr className="whitespace-nowrap">
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    $ETH-USD
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    Bittrex
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block text-green-500"> 
                                                ${ rounded.bitEthBuy }
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block text-red-700"> 
                                                ${ rounded.bitEthSell }
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table> 
                            </div>
                            <div> 
                                <span className="text-xs flex justify-center text-yellow-700">data from   { rounded.date } next refresh in 3 min </span> 
                                <div className="grid grid-cols-1 gap-1 lg:flex justify-between lg:flex justify-between xl:flex justify-between">
                                    <button onClick={() => {mutate(ENDPOINT)} } className="text-sm text-indigo-700 hover:text-pink-500">refresh data</button>
                                    <button onClick={ () => {recScreen(recomend)} } className="text-sm text-green-700 hover:text-red-500">view recommendations</button>
                                </div>

                            </div>
                            </div>

                                


                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    );
}