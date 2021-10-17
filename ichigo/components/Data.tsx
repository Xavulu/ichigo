import useSWR from "swr";
import { cryptoResponse } from '../pages/api/cryptodata';
import fetcher from '../utils/fetcher';
import toast, {Toaster} from 'react-hot-toast'; 
import { Renderable } from '../utils/renderdata';
import renderData from '../utils/renderdata';

const errornotif = () => toast('something went wrong, retrying in 6 seconds...', {
    icon: '❌', 
    style: {
        background: '#9D0045', 
        color: '#FFFFFF', 
        opacity: "0.7"
    }
});

export function ShowData(){
    const {data, error} = useSWR('/api/cryptodata', fetcher, {
        revalidateOnReconnect: true,
        refreshWhenOffline: false, 
        errorRetryInterval: 6000, 
        errorRetryCount: 10, 
        refreshInterval: 60000,
    }); 
    if (error){
        errornotif();
        return (
            <>
                <div className="absolute top-0 left-0 bottom-0 right-0 text-red-400 flex items-center justify-center">failed</div>
                <Toaster/>
            </>
        );
    };

    if (!data){
        return (
            <>
                <div className="absolute top-0 left-0 bottom-0 right-0 text-red-400 flex items-center justify-center">loading</div>
            </>
        );
    }; 

    const [rounded, recomend] = renderData(data); 
    console.log(rounded);
    console.log(recomend);
    return (
        <>
            <div className="absolute top-0 left-0 bottom-0 right-0 text-red-400 flex items-center justify-center">{ data.comparison.bittrex.btcBuy }</div>
        </>
    );
}