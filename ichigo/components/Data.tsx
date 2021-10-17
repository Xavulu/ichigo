import useSWR from "swr";
import { cryptoResponse } from '../pages/api/cryptodata';
import fetcher from '../utils/fetcher';

export function ShowData(){
    const {data, error} = useSWR('/api/cryptodata', fetcher, {
        revalidateOnReconnect: true,
        refreshWhenOffline: false, 
        errorRetryInterval: 6000, 
        errorRetryCount: 10, 
        refreshInterval: 60000,
    }); 
    if (error){
        return (
            <>
                <div className="absolute top-0 left-0 bottom-0 right-0 text-red-400 flex items-center justify-center">{ error }</div>
            </>
        );
    };

    if (!data){
        return (
            <>
                <div className="absolute top-0 left-0 bottom-0 right-0 text-red-400 flex items-center justify-center">loading</div>
            </>);
    }; 

    console.log(data);
    return (
        <>
            <div className="absolute top-0 left-0 bottom-0 right-0 text-red-400 flex items-center justify-center">{ data.comparison.bittrex.btcBuy }</div>
        </>
    );
}